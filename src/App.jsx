import { useState } from 'react'
import './App.css'

function App() {
  // Function to call Android native methods
  const navigateToNativeScreen = (screenName) => {
    // Check if we're running in Android WebView
    if (window.AndroidBridge) {
      // Call the native method
      window.AndroidBridge.navigateTo(screenName);
    } else {
      // For testing in browser
      console.log(`Would navigate to ${screenName} if in Android WebView`);
      alert(`Would navigate to ${screenName} if in Android WebView`);
    }
  };

  const navigateToAppScreen = (className) => {
    // Check if we're running in Android WebView
    if (window.AndroidBridge) {
      // Call the native method
      window.AndroidBridge.navigateToAppScreen(className);
    } else {
      // For testing in browser
      console.log(`Would navigate to ${className} if in Android WebView`);
      alert(`Would navigate to ${className} if in Android WebView`);
    }
  };

  const showNativeToast = (message) => {
    if (window.AndroidBridge) {
      window.AndroidBridge.showToast(message);
    } else {
      alert(message);
    }
  };

  return (
    <div className="app-container">
      <h1>Android Testing React App</h1>
      
      <div className="description">
        <p>This React app demonstrates communication between web content and native Android code.</p>
        <p>Click the buttons below to navigate to different screens in the Android app.</p>
      </div>
      
      <div className="button-container">
        <button 
          onClick={() => navigateToNativeScreen('home')}
          className="nav-button home-button"
        >
          Go to Home Screen
        </button>
        
        <button 
          onClick={() => navigateToNativeScreen('settings')}
          className="nav-button settings-button"
        >
          Go to Settings
        </button>
        
        <button 
          onClick={() => navigateToNativeScreen('profile')}
          className="nav-button profile-button"
        >
          Go to Profile
        </button>
        
        <button 
          onClick={() => showNativeToast('Hello from React!')}
          className="nav-button toast-button"
        >
          Show Toast Message
        </button>
        
        <button 
          onClick={() => navigateToAppScreen('TestActivity')}
          className="nav-button test-button"
        >
          Go to Test Page
        </button>
      </div>
    </div>
  )
}

export default App
