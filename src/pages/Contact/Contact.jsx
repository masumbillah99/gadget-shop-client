import SectionBanner from "../../components/SectionBanner/SectionBanner";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <section className="my-16">
      <SectionBanner />

      <div className="max-w-screen-xl lg:mx-auto my-10 mx-2 md:mx-10">
        <SectionTitle title={"Contact Us"} />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 my-10">
          <div>
            <article className="flex items-center gap-3">
              <LocationOnIcon />
              <div>
                <h5 className="text-xl font-semibold">Address</h5>
                <p>Dhaka, Bangladesh</p>
              </div>
            </article>
            <article className="flex items-center gap-3 my-5">
              <MailOutlineIcon />
              <div>
                <h5 className="text-xl font-semibold">Send Email</h5>
                <p>trip-aero@support.com</p>
              </div>
            </article>
            <article className="flex items-center gap-3">
              <PhoneIcon />
              <div>
                <h5 className="text-xl font-semibold">Contact</h5>
                <p>+88 01234-567890</p>
              </div>
            </article>
          </div>

          <div className="bg-gray-300 text-white p-10 rounded-lg">
            <form className="">
              <input
                type="text"
                placeholder="your"
                className="input input-bordered input-primary w-full focus:outline-none"
              />{" "}
              <br />
              <input
                type="text"
                placeholder="your email"
                className="input input-bordered input-primary w-full focus:outline-none my-3"
              />{" "}
              <br />
              <textarea
                className="textarea textarea-primary w-full focus:outline-none"
                placeholder="write message"
              ></textarea>
              <br />
              <button className="btn btn-primary px-7 mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
