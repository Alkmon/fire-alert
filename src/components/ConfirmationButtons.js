const ConfirmationButtons = ({ onConfirm, onReject }) => {
  return (
    <div className="flex space-x-4 mt-4">
      <button 
        onClick={onConfirm}
        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        ASISTO
      </button>
      <button 
        onClick={onReject}
        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        NO ASISTO
      </button>
    </div>
  );
};

export default ConfirmationButtons;