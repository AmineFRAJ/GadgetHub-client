import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../JS/Actions/UserAction';
import Spinner from './Spinner';
const UserList = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.UserReducer.users);
  const load = useSelector((state) => state.UserReducer.load);

  useEffect(() => {
    dispatch(getUsers());

    return () => {};
  }, [dispatch]);
  return (
    <motion.div
    className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >   {load && (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  )}
    <table className=" min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-700">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
          >
            Avatar
          </th>

          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
          >
          Name
          </th>

          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
          >
         <Mail/>
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
          >
          <Phone/>
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
          >
          Role
          </th>
          
          
        </tr>
      </thead>

      <tbody className="bg-gray-800 divide-y divide-gray-700">
        {users?.map((user) => (
          <tr key={user._id} className="hover:bg-gray-700">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src= "https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
                    alt={user.name}
                  />
                </div>
               
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-300">
             {user.name}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-300">
             {user.email}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-300">{user.phone}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-300"> {user.isAdmin ? "Admin" : "Client"}</div>
            </td>
            
            
           
        
          </tr>
        ))}
      </tbody>
    </table>
  </motion.div>
  )
}

export default UserList