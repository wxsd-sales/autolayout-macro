# Auto Layout Macro

This Webex Device macro will automatically set the call layout for specific connected domains.

## Overview

This Webex Device macro is able to detect an outbound call and its dialled SIP domain. It then checks the domain against it configured list of domains and if a match is found, it will automatically set the layout of the call to a specific layout.

## Setup

### Prerequisites & Dependencies: 

- Webex Device running RoomOS 10.x or greater
- Web admin access to the device to upload the macro.

### Installation Steps:

1. Download the ``autolayout-macro.js`` file and upload it to your Webex Desks Macro editor via the web interface.
2. Configure the macro by entering desired domains, default layout and if you want alerts. The macro comments explain the options.
```javascript
const config = {
  showAlerts: true, // true = show alert when the preview has been restored
  domains: [
    'm.webex.com',   // Domains which you wish this macro to trigger for
    'example.com'   // Add more domains to support multiple
  ],
  layout: 'Prominent' // Check your devices layout options e.g. Grid
}
```
3. Enable the Macro on the editor.


## Validation

This Macro has been validated to work on the following devices:
* Desk Pro
* Desk Hub

## Demo

*For more demos & PoCs like this, check out our [Webex Labs site](https://collabtoolbox.cisco.com/webex-labs).

## License

All contents are licensed under the MIT license. Please see [license](LICENSE) for details.


## Disclaimer

Everything included is for demo and Proof of Concept purposes only. Use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for. These demos are for Cisco Webex use cases, but are not Official Cisco Webex Branded demos.


## Questions
Please contact the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?subject=autolayout-macro) for questions. Or, if you're a Cisco internal employee, reach out to us on the Webex App via our bot (globalexpert@webex.bot). In the "Engagement Type" field, choose the "API/SDK Proof of Concept Integration Development" option to make sure you reach our team. 
