import parquet from "../../assets/parquet.jpg";

const employees = [
  {
    id: 1,
    name: "Janne Kätkä",
    title: "Toimitusjohtaja",
    imageUrl: parquet,
    email: "janne.katka@ahmalattiat.fi",
    phone: "+1234567890",
  },
  {
    id: 2,
    name: "Jaakko Ahtikari",
    title: "Lattia Pinnoittaja",
    imageUrl: parquet,
    email: "jaakko.ahtikari@gmail.com",
    phone: "+0987654321",
  },
];

export const Employees = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Työntekijät
        </h2>
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
              <p className="text-gray-600">{employee.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
