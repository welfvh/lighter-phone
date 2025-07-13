# Implementation Plan: Internet Condom iOS App

## Project Structure

```
InternetCondom/
├── InternetCondom/                 # Main App Target
│   ├── Views/
│   │   ├── ContentView.swift       # Main toggle interface
│   │   ├── LogView.swift          # DNS request logs
│   │   └── WhitelistView.swift    # Whitelist management
│   ├── Models/
│   │   ├── VPNManager.swift       # VPN control logic
│   │   ├── DNSLog.swift          # Core Data model
│   │   └── WhitelistManager.swift # Whitelist operations
│   └── Resources/
│       └── InternetCondom.xcdatamodeld
├── PacketTunnel/                   # Network Extension Target
│   ├── PacketTunnelProvider.swift # DNS filtering logic
│   ├── DNSFilter.swift            # Domain filtering
│   └── Logger.swift               # Request logging
└── Shared/
    ├── SharedData.swift            # App Groups communication
    └── Constants.swift             # Shared constants
```

## Phase 1: Project Setup (Days 1-3)

### 1.1 Xcode Project Creation
```bash
# Create new iOS project
# Add Network Extension target
# Configure App Groups
# Set up entitlements
```

**Key Configuration**:
- **Main App Bundle ID**: `com.yourcompany.internetcondom`
- **Extension Bundle ID**: `com.yourcompany.internetcondom.packettunnel`
- **App Group**: `group.com.yourcompany.internetcondom`

### 1.2 Entitlements Setup

**Main App Entitlements**:
```xml
<key>com.apple.developer.networking.networkextension</key>
<array>
    <string>packet-tunnel-provider</string>
</array>
<key>com.apple.security.application-groups</key>
<array>
    <string>group.com.yourcompany.internetcondom</string>
</array>
```

**Extension Entitlements**:
```xml
<key>com.apple.developer.networking.networkextension</key>
<array>
    <string>packet-tunnel-provider</string>
</array>
<key>com.apple.security.application-groups</key>
<array>
    <string>group.com.yourcompany.internetcondom</string>
</array>
```

### 1.3 Core Data Setup
```swift
// DNSLog.xcdatamodeld
entity DNSLog {
    timestamp: Date
    domain: String
    allowed: Bool
    requestType: String
}
```

## Phase 2: Basic VPN Infrastructure (Days 4-7)

### 2.1 VPNManager Implementation
```swift
// VPNManager.swift - Main app VPN control
import NetworkExtension

class VPNManager: ObservableObject {
    @Published var isConnected = false
    @Published var status: NEVPNStatus = .invalid
    
    private let manager = NETunnelProviderManager()
    
    func setup() async throws {
        // Configure tunnel provider
        // Load/save VPN configuration
    }
    
    func connect() async throws {
        // Start VPN tunnel
    }
    
    func disconnect() async throws {
        // Stop VPN tunnel
    }
}
```

### 2.2 PacketTunnelProvider Skeleton
```swift
// PacketTunnelProvider.swift
import NetworkExtension
import os.log

class PacketTunnelProvider: NEPacketTunnelProvider {
    private let logger = Logger(subsystem: "InternetCondom", category: "PacketTunnel")
    
    override func startTunnel(options: [String : NSObject]?) async throws {
        // 1. Configure local DNS resolver
        // 2. Set up packet flow
        // 3. Start DNS filtering
    }
    
    override func stopTunnel(with reason: NEProviderStopReason) async {
        // Clean shutdown
    }
}
```

## Phase 3: DNS Filtering Core (Days 8-12)

### 3.1 DNS Packet Processing
```swift
// DNSFilter.swift
class DNSFilter {
    private let whitelist: Set<String>
    
    func processDNSPacket(_ packet: Data) -> Data? {
        let domain = extractDomain(from: packet)
        
        if isWhitelisted(domain) {
            return forwardToUpstreamDNS(packet)
        } else {
            logBlockedRequest(domain)
            return createBlockedResponse(packet)
        }
    }
    
    private func isWhitelisted(_ domain: String) -> Bool {
        // Check against whitelist
    }
}
```

### 3.2 Essential Whitelist
```swift
// Constants.swift
struct DefaultWhitelist {
    static let domains = [
        // Apple System Services
        "push.apple.com",
        "api.apple.com", 
        "gsp-ssl.ls.apple.com",
        "time.apple.com",
        "captive.apple.com",
        "metrics.apple.com",
        
        // DNS Servers
        "1.1.1.1",
        "8.8.8.8",
        "8.8.4.4",
        
        // Emergency Services
        "emergency.services.gov"
    ]
}
```

### 3.3 Logging Infrastructure
```swift
// Logger.swift (Extension)
class DNSLogger {
    private let sharedDefaults = UserDefaults(suiteName: "group.com.yourcompany.internetcondom")
    
    func logRequest(domain: String, allowed: Bool) {
        let entry = DNSLogEntry(
            timestamp: Date(),
            domain: domain,
            allowed: allowed
        )
        
        // Store in shared container
        saveToSharedStorage(entry)
    }
}
```

## Phase 4: User Interface (Days 13-17)

