import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { toast } from "sonner";
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const loadId = toast.loading("Signing in...");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      toast.success("Login successful! Redirecting...");

      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      toast.dismiss(loadId)
    }
  };

  const handleDemoLogin = ()=>{
    setEmail("piyushsavale2@gmail.com");
    setPassword("piyushsa");

  }

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
            Welcome back to xShopify,
          </h3>

          <div className="space-y-4">
            <div>
              <input
                name="email"
                type="email"
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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 font-primary w-full text-sm text-black px-4 py-3.5 rounded-md outline-none focus:ring-2 focus:ring-black"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-primary text-white py-3.5 rounded-md font-semibold transition-all 
              ${isLoading ? "bg-gray-600 cursor-not-allowed" : "bg-black hover:bg-gray-800"}`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full font-primary text-black py-3.5 rounded-md font-semibold bg-gray-300 hover:bg-gray-400 transition-all"
            >
              Set Test Credentials
            </button>
          </div>
        </motion.form>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
          className="text-sm text-black flex justify-center mt-4 font-primary"
        >
          Don't have an account? 
          <a 
            className="text-black-600 font-semibold hover:underline ml-1" 
            onClick={() => navigate('/signup')}
          >
            Register here
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Login;
