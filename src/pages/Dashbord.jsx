import { List, PlusCircle, ShoppingBasket, UserRound } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductsList from "../components/ProductList";
import UserList from "../components/UserList";
import Profile from "../components/Profile";
import AddProduct from "../components/AddProduct";

const tabs = [
  { id: "profile", label: "Profile", icon: UserRound },
  { id: "products", label: "Products", icon: ShoppingBasket },
  { id: "add", label: "Add Product", icon: PlusCircle },
  { id: "users", label: "Users List", icon: List },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold mb-8 text-emerald-400 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Admin Dashboard
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`mx-1 flex items-center px-4 py-2  rounded-md transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-800 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {activeTab === "profile" && <Profile/>}
        {activeTab === "products" && <ProductsList />}
        {activeTab === "users" && <UserList />}
        {activeTab === "add" && <AddProduct/>}
      </div>
    </div>
  );
};
export default Dashboard;
