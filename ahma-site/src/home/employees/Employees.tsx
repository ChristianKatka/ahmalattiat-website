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
    phone: "",
  },
];

export const Employees = () => {
  return (
    <section
      id="employees"
      className="py-12 px-6 scroll-mt-20 text-center custom-responsive md:pb-72"
    >
      {/* Divider Text */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Työntekijät
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      {/* Content Below */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        {employees.map((employee) => (
          <div key={employee.id}>
            <div className="group relative aspect-[3/4] overflow-hidden rounded">
              <img
                src={employee.imageUrl}
                alt={employee.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-xl font-bold text-white">
                  {employee.name}
                </p>
                <p className="text-sm text-orange-200">{employee.title}</p>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-300 space-y-1">
              <a
                href={`mailto:${employee.email}`}
                className="block hover:text-orange-300"
              >
                {employee.email}
              </a>
              {employee.phone && (
                <a
                  href={`tel:${employee.phone}`}
                  className="block hover:text-orange-300"
                >
                  {employee.phone}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
