import { useState } from 'react';
import AlertScreen from './components/AlertScreen';
import { sampleAlert, sampleResponders } from './mock/alerts';

const App = () => {
  const [responders, setResponders] = useState(sampleResponders);
  
  const handleConfirm = () => {
    // Lógica para confirmar asistencia
    alert('Asistencia confirmada');
  };

  const handleReject = () => {
    // Lógica para rechazar asistencia
    alert('Asistencia rechazada');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">FireAlert</h1>
      <AlertScreen 
        alert={sampleAlert}
        responders={responders}
        onConfirm={handleConfirm}
        onReject={handleReject}
      />
    </div>
  );
};

export default App;

// DONE