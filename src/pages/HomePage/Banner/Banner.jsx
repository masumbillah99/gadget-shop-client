const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 w-full h-[500px] lg:h-[800px] bg-cover bg-center bg-slate-400 bg-blend-multiply bg-[url('https://media.istockphoto.com/id/1357530144/photo/young-family-having-fun-traveling-together.jpg?s=612x612&w=0&k=20&c=9n0yR3q7w4ReuTiNA1k8D4BOl7__ZJ9K4ixT4kNhYZ8=')]">
      {/* <figure className="bg-blend-overlay">
        <img className="w-full h-[600px]" src={banner1} alt="banner-img" />
      </figure> */}
      <div className="w-full">
        <div className="py-60 bg-none">
          <h2 className="ml-16 lg:ml-32 text-3xl font-bold text-white">
            Find Your Favorite Place
          </h2>
          <div className="text-center my-10">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
