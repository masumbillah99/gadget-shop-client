import SectionBanner from "../../components/SectionBanner/SectionBanner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const About = () => {
  const faqs = [
    {
      id: 1,
      question: "What is TripAero??",
      answer:
        "TripAero is a premium travel platform designed to elevate your travel experiences. We provide a wide range of services, including luxurious vacation rentals, personalized travel itineraries, and access to unique and handpicked destinations.",
    },
    {
      id: 2,
      question: "How do I book a vacation rental on TripAero?",
      answer:
        "Booking a vacation rental on TripAero is easy! Simply search for your desired destination, browse the available listings, select the property that suits your preferences, and follow the booking instructions. You can also reach out to our dedicated concierge team for assistance.",
    },
    {
      id: 3,
      question: "Are the vacation rentals safe and secure?",
      answer:
        "Yes, your safety is our priority. We rigorously vet all our hosts and properties to ensure they meet our high standards. Additionally, we have security measures in place to safeguard your booking and personal information.",
    },
    {
      id: 4,
      question: "Can I customize my travel itinerary on TripAero?",
      answer:
        "Absolutely! TripAero offers personalized travel experiences. Contact our travel experts to tailor your itinerary to your preferences, whether you're looking for adventure, relaxation, or cultural exploration.",
    },
    {
      id: 5,
      question: "Does TripAero offer eco-friendly travel options?",
      answer:
        "Yes, we're committed to responsible tourism. We collaborate with eco-friendly properties and promote sustainable travel. Look for our eco-friendly travel options when booking to reduce your environmental footprint.",
    },
    {
      id: 6,
      question: "Can I list my property on TripAero for rental?",
      answer:
        "Absolutely! If you have a unique and exceptional property that you'd like to list, you can become a host on TripAero. Reach out to our host support team to get started and showcase your property to travelers worldwide.",
    },
    {
      id: 7,
      question: "What payment methods are accepted on TripAero?",
      answer:
        "TripAero accepts a variety of payment methods, including major credit cards, debit cards, ssl commerz, and secure online payment gateways. You can choose the payment option that suits you best when booking your travel experiences.",
    },
  ];

  return (
    <section className="my-16">
      <SectionBanner title={"About TripAero"} />
      <div className="max-w-screen-xl lg:mx-auto my-10 mx-2 md:mx-10">
        <SectionTitle title={"About Us"} />
        <p className="leading-8">
          TripAero is your ultimate travel companion, designed to elevate your
          wanderlust adventures to new heights. We are more than just a travel
          platform; we are your gateway to a world of exploration, discovery,
          and connection. With TripAero, your journey begins the moment you
          dream of a destination, and we&apos;re here to make every step of that
          journey unforgettable. Whether you&apos;re seeking a cozy cabin in the
          woods, a luxury city escape, or a beachfront paradise, TripAero
          connects you with exceptional stays and experiences tailored to your
          unique travel style. It&apos;s not just about the destination;
          it&apos;s about the journey, the memories, and the stories you&apos;ll
          carry with you. Welcome to TripAero, where your travel dreams take
          flight.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-72 md:gap-80 lg:gap-10 mt-10 mb-10 lg:mb-40">
          <figure className="relative">
            <img
              className="w-[250px] md:w-[300px] lg:w-2/3 h-[150px] md:h-[200px] lg:h-[330px] rounded-lg absolute md:left-10 lg:left-0 lg:-top-52"
              src="https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?size=626&ext=jpg"
              alt="Album"
            />
            <img
              className="w-[250px] md:w-[300px] lg:w-[330px] md:h-[200px] lg:h-[300px] absolute right-0 md:right-20 lg:right-1 bottom-0 top-24 md:top-24 lg:top-0 rounded-lg"
              src="https://img.freepik.com/free-photo/view-air-plane-wing-during-take-off-landing_1359-539.jpg?size=626&ext=jpg"
              alt=""
            />
          </figure>

          <div className="">
            <div>
              <h2 className="card-title">Our Vision</h2>
              <p className="leading-8">
                At TripAero, our vision is to empower travelers to discover,
                connect, and immerse themselves in authentic travel experiences
                worldwide. We believe that travel is not just about visiting
                places; it&apos;s about forging connections, embracing cultures,
                and creating memories that last a lifetime.
              </p>
            </div>
            <div className="my-5">
              <h2 className="card-title">Our Goal</h2>
              <p className="leading-8">
                Our goal at TripAero is to make every trip you take an
                enriching, memorable, and hassle-free experience. We aim to
                foster a global community of travelers who share their passions,
                stories, and the joy of exploration. Through TripAero, we want
                to create a world where every traveler can find their place in
                the journey.
              </p>
            </div>
          </div>
        </div>

        <div className="my-14">
          <SectionTitle title={"Why Choose TripAero"} />
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5 items-center">
            <Accordion
              className="order-2 mx-2 md:mx-14 lg:mx-0"
              allowZeroExpanded
            >
              {faqs.map((item) => (
                <AccordionItem key={item.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="bg-indigo-500 text-white p-4 rounded-lg">
                      {item.question}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="border border-indigo-600 p-4 my-2 rounded-lg">
                    {item.answer}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="order-1">
              <img
                className="w-1/2 lg:w-3/4 mx-auto"
                src={
                  "https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5215.jpg?w=826&t=st=1696206409~exp=1696207009~hmac=98cab7fabf55faa764a21796dfcfcf68081a38bfc585275f781951cb57c61fd9"
                }
                alt="faq image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
