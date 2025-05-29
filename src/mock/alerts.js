export const sampleAlert = {
  type: 'fire',
  title: 'Incendio en almacén',
  location: 'Calle Principal #123',
  timestamp: Date.now(),
  description: 'Incendio de nivel 2 en almacén de productos químicos. Se requiere equipo especializado.'
};

export const sampleResponders = [
  {
    id: '1',
    name: 'Juan Pérez',
    rank: 'Capitán',
    status: 'En camino',
    specialty: 'Químicos'
  },
  {
    id: '2',
    name: 'María García',
    rank: 'Teniente',
    status: 'En estación',
    specialty: 'Rescate'
  }
];