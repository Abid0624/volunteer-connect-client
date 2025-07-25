import { motion } from "motion/react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const stats = [
  { id: 1, label: "Volunteers", value: "5,200+" },
  { id: 2, label: "Events Organized", value: "320+" },
  { id: 3, label: "Hours Contributed", value: "18,000+" },
  { id: 4, label: "Communities Served", value: "85+" },
];

const ImpactStats = () => {
  const { theme } = useContext(AuthContext);
  return (
    <section className="my-6 bg-white py-12 px-4 lg:px-16 rounded-xl shadow-md container mx-auto">
      <motion.h2
        className={`text-3xl text-center ${
          theme === "dark" ? "text-gray-500" : "text-gray-700"
        } font-bold mb-10`}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Impact in Numbers
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            className="p-4 bg-blue-50 rounded-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <p className="text-3xl font-bold text-blue-700">{item.value}</p>
            <p className="text-gray-600 text-sm mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
