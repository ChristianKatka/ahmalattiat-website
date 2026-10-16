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

const services = [
  "Ongelmalattioiden asennus",
  "Lattian saneeraus",
  "Jalkalistojen ja muiden viimeistelyjen toteutus",
  "Pienet sisäremontit",
  "Lattioiden injektoinnit",
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className="w-5 h-5 flex-shrink-0 text-orange-300"
    aria-hidden="true"
  >
    <path
      d="M4 10.5l4 4 8-9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AboutMe = () => {
  return (
    <section className="py-16 px-6 custom-responsive md:pb-72">
      {/* Divider Text */}
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={staggerItem}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Päätoimiala
        </motion.h2>
        <motion.div
          variants={staggerItem}
          className="w-16 h-1 bg-gray-300 mx-auto mb-8"
        ></motion.div>
      </motion.div>

      {/* Image and Text Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-x-12 px-6 max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          className="flex-1 w-full max-w-md"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <img
            src="/images/lprksksairaala.png"
            alt="Parquet"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 mt-8 md:mt-0 text-start text-gray-300 md:pr-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={staggerItem}
            className="text-lg leading-relaxed md:text-start"
          >
            Olemme lattianpäällystyksen ja pienremontoinnin ammattilaisia.
            Tarjoamme korkealaatuisia lattian pinnoitusratkaisuja sekä uusiin
            että saneerattaviin tiloihin olipa kyseessä koti, liiketila tai
            julkinen kohde me olemme oikea valinta! Erikoisalaamme ovat:
          </motion.p>
          <motion.ul variants={staggerItem} className="mt-6 mb-4 space-y-3">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <CheckIcon />
                <span>{service}</span>
              </li>
            ))}
          </motion.ul>
          <motion.p variants={staggerItem}>
            Palvelemme sekä yksityisasiakkaita että julkista sektoria, ja
            otamme hoitaaksemme niin pienet kuin suuret projektit
            ammattitaidolla ja luotettavasti. Ota yhteyttä – tehdään
            lattiastasi toimiva, kestävä ja tyylikäs!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
