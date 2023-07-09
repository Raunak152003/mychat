import logo from './logo.svg';
import './App.css';
// Integrate the SDK
import { ZIMKitManager, Common } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';
import { APP_ID, APP_SECRET } from './constant';
import { useEffect, useState } from 'react';

const id = Math.floor(Math.random()*1000)
function App() {
  const [state, setState] = useState(
  {
    appConfig: {
        appID: APP_ID,        // The AppID you get from the ZEGOCLOUD admin console.
        serverSecret: APP_SECRET // The serverSecret you get from ZEGOCLOUD Admin Console.
    },
    // The userID and userName is a strings of 1 to 32 characters.
    // Only digits, letters, and the following special characters are supported: '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '`', ';', '’', ',', '.', '<', '>', '/', '\'
    userInfo: {
        // Your ID as a user.
        userID: 'Miachopra',
        // Your name as a user.
        userName: 'Miachopra',
        // The image you set as a user avatar must be network images. e.g., https://storage.zego.im/IMKit/avatar/avatar-0.png
        userAvatarUrl: ''
    },
}
  )
  useEffect(() => {
    const init = async()=>{
      const zimKit = new ZIMKitManager();
        const token = zimKit.generateKitTokenForTest(
          state.appConfig.appID,
          state.appConfig.serverSecret, 
          state.userInfo.userID);
        await zimKit.init(state.appConfig.appID);
        await zimKit.connectUser(state.userInfo, token);
    }
    init();
  },[]);
  return (
    <div className="App">
      Welocme Back
      <Common></Common>
    </div>
  );
}

export default App;
