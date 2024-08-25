import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import parquet2 from "../../assets/background.jpg";
import parquet from "../../assets/parquet.jpg";
import pesu1 from "../../assets/pesuhuone/4.jpg";
import pesu2 from "../../assets/pesuhuone/5.jpg";
import pesu3 from "../../assets/pesuhuone/6.jpg";

const workItems = [
  {
    id: 1,
    title: "Pesuhuone",
    description: "sauna sekä pesu tilat ja vessa.",
    imageUrls: [pesu1, pesu2, pesu3],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of project two.",
    imageUrls: [parquet, parquet2],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
    imageUrls: [parquet, parquet2],
  },

  {
    id: 4,
    title: "Project Three",
    description: "Description of project three.",
    imageUrls: [parquet, parquet2],
  },
  {
    id: 5,
    title: "Project Three",
    description: "Description of project three.",
    imageUrls: [parquet, parquet2],
  },
];

export const OurWork = () => {
  // Slick settings for autoplay
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides
    arrows: true, // Show navigation arrows
  };

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Työt / Referenssit
          </h2>
          <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
        </div>

        {/* Work Items */}
        <div className="flex flex-wrap justify-center md:justify-between">
          {workItems.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                {/* Carousel for Images */}
                <Slider {...settings}>
                  {item.imageUrls.map((url, index) => (
                    <div key={index} className="w-full h-72">
                      <img
                        src={url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </Slider>

                {/* Work Item Details */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// import parquet from "../../assets/parquet.jpg";
// import parquet2 from "../../assets/parquet.jpg";

// const workItems = [
//   {
//     id: 1,
//     title: "Project One",
//     description: "Description of project one.",
//     imageUrls: [parquet, parquet2],
//   },
//   {
//     id: 2,
//     title: "Project Two",
//     description: "Description of project two.",
//     imageUrl: parquet,
//   },
//   {
//     id: 3,
//     title: "Project Three",
//     description: "Description of project three.",
//     imageUrl: parquet,
//   },
//   {
//     id: 4,
//     title: "Project Four",
//     description: "Description of project four.",
//     imageUrl: parquet,
//   },
//   {
//     id: 5,
//     title: "Project Five",
//     description: "Description of project five.",
//     imageUrl: parquet,
//   },
// ];

// export const OurWork = () => {
//   return (
//     <section className="py-12 px-6">
//       <div className="container mx-auto text-center">
//         <div data-aos="fade-up" className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Työt
//           </h2>
//           <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
//         </div>
//         <div className="flex flex-wrap justify-center md:justify-between">
//           {workItems.map((item) => (
//             <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
//               <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                 <img
//                   src={item.imageUrl}
//                   alt={item.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
