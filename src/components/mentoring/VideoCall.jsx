
import React, { useState, useEffect } from "react";

const VideoCall = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    if (isCallActive) {
      // Initialize video call here (e.g., connect to a WebRTC service)
      console.log("Video call initialized");
    }
    return () => {
      if (isCallActive) {
        // Clean up video call resources
        console.log("Video call terminated");
      }
    };
  }, [isCallActive]);

  const startCall = () => {
    setIsCallActive(true);
  };

  const endCall = () => {
    setIsCallActive(false);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, sender: "You" }]);
      setMessage("");
      // In a real app, you'd send this message to the other participant
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-4">Video Call</h3>
      <div className="mb-4">
        {isCallActive ? (
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <p>Video call in progress</p>
          </div>
        ) : (
          <div className="bg-gray-100 h-64 flex items-center justify-center">
            <p>Video call not started</p>
          </div>
        )}
      </div>
      <div className="mb-4">
        {isCallActive ? (
          <button
            onClick={endCall}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            End Call
          </button>
        ) : (
          <button
            onClick={startCall}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Start Call
          </button>
        )}
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Chat</h4>
        <div className="bg-gray-100 h-40 overflow-y-auto mb-2 p-2">
          {chatMessages.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow px-2 py-1 border rounded-l-lg"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded-r-lg hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoCall;
