import EmergencyAlertCard from './EmergencyAlertCard';
import ConfirmationButtons from './ConfirmationButtons';
import RespondersList from './RespondersList';

const AlertScreen = ({ alert, responders, onConfirm, onReject }) => {
  return (
    <div className="p-4">
      <EmergencyAlertCard 
        type={alert.type}
        title={alert.title}
        location={alert.location}
        timestamp={alert.timestamp}
      />
      
      <ConfirmationButtons 
        onConfirm={onConfirm}
        onReject={onReject}
      />
      
      <RespondersList responders={responders} />
    </div>
  );
};

export default AlertScreen;