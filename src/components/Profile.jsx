import { motion } from "framer-motion";
import { User, Mail, Phone, Briefcase } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 max-w-full overflow-x-hidden">
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mt-6 text-center text-3xl font-extrabold text-emerald-400">
          Profile Information
        </h2>
      </motion.div>

      <motion.div
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mx-4 rounded-lg bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <img
              className="rounded-full  bg-gray-600 h-24 w-24 object-cover"
              src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png" 
              alt=""
            />
          </div>

          {/* Full name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Full name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
               
                className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                
                className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">
              Phone
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="tel"
                
                className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Role */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">
              Role
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Briefcase className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
               
                className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Description */}
          
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
