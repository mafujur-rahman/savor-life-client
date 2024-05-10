

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url('/banner.jpg')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Explore with us</h1>
                    <p className="mb-5">Exploring the world through the unique lens of travel, food, and sports.Join us as we uncover the hidden gems of the world, one bite and one game at a time.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;