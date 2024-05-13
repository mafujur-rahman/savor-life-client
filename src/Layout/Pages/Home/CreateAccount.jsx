

const CreateAccount = () => {
    return (
        <div className="bg-[#ddd0b0] p-16">
            <div className="">
                <div className="hero mx-auto rounded-2xl  " style={{ backgroundImage: `url("/thumbs-up.jpg")` }}>
                    <div className="hero-overlay rounded-2xl bg-opacity-75"></div>
                    <div className="text-center p-14 text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold">Create Your Free Account. Get 7-days Free Trial</h1>
                            <p className="mb-5">Get easily connected with our new feature-rich Apps & Systems.</p>
                            <button className="btn bg-[#1C4C5C] border-none text-white">Get Started</button>
                            <button className="btn bg-purple-700 ml-5 border-none text-white">Talk to Expert</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;