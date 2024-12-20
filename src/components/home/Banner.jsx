

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404179.jpg?t=st=1734174106~exp=1734177706~hmac=d1203c4df8c67818a4fc56d6e8049a6f6317aa406186161b79067ba088d1ddda&w=1380)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-left">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Gadget Store</h1>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus officia architecto autem dignissimos nihil ipsum fugit quidem eos praesentium.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner