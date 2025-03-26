import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { toast } from "sonner";
import { auth, createUserWithEmailAndPassword } from "../firebase"; 

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadId = toast.loading("Signing up...");

    try {

   createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signup successful!");
      
      navigate("/signin"); 
    } catch (error) {
      toast.error("could not signup");
    }
    finally{
        toast.dismiss(loadId)
    }
  };

  return (
    <div className="h-screen w-full flex justify-center bg-white">
      <div className="flex flex-col gap-2 justify-center w-96">
        <motion.form 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onSubmit={handleSubmit}
          className="w-full bg-gray-100 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-black font-primary text-3xl font-extrabold mb-8">
            Create your xShopify account,
          </h3>

          <div className="space-y-4">
            <div>
              <input
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-200 font-primary w-full text-sm text-black px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-black"
                placeholder="Username"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 font-primary w-full text-sm text-black px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-black"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 font-primary w-full text-sm text-black px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-black"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full bg-black font-primary text-white py-3.5 rounded-md font-semibold hover:bg-black transition-all">
              Sign Up
            </button>
          </div>
        </motion.form>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
          className="text-sm text-black flex justify-center mt-4 font-primary"
        >
          Already have an account?
          <a 
            className="text-black-600 font-semibold hover:underline ml-1" 
            onClick={() => navigate('/signin')}
          >
            Login here
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Signup;
