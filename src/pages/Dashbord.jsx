import {  List, PlusCircle, ShoppingBasket, UserRound } from "lucide-react";
import {   useState } from "react";
import { motion } from "framer-motion";
import ProductsList from "../components/ProductList";
import UserList from "../components/UserList";
 
 

const tabs = [
    { id: "profile", label: "Profile", icon: UserRound },
    { id: "products", label: "Products", icon: ShoppingBasket },
	{ id: "add", label: "Add Product", icon: PlusCircle },
	{ id: "users", label: "Users List", icon: List},
 
];

const Dashbord = () => {
	const [activeTab, setActiveTab] = useState("create");
	 

	return (
		<div className='min-h-screen relative overflow-hidden'>
			<div className='relative z-10 container mx-auto px-4 py-16'>
				<motion.h1
					className='text-4xl font-bold mb-8 text-emerald-400 text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Admin Dashboard
				</motion.h1>

				<div className='flex justify-center mb-8'>
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
							<tab.icon className='mr-2 h-5 w-5' />
							{tab.label}
						</button>
					))}
				</div>
                {activeTab === "products" && <ProductsList/>}
				{activeTab === "users" && <UserList/>}
				{/* {activeTab === "products" && <ProductsList />}
				{activeTab === "analytics" && <AnalyticsTab />} */}
			</div>
		</div>
	);
};
export default Dashbord;
