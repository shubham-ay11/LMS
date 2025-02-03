// import React, { useState } from 'react'; 
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', formData);
//       alert(response.data.message);
//       localStorage.setItem('token', response.data.token);
//     } catch (error) {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: 'url(/img/boy.png)',
//         backgroundColor: 'rgba(0, 128, 0, 0.7)',
//         backgroundBlendMode: 'overlay',
//       }}
//     >
//       <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
//         <h1 className="text-4xl font-bold text-center text-green-700 mb-6">Login</h1>
//         <p className="text-center text-gray-600 mb-6">
//           Enter your credentials to access your account.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">Don't have an account?</p>
//           <NavLink to="/signup" className="text-green-700 hover:underline font-semibold">
//             Sign up
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login; 























import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      alert(response.data.message);
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to the home page
    } catch (error) {
      alert('Invalid credentials');
    }
  };
  
  
  
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(/img/boy.png)',
        backgroundColor: 'rgba(0, 128, 0, 0.7)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">Login</h1>
        <p className="text-center text-gray-600 mb-6">
          Enter your credentials to access your account.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <NavLink to="/signup" className="text-green-700 hover:underline font-semibold">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
