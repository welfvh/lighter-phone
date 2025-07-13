Is there a sort of DNS level wave blocking the entire Internet on my iPhone. Not a big fan of using screen time.
Edit
There are several DNS-based content filtering options that can block content across your entire iPhone without using Screen Time:
DNS-based solutions:
1.1.1.1 for Families - Cloudflare's free service that blocks malware and adult content
OpenDNS/Cisco Umbrella - Offers different filtering levels including malware, phishing, and content categories
Quad9 - Focuses on security threats and malicious sites
CleanBrowsing - Specifically designed for family-friendly filtering
How to set it up: You can configure these through your iPhone's WiFi settings by changing the DNS servers, or through your router to affect all devices on your network. Some services also offer dedicated apps that create a VPN-like connection to route traffic through their filtered DNS servers.
Third-party apps:
Circle Home Plus - Router-level filtering
Disney Circle - Family internet filtering
Qustodio - Comprehensive parental controls with DNS filtering
The DNS approach works at the network level, so it filters all apps and browsers without needing individual app restrictions. However, it won't block everything since some content is served from the same domains as legitimate content, and apps using their own DNS or VPNs might bypass it.
What type of content are you looking to block? That would help determine which service might work best for your needs.



IMG_0016.png
IMG_0017.png
IMG_0018.png
IMG_0019.png
I want to make an app that makes the iPhone a “lighter” phone in the sense of the light phone. I found the light phone 3 to give a profound sense of freedom, now im trying to approximate how that can be done on iPhone. Obviously no social media. No browser (thus looking for ways to block the internet, ideally at dns level, ideally mediated by an LLM that can eG. Grant you well reasoned wishes). A home screen config like this one, minimal, extremely limited selection of tools, all kinds of other apps hidden or deleted or requiring faceid to increase friction. All notifications off. Greyscale. Apps like one sec or opal that add friction if you do choose social media. Apps like Olo and pliability that add nervous system regulation and wellbeing to your life. I’m imagining building an app that takes the cognitive load out of this project and just sort of gives you toggle buttons for every single one of these, giving you instructions for what can’t be automated, asking for a before / after screenshot for sharing to social media. Finally a reasonable approach to managing your digital wellbeing, letting you choose where exactly on the spectrum of lightness you want to be, letting you easily adapt throughout different times of your life
Edit
This is a brilliant concept! You're essentially creating a "digital minimalism configurator" that makes it dead simple to transform an iPhone into something closer to the Light Phone experience. The idea of having toggle buttons for different levels of digital wellness is really compelling.
Looking at your screenshots, I can see you're already experimenting with Cloudflare WARP. Here's how I'd think about building this:
Core App Features:
Lightness Levels: Presets like "Light Phone Mode," "Focus Mode," "Mindful Mode," and "Standard" with different restrictions
One-tap toggles for each feature you mentioned
Smart automation where possible, clear instructions where manual setup is needed
Before/after documentation for sharing your transformation
Technical Implementation:
For DNS-level blocking with LLM mediation, you could:
Create a custom DNS server that routes through an LLM API
Use iOS Shortcuts + your app to create approval workflows
Integrate with existing solutions like NextDNS or Pi-hole but add the LLM layer
App Architecture:
- Onboarding flow (assess current usage, set goals)
- Dashboard with lightness meter
- Feature toggles organized by category:
  * Network (DNS blocking, app restrictions)
  * Visual (grayscale, minimal home screen)
  * Behavioral (friction apps, notification management)
  * Wellbeing (breathing apps, digital detox timers)
- Progress tracking and social sharing
- Emergency "restore" button
The LLM-mediated internet access is particularly interesting - imagine being able to say "I need to research vacation rentals in Portugal" and having it grant temporary access to specific domains while maintaining the overall restriction.
What's your technical background? Are you thinking native iOS app, or could this work as a web-based configuration tool?



Can you run a deep research on what the most comprehensive state of setting would entail? And which of these thing could be somehow automated in creative ways? I’m thinking we could eG look for deep links to activate accessibility features. Or let users download a shortcut made by us that turns this on, so we can use a shortcuts deep links to activate to toggle it, etc.
Edit
I'll dive deep into researching comprehensive iPhone "light phone" configurations and automation possibilities. This is a fascinating project that could really help people reclaim their digital wellness.

iPhone digital minimalism research
favicon
favicon
favicon
Research complete
•
395 sources
•
14m 40s
Your Light Phone transformation guide is ready. It explains how to turn your iPhone into a minimalist device by combining iOS settings, automation tools, and third-party apps. The guide details specific Screen Time configurations, Focus modes, Accessibility features, and friction-adding apps that replicate the Light Phone experience. It includes a 5-phase implementation roadmap with technical instructions for various levels of digital minimalism.

Engineering Digital Minimalism: Transform Your iPhone Into a Light Phone
Document 



image
image
delete social media could use the canOpen feature of flutter (im sure there’s a swift equivalent) to identify apps currently installed, and show a sort of progress bar in removing them.
we should ask for a screenshot of the homescreen as required part of the onboarding, to creative narrative tension for the before and after. This also helps identify some current settings, like notification batches on, etc.
Maybe we even place that before after screenshot at the top of the app Home Screen 
Also 
- black wallpaper
- always on dark mode (not automatic)
- night shift at night, warmer setting
- shortcuts automations for turning on airplane mode at night
- minimizing Lock Screen cognitive load by removing widgets
- cleaning up the screen left of the Home Screen
- removing or disabling Home Screen pages
- allowing screentime access to get the before and after data on screentime
- work towards being the most effective screentime intervention
- add friction to installing social apps?
- turn off Siri suggestions and app suggestions 
- large dark icons to remove text from Home Screen
- reduce or bundle messenger apps into a folder
(There should be a note somewhere that we think it’s hard to go 100% light on your primary phone, to not set too strong expectations, and eG encouraging the experiment of trying a second phone or getting a light phone (with our affiliate link)