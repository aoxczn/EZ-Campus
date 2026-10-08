import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [form, setForm] = useState({
    name: '', email: '', password: '', rollNo: '', course: '', semester: '', batch: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register({ ...form, role: 'student', semester: Number(form.semester) });
      navigate('/student');
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
    }
    setLoading(false);
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-1">
          EZ Campus
        </h1>
        <p className="text-center text-gray-500 mb-6">Student Registration</p>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" placeholder="Full Name" required onChange={onChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="email" type="email" placeholder="Email" required onChange={onChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="password" type="password" placeholder="Password (min 6 chars)" required onChange={onChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="grid grid-cols-2 gap-3">
            <input name="rollNo" placeholder="Roll No" required onChange={onChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input name="course" placeholder="Course" required onChange={onChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input name="semester" type="number" placeholder="Semester" required onChange={onChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input name="batch" placeholder="Batch (e.g. 2024)" required onChange={onChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold disabled:opacity-50">
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  );
}