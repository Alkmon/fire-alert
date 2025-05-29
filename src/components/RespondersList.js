const RespondersList = ({ responders }) => {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-gray-700 mb-2">Bomberos respondiendo:</h3>
      <div className="space-y-2">
        {responders.map((responder, index) => (
          <div key={index} className="flex items-center p-2 bg-gray-100 rounded">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
              {responder.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{responder.name}</p>
              <p className="text-xs text-gray-500">{responder.rank} • {responder.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RespondersList;