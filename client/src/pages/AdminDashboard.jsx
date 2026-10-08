import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">EZ Campus — Admin</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{user?.name}</span>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1 rounded-lg text-sm">
            Logout
          </button>
        </div>
      </nav>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name} 🎓</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow"><p className="text-gray-500 text-sm">Total Students</p><p className="text-2xl font-bold">0</p></div>
          <div className="bg-white p-6 rounded-xl shadow"><p className="text-gray-500 text-sm">Total Staff</p><p className="text-2xl font-bold">0</p></div>
          <div className="bg-white p-6 rounded-xl shadow"><p className="text-gray-500 text-sm">Pending Queries</p><p className="text-2xl font-bold">0</p></div>
        </div>
        <p className="mt-8 text-gray-500 text-sm">More admin features coming soon...</p>
      </main>
    </div>
  );
}