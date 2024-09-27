import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const people = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Jordan Smith",
    role: "Chief Technology Officer",
    imageUrl:
      "https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Morgan Lee",
    role: "Chief Marketing Officer",
    imageUrl:
      "https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/073f319f-3d89-4787-731b-492d3de01900/w=1920",
  },
  {
    id: 4,
    name: "Taylor Johnson",
    role: "Head of Product Development",
    imageUrl:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
 
];

const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
          <img className="w-48 h-48 mb-4" src="/aboutus.png" alt="About Us" />
          <p className="text-center text-xl text-gray-300 mb-12">
            At GadgetHub, we are dedicated to providing you with the latest and
            greatest in technology. Our website specializes in selling
            high-quality phones, laptops, tablets, and other gadgets that cater
            to your digital needs. Whether you’re a tech enthusiast, a student,
            or a professional, we have something for everyone, all at
            competitive prices.
          </p>
          <Link
            to="/products"
            className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
          >
            View Products
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8,delay: 0.4 }}
      >
        <div className="flex flex-col items-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
           Our Team
          </h1>
         
          <ul
           
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="h-16 w-16 rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-emerald-700">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link
            to="/contact"
            className=" mt-6
             rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
          >
            Contact Us
          </Link>
        </div>
       
      </motion.div>
    </div>
  );
};

export default About;
