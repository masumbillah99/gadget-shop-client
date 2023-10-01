import { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Services = () => {
  const [seeAll, setSeeAll] = useState(false);

  const servicesData = [
    {
      id: "12345",
      service_title: "Guided City Tours",
      status: "available",
      details:
        "Experience the magic of our city through our expert-guided city tours. Our knowledgeable guides will take you on a journey through the city's rich history and vibrant culture. You'll explore iconic landmarks, taste local cuisine, and discover hidden gems. Whether you're a history buff or a foodie, our tours offer something for everyone. Join us for an unforgettable adventure and see the city from a new perspective.",
      img: "https://media.istockphoto.com/id/1411045888/photo/tour-guide-holding-guidebook-and-talks-about-famous-city-sights.jpg?s=612x612&w=0&k=20&c=g_vJ_bwD750Q_1NqrA-LW1BwZJn0GZ1mWyhuGdT1QjQ=",
    },
    {
      id: "23456",
      service_title: "Adventure Expeditions",
      status: "upcoming",
      details:
        "Embark on thrilling adventure expeditions with our experienced guides. From challenging mountain treks to exciting jungle safaris, we offer a range of heart-pounding journeys for adventurers of all levels. Test your limits as you hike, climb, and explore. Capture breathtaking views and create memories that will last a lifetime. Get ready for the adventure of a lifetime.",
      img: "https://images.unsplash.com/photo-1611564393143-5860feb81ec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkdmVudHVyZSUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "34567",
      service_title: "Luxury Cruise Vacations",
      status: "upcoming",
      details:
        "Indulge in pure luxury with our upcoming cruise vacations. Sail to exotic destinations on board our state-of-the-art cruise ships. Enjoy gourmet dining, world-class entertainment, and pampering spa treatments. Immerse yourself in the opulence of life at sea. Book your dream cruise today and experience the epitome of elegance and relaxation.",
      img: "https://media.istockphoto.com/id/155438728/photo/fjord-view-on-a-cruise-ship.jpg?s=612x612&w=0&k=20&c=K2OgFGQuyNuh3ebrV0Kh84V7KFwCAQJDuvBEYaUJwlk=",
    },
    {
      id: "45678",
      service_title: "Cultural Heritage Tours",
      status: "available",
      details:
        "Embark on a journey of cultural discovery with our cultural heritage tours. Explore ancient temples, historic sites, and immerse yourself in local traditions and customs. Attend colorful cultural events and festivals. Our tours offer a deep dive into the fascinating world of diverse cultures. Gain a new perspective on the world and its people.",
      img: "https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_640.jpg",
    },
    {
      id: "56789",
      service_title: "Eco-Friendly Adventures",
      status: "available",
      details:
        "Join us in eco-friendly adventures that promote sustainable travel and conservation. Venture into pristine natural environments, where you'll witness the beauty of untouched landscapes. Participate in wildlife conservation efforts and learn about the importance of responsible tourism. Contribute to the preservation of our planet while having an incredible adventure. Be an eco-warrior on your next journey.",
      img: "https://media.istockphoto.com/id/848638638/photo/young-male-admiring-the-ancient-cedars.jpg?s=612x612&w=0&k=20&c=MZkT14Pa_NEM9xw3g2oQmeuzUZnhCRK3_atHJnWVuLY=",
    },
  ];

  const handleSeeAll = () => {
    setSeeAll(true);
  };

  const sliceServices = seeAll ? servicesData : servicesData.slice(0, 4);

  return (
    <section className="mx-2 md:mx-10 lg:mx-0">
      <SectionTitle title={"Our Services"} />
      <div className="grid md:grid-cols-2 gap-5 justify-items-center mb-7">
        <p>
          Explore our agencies services. We offer a curated selection of
          exquisite accommodations around the world, providing travelers with
          the opportunity to experience a new level of opulence and comfort
          during their journeys.
        </p>
        <button
          onClick={handleSeeAll}
          className={`mr-auto md:mr-0 md:ml-auto btn btn-primary ${
            seeAll && "hidden"
          }`}
        >
          See All Service
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5">
        {sliceServices?.map((service) => (
          <div
            key={service.id}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure className="w-2/5 pl-3">
              <img
                className="w-full h-4/5 rounded-xl"
                src={service.img}
                alt="banner"
              />
            </figure>
            <div className="card-body w-3/5">
              <h2 className="card-title">{service.service_title} </h2>
              <p className="text-base text-green-600">({service.status})</p>
              <p className="text-sm">{service.details.slice(0, 75)}...</p>
              <div className="card-actions mt-2">
                <Link
                  to={`/services/${service.id}`}
                  className="btn btn-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
