import React from 'react';

interface NotificationModalProps { 
  h1: string; 
  h2: string;
  buttons: { text: string; onClick: () => void }[];
};

const NotificationModal: React.FC<NotificationModalProps> = ({ h1, h2, buttons }) => {
  
  return (
    <div className="w-full fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-stock-card text-stock-background p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-xl font-semibold">{h1}</h1>
        <h2 className="mt-2 mb-4 text-stock-secondary">{h2}</h2>
        
        {/* Rendering buttons dynamically */}
        <div className="mt-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="bg-stock-accent text-white p-2 rounded-lg mx-2 transition-all hover:bg-blue-600 cursor-pointer"
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