### 4.1 Main Toggle View
```swift
// ContentView.swift
struct ContentView: View {
    @StateObject private var vpnManager = VPNManager()
    
    var body: some View {
        VStack(spacing: 40) {
            // Status indicator
            StatusIndicator(isConnected: vpnManager.isConnected)
            
            // Main toggle
            VStack {
                Text("Internet Protection")
                    .font(.title2)
                    .fontWeight(.medium)
                
                Toggle("", isOn: $vpnManager.isConnected)
                    .toggleStyle(CustomToggleStyle())
                    .onChange(of: vpnManager.isConnected) { value in
                        Task {
                            if value {
                                try await vpnManager.connect()
                            } else {
                                try await vpnManager.disconnect()
                            }
                        }
                    }
            }
            
            // Navigation
            NavigationView {
                VStack {
                    NavigationLink("View Logs", destination: LogView())
                    NavigationLink("Manage Whitelist", destination: WhitelistView())
                }
            }
        }
        .padding()
    }
}
```

### 4.2 DNS Log Viewer
```swift
// LogView.swift
struct LogView: View {
    @State private var logs: [DNSLogEntry] = []
    
    var body: some View {
        List(logs) { log in
            HStack {
                VStack(alignment: .leading) {
                    Text(log.domain)
                        .font(.system(.body, design: .monospaced))
                    Text(log.timestamp.formatted())
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                
                Spacer()
                
                Text(log.allowed ? "ALLOWED" : "BLOCKED")
                    .font(.caption)
                    .fontWeight(.bold)
                    .foregroundColor(log.allowed ? .green : .red)
            }
        }
        .navigationTitle("DNS Logs")
        .onAppear { loadLogs() }
    }
}
```

### 4.3 Whitelist Management
```swift
// WhitelistView.swift
struct WhitelistView: View {
    @State private var domains: [String] = []
    @State private var newDomain = ""
    
    var body: some View {
        VStack {
            // Add domain
            HStack {
                TextField("Add domain", text: $newDomain)
                Button("Add") {
                    addDomain(newDomain)
                    newDomain = ""
                }
            }
            .padding()
            
            // Domain list
            List {
                ForEach(domains, id: \.self) { domain in
                    Text(domain)
                        .font(.system(.body, design: .monospaced))
                }
                .onDelete(perform: deleteDomains)
            }
        }
        .navigationTitle("Whitelist")
    }
}
```

## Phase 5: Integration & Testing (Days 18-21)

### 5.1 App Groups Communication
```swift
// SharedData.swift
class SharedDataManager {
    private let suiteName = "group.com.yourcompany.internetcondom"
    private let userDefaults: UserDefaults
    
    func syncWhitelist() {
        // Sync between app and extension
    }
    
    func getLogs() -> [DNSLogEntry] {
        // Retrieve logs from shared storage
    }
}
```

### 5.2 Testing Checklist

**Functional Testing**:
- [ ] VPN connects/disconnects reliably
- [ ] Whitelisted domains resolve correctly
- [ ] Blocked domains return NXDOMAIN
- [ ] Logs capture all DNS requests
- [ ] UI updates reflect VPN status

**Performance Testing**:
- [ ] DNS response time <50ms
- [ ] Battery impact <5%
- [ ] Memory usage stable
- [ ] No memory leaks in 24hr test

**Edge Case Testing**:
- [ ] App backgrounding/foregrounding
- [ ] Network changes (WiFi to cellular)
- [ ] VPN profile conflicts
- [ ] iOS system updates

## Phase 6: Polish & Deployment (Days 22-28)

### 6.1 UI Polish
- Custom toggle design
- Loading states
- Error handling
- Accessibility support

### 6.2 Performance Optimization
- DNS caching
- Log rotation
- Background processing
- Memory management

### 6.3 App Store Preparation
- Privacy policy
- App Store description
- Screenshots
- TestFlight beta testing

## Development Tools & Setup

### Required Software
- **Xcode 15+**
- **iOS 15+ testing device** (VPN testing requires real device)
- **Apple Developer Account** with Network Extensions entitlement

### Testing Setup
```bash
# Enable Network Extension debugging
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder

# Monitor VPN logs
log stream --predicate 'subsystem == "InternetCondom"' --level debug
```

### Debugging Commands
```bash
# Check VPN status
scutil --nc list

# Monitor DNS queries
sudo tcpdump -i any port 53

# View system logs
log show --predicate 'subsystem == "com.apple.networkextension"' --last 1h
```

## Risk Mitigation

### Technical Risks
1. **VPN Permission Issues**: Implement clear onboarding flow
2. **DNS Performance**: Cache frequently accessed domains
3. **Battery Drain**: Optimize packet processing loops

### Business Risks
1. **App Store Rejection**: Follow VPN app guidelines strictly
2. **User Confusion**: Provide clear setup instructions
3. **iOS Updates**: Monitor beta releases for compatibility

## Success Metrics

### Technical KPIs
- DNS resolution time: <50ms average
- VPN uptime: >99% when enabled
- Crash rate: <0.1%
- Battery impact: <5%

### User KPIs
- Setup completion rate: >90%
- Daily active usage: >50% when installed
- Whitelist accuracy: <5 false positives

This implementation plan provides a clear roadmap for building the Internet Condom app, with specific code examples and testing strategies for each phase.