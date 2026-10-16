import { motion } from "framer-motion";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const Intro = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 py-24 custom-responsive md:py-32">
      {/* Left Side */}
      <motion.div
        className="flex-1 text-center md:text-left md:pr-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={staggerItem}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300/70 mb-3"
        >
          Perustaja
        </motion.p>
        <motion.h2
          variants={staggerItem}
          className="text-3xl md:text-4xl font-bold text-white mb-2"
        >
          Janne Kätkä
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="text-xl font-semibold text-orange-300 mb-4"
        >
          Yrittäjä / Pinnoittaja
        </motion.p>
        <motion.p variants={staggerItem} className="text-lg text-gray-300">
          Olen toiminut alalla vuodesta 1996 lähtien ja yrittäjänä vuodesta 2007
          eteenpäin. Kauttamme saat korkealaatuiset materiaalit asennuksineen
          alusta loppuun.
        </motion.p>
        <motion.p
          variants={staggerItem}
          className="text-lg text-gray-300 mt-4"
        >
          Olemme lattian pinnoituksiin (matto, parketti, vinyyli ja muut lattian
          pinnoitus materiaalit) erikoistunut asennus- ja myyntiliike Jyväskylän
          Keljossa.
        </motion.p>
        <motion.div
          variants={staggerItem}
          className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start"
        >
          <span className="inline-flex items-center rounded-full border border-orange-300/40 bg-orange-300/10 px-3 py-1 text-sm font-medium text-orange-200">
            Alalla vuodesta 1996
          </span>
          <span className="inline-flex items-center rounded-full border border-orange-300/40 bg-orange-300/10 px-3 py-1 text-sm font-medium text-orange-200">
            Yrittäjänä vuodesta 2007
          </span>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium text-gray-200">
            Jyväskylä, Keljo
          </span>
        </motion.div>
      </motion.div>
      {/* Right Side */}
      <motion.div
        className="flex-1 mt-8 md:mt-0 md:pl-10 md:border-l md:border-white/15"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.32 }}
      >
        <img
          src="/images/janne.JPG"
          alt="Janne Kätkä, Ahmalattiat Oy:n yrittäjä ja pinnoittaja"
          className="w-full max-w-md h-auto rounded shadow-lg mx-auto md:mx-0"
        />
      </motion.div>
    </section>
  );
};
