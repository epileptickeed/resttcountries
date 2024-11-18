import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useDispatch } from "react-redux";
import { setPickedContinent } from "@/shared/redux/slices/filterSlice";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const continents = [
  "Europe",
  "North America",
  "South America",
  "Asia",
  "Africa",
  "Antarctica",
  "Oceania",
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (item: string) => {
    dispatch(setPickedContinent(item));
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={isOpen ? "h-full w-full" : "w-full h-[40px]"}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="text-start flex items-center justify-between gap-4 w-full"
      >
        Continents
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {continents.map((item, index) => {
          return (
            <motion.li
              className="m-2 py-2 px-1 transition rounded-lg cursor-pointer hover:text-white hover:bg-[#444]"
              key={index}
              variants={itemVariants}
              onClick={() => handleClick(item)}
            >
              {item}
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
