import peto from "../../assets/peto-lattiahommissa.png";
import peto1 from "../../assets/peto-lattiahommissa1.png";

export const PetoLattia = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto text-center">
        <img src={peto} alt="peto" className="block -mt-16 md:hidden" />
        <img src={peto1} alt="peto" className="hidden -mt-72 md:block" />
      </div>
    </section>
  );
};
