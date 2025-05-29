const EmergencyAlertCard = ({ type, title, location, timestamp }) => {
  const alertColors = {
    'fire': 'bg-red-500',
    'accident': 'bg-orange-500',
    'help': 'bg-yellow-500',
    'other': 'bg-gray-500',
    'cancel': 'bg-green-500'
  };

  const alertIcons = {
    'fire': '🔥',
    'accident': '🚑',
    'help': '🆘',
    'other': '📌',
    'cancel': '✅'
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${alertColors[type]} text-white mb-4`}>
      <div className="flex items-center">
        <span className="text-2xl mr-3">{alertIcons[type]}</span>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{location} • {new Date(timestamp).toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlertCard;