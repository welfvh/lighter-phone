# Product Requirements Document: Internet Condom

## Project Overview

**Product Name**: Internet Condom  
**Vision**: A simple iOS app that provides VPN-level internet blocking with DNS filtering and comprehensive logging  
**Target Platform**: iOS 15.0+  
**Development Timeline**: 4-6 weeks MVP  

## Problem Statement

Users want to eliminate internet distractions while maintaining essential device functionality (calls, texts, offline apps). Existing solutions either:
- Only block specific apps (not internet access)
- Lack comprehensive logging for debugging connectivity issues
- Are overly complex with unnecessary features

## Solution

A minimalist iOS app with a single toggle that:
1. **Blocks all internet access** by default via DNS filtering
2. **Logs all connection attempts** for whitelist refinement
3. **Allows essential system services** through curated whitelist
4. **Provides simple on/off control** with no complexity

## Core Features (MVP)

### 1. Main Toggle Interface
- **Single prominent toggle** - "Internet Protection: ON/OFF"
- **Status indicator** - Clear visual feedback of current state
- **Minimal design** - Following Light Phone philosophy
- **Connection status** - Show if VPN tunnel is active

### 2. DNS-Based Internet Blocking
- **Block all domains** by default
- **Essential whitelist** for iOS system services
- **VPN tunnel** using PacketTunnelProvider
- **Local DNS resolver** that filters requests

### 3. Connection Logging
- **Log all DNS requests** with timestamps
- **Domain name capture** for each request
- **Allow/Block status** for each request
- **Simple log viewer** in app

### 4. Basic Whitelist Management
- **View current whitelist** domains
- **Add domains** from log entries
- **Remove domains** from whitelist
- **Export/import** whitelist for backup

## User Experience

### Primary Flow
1. User opens app
2. User toggles "Internet Protection" ON
3. VPN activates, internet blocked except whitelist
4. User can view logs to see blocked domains
5. User can whitelist essential domains as needed
6. User toggles OFF to restore full internet

### Secondary Flows
- **View Logs**: See what domains were blocked/allowed
- **Manage Whitelist**: Add/remove domains from allowed list
- **Emergency Override**: Temporary disable with time limit

## Technical Requirements

### Architecture
- **Main App**: SwiftUI interface for toggle and log viewing
- **Network Extension**: PacketTunnelProvider for DNS filtering
- **Shared Container**: App Groups for data sharing between targets
- **Core Data**: Local storage for logs and whitelist

### iOS Capabilities Required
- **Network Extensions** entitlement
- **App Groups** for data sharing
- **Background App Refresh** for logging
- **VPN configurations** permission

### Essential Whitelist (Initial)
```
# Apple System Services
push.apple.com
api.apple.com
gsp-ssl.ls.apple.com
time.apple.com
captive.apple.com

# DNS Resolvers
1.1.1.1
8.8.8.8

# Emergency Services
emergency.services.gov
```

## Non-Requirements (Explicitly Out of Scope)

- ❌ App-specific blocking (use Screen Time for this)
- ❌ Time-based scheduling
- ❌ Gamification features
- ❌ Social sharing
- ❌ Multiple user profiles
- ❌ Advanced analytics/dashboards
- ❌ Website categorization
- ❌ Custom DNS servers

## Success Metrics

### Technical Success
- **VPN reliability**: 99%+ uptime when enabled
- **DNS response time**: <50ms for whitelisted domains
- **Battery impact**: <5% additional drain
- **Log completeness**: Capture 100% of DNS requests

### User Success
- **Setup time**: <2 minutes from install to working
- **False positives**: <5 essential services blocked initially
- **User retention**: Users keep protection enabled >50% of time

## Risk Assessment

### High Risk
- **Apple App Store approval** - VPN apps require careful compliance
- **iOS system compatibility** - System updates may break functionality
- **Battery optimization** - VPN tunnel must be efficient

### Medium Risk
- **Essential services discovery** - May miss critical system domains
- **User experience** - Balance simplicity with necessary controls

### Low Risk
- **DNS caching** - May affect some logging accuracy
- **Network performance** - Minimal impact expected

## Platform Constraints

### iOS Limitations
- **Cannot block system apps** entirely
- **No root-level access** to network stack
- **VPN profile management** requires user permission
- **Background execution** limited by iOS power management

### Development Constraints
- **Real device testing** required (no simulator support)
- **Network Extension debugging** more complex than standard apps
- **App Store review** process for VPN apps

## Dependencies

### External
- **Apple Developer Program** membership
- **Network Extensions** entitlement approval
- **TestFlight** for beta testing

### Internal
- **Xcode 15+** for development
- **iOS 15+** testing devices
- **Core Data** experience for logging

## Timeline Estimate

### Week 1-2: Foundation
- Xcode project setup with Network Extension
- Basic VPN tunnel implementation
- Simple toggle UI

### Week 3-4: Core Features
- DNS filtering logic
- Connection logging
- Basic whitelist management

### Week 5-6: Polish & Testing
- UI refinement
- Performance optimization
- TestFlight beta testing

## Future Considerations (Post-MVP)

### Potential Enhancements
- **Apple Watch companion** for quick toggle
- **Shortcuts integration** for automation
- **Widget** for home screen control
- **Focus mode integration** with iOS

### Advanced Features
- **Custom DNS servers** option
- **Time-based rules** (night mode, work hours)
- **Usage statistics** and trends
- **Family sharing** of whitelist

## Definition of Done

The MVP is complete when:
1. ✅ User can toggle internet blocking on/off
2. ✅ VPN tunnel blocks all non-whitelisted domains
3. ✅ All DNS requests are logged with timestamps
4. ✅ User can view logs and manage whitelist
5. ✅ Essential iOS services continue working
6. ✅ App passes TestFlight review
7. ✅ Battery impact is acceptable (<5%)
8. ✅ Setup process is under 2 minutes

## Approval Criteria

**Technical Approval**:
- All core features functional on real devices
- No memory leaks or crashes in 24hr test
- DNS filtering accuracy >95%

**User Experience Approval**:
- Toggle works reliably within 3 seconds
- Log viewer loads in <2 seconds
- Whitelist changes take effect immediately

**Business Approval**:
- App Store guidelines compliance verified
- Privacy policy covers all data collection
- Terms of service appropriate for VPN app