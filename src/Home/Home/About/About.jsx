
const About = () => {
    return (
        <div className="about-us ">
            {/* hero pic */}
            <div className="mt-24">
                
                <div className="hero max-w-screen   h-[500px] mx-auto" style={{ backgroundImage: 'url(https://i.ibb.co/vwp2S9j/abt.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-red-500 font-serif">About Us</h1>
                            <p>
                                Discover Our Story: Unveiling the Passion and Purpose Behind Blog Express
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-20'>
                <div className="ml-12 mr-12  mt-9">
                    <h2 className="text-center font-semibold font-serif text-2xl text-orange-400 mb-5">Our Story</h2>
                    <p>
                        Welcome to the heart of Blog Express, where our journey unfolds through a tapestry of passion and purpose. Our story began with a shared vision—to create a space where ideas flourish, insights inspire, and connections thrive.
                    </p>
                    <p>
                        Founded by a team of enthusiasts driven by a love for [blog niche or topic], we embarked on a mission to curate content that resonates with our readers on a profound level. Each article, thoughtfully crafted, is a testament to our commitment to providing valuable, engaging, and diverse perspectives.
                    </p>
                    <br />
                    <p>
                        Our journey is not just about the stories we tell; it's about the community we're building—one reader at a time. We invite you to delve into our narrative, explore the motivations that drive us, and become part of the vibrant tapestry that is Blog Express. Together, let's continue to ignite curiosity and celebrate the beauty of shared knowledge and experiences. Welcome to our story, where every chapter is written with you in mind.
                    </p>
                </div>
                <div className="w-[1800px]">
                    <img src="https://i.ibb.co/S7jh7MD/our-story.jpg" alt="" />
                </div>
            </div>
            <div className="flex mt-5">
                <div className="w-[1900px]">
                    <img src="https://i.ibb.co/D534Yj2/mission.jpg" alt="" />
                </div>
                <div className="mt-16 ml-12 mr-12 ">
                    <h2 className="text-center font-semibold font-serif text-2xl text-orange-400 mb-4">Our Mission</h2>
                    <p>
                        Our mission is clear: to be a beacon of inspiration, knowledge, and community. We strive to create a space where curiosity is celebrated, diverse voices are heard, and ideas have the power to spark positive change.
                    </p>
                    <br />
                    <p>
                        Our commitment is rooted in the belief that information should not only inform but also empower. Through engaging and thought-provoking content, we aim to enrich the lives of our readers, providing them with the tools they need to navigate their interests, passions, and the ever-evolving world around them.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About;