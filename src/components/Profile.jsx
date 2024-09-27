import { motion } from 'framer-motion'
import React from 'react'

const Profile = () => {
  return (
    <motion.div
  
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8,delay:0.4 }}
  >Profile</motion.div>
  )
}

export default Profile