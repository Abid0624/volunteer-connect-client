import { motion, easeInOut } from "motion/react";
import volunteerImage from "../assets/images/volunteer.jpg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const WhyVolunteer = () => {
  const { theme } = useContext(AuthContext);
  return (
    <section className="my-10 container mx-auto bg-base-200 py-10 px-6 rounded-xl">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-4">
          <motion.h2
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeInOut,
              repeat: Infinity,
            }}
            className="text-3xl font-bold text-cyan-400"
          >
            Why Become a{" "}
            <motion.span
              animate={{ color: ["#3352ff", "#e3ff33", "#55ff33"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Volunteer
            </motion.span>
            ?
          </motion.h2>

          <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
            Volunteering is more than just helping others. It builds confidence,
            creates friendships, and gives you a sense of purpose. Whether
            you're giving your time to support education, healthcare, or the
            environment—your contribution matters.
          </p>
          <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
            Join a growing community of changemakers. Make a difference in your
            community today!
          </p>
        </div>

        <motion.div
          className="flex-1"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <img
            src={volunteerImage}
            alt="Volunteering"
            className="w-full max-w-md border-l-6 border-b-6 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVolunteer;
