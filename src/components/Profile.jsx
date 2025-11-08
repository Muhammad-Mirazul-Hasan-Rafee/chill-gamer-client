import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const {uid} = useParams();
   console.log("User ID:", uid);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050814] via-[#0b1124] to-[#070b1a] flex justify-center items-center text-white px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#0e1528] shadow-2xl rounded-2xl p-8 w-full max-w-md border border-[#1e2a45] relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-600 blur-[120px] opacity-40"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-500 blur-[120px] opacity-40"></div>

        {/* Profile Image */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src={
                user?.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/147/147144.png"
              }
              alt="User"
              className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-lg object-cover"
            />
            <span className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 rounded-full ring-2 ring-green-500 animate-pulse"></span>
          </div>

          {/* Username */}
          <h2 className="text-2xl font-bold mt-4 tracking-wide">
            {user?.displayName || "Anonymous Gamer"}
          </h2>

          {/* Email */}
          <p className="text-gray-400 text-sm mt-1">{user?.email}</p>

          {/* Status / tagline */}
          <p className="text-sm text-gray-300 italic mt-2">
            “Ready to conquer the next level 🎮”
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-[#141c33] rounded-xl py-4 border border-[#1f2949] hover:border-indigo-500 transition">
            <h3 className="text-xl font-bold text-indigo-400">37</h3>
            <p className="text-xs text-gray-400">Reviews</p>
          </div>
          <div className="bg-[#141c33] rounded-xl py-4 border border-[#1f2949] hover:border-indigo-500 transition">
            <h3 className="text-xl font-bold text-fuchsia-400">128</h3>
            <p className="text-xs text-gray-400">Watchlist</p>
          </div>
          <div className="bg-[#141c33] rounded-xl py-4 border border-[#1f2949] hover:border-indigo-500 transition">
            <h3 className="text-xl font-bold text-emerald-400">5⭐</h3>
            <p className="text-xs text-gray-400">Ratings</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90 transition text-white font-semibold shadow-md">
            Edit Profile
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
