const Notifications = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Notifications</h1>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            Notification Preferences
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Notifications
              </label>
              <select className="block w-full px-4 py-2 mt-1 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                SMS Notifications
              </label>
              <select className="block w-full px-4 py-2 mt-1 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Push Notifications
              </label>
              <select className="block w-full px-4 py-2 mt-1 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
            Cancel
          </button>
          <button className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
