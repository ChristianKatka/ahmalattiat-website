const employees = [
  {
    id: 1,
    name: "Janne Kätkä",
    title: "Toimitusjohtaja",
    imageUrl: "/images/janneboss.JPG",
    email: "janne.katka@ahmalattiat.fi",
    phone: "+358509110686",
  },
  {
    id: 2,
    name: "Jaakko Ahtikari",
    title: "Lattiapinnoittaja",
    imageUrl: "/images/jaakko.JPG",
    email: "jaakko.ahtikari@gmail.com",
    phone: "+358458927474",
  },
];

export const Employees = () => {
  return (
    <section
      id="employees"
      className="py-12 px-6 scroll-mt-20 text-center custom-responsive md:pb-72"
    >
      {/* Divider Text */}
      <div data-aos="fade-down" className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Työntekijät
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      {/* Content Below */}
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-x-4 md:space-y-0">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white shadow-md rounded-lg p-6 text-center flex-1"
          >
            <img
              className="mx-auto rounded-full h-32 w-32 mb-4"
              src={employee.imageUrl}
              alt={employee.name}
            />
            <h3 className="text-xl font-bold">{employee.name}</h3>
            <p className="text-gray-600 mb-2">{employee.title}</p>
            <a
              href={`mailto:${employee.email}`}
              className="block text-blue-500 hover:underline"
            >
              {employee.email}
            </a>
            <a
              href={`tel:${employee.phone}`}
              className="text-gray-600 hover:underline"
            >
              {employee.phone}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
