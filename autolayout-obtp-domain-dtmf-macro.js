/********************************************************
 * 
 * Macro Author:      	William Mills
 *                    	Technical Solutions Specialist 
 *                    	wimills@cisco.com
 *                    	Cisco Systems
 * 
 * Version: 1-0-0
 * Released: 12/14/23
 * 
 * This Webex Device macro will automatically sets the call layout
 * for specific connected domains by sending a DTMF string into the call
 * 
 * Full Readme, source code and license agreement available on Github:
 * https://github.com/wxsd-sales/autolayout-macro
 * 
 ********************************************************/
import xapi from 'xapi';

const config = {
  showAlerts: true, // true = show alert when the preview has been restored
  domains: [
    'm.webex.com',   // Domains which you wish this macro to trigger for
    'example.com'   // Add more domains to support multiple
  ],
  dtmf: '5' // DTMF string to send once connected to the meeting
}


let callId 

// Listen for call connections
xapi.Event.CallSuccessful.on(callSuccess);
xapi.Status.Call.on(callStatus)


function callStatus(event) {
  if(event.Status != 'Dialling') return;
  const matches = config.domains.filter(domain => event.RemoteNumber.toLowerCase().endsWith(domain.toLowerCase()));
  if (matches.length < 1) return;
  callId = event.id;
  console.log(`CallId ${callId} is a match, now monitoring` );
}

// Checks if the connected call matches any of the domains in the config
// Then sets to the layout to the desired layout in the config
async function callSuccess(event) {
  if(callId != event.CallId) return;
  console.log(`CallId ${callId} has answered, taking action` )
  sendDTMF();
}

function sendDTMF(){
  alert('Sending DTMF string:', config.dtmf)
  xapi.Command.Call.DTMFSend({ DTMFString: config.dtmf, Feedback: 'Silent' });
}

// Display Alert of the macros actions
function alert(text) {
  console.log(text)
  if (!config.showAlerts) return;
  xapi.Command.UserInterface.Message.Alert.Display({
    Duration: 5,
    Text: 'Auto Layout',
    Title: text
  });
}