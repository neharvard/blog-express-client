

const Contact = () => {
    return (
        <div className="mt-16">
            <div className="">
                <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/vwp2S9j/abt.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-orange-500 font-serif">Hello there</h1>
                            <p className="mb-5 text-red-200">Contact with Us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto py-5 my-10 mt-24">
                <div className="card bg-base-100 shadow-xl border border-red-200">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/cvtZ4jQ/email.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-2xl">Email Address</h2>
                        <p>info@blogExpress.com</p>
                        <p>info@blogExpress.web.com</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border border-red-200">
                    <figure className="px-10 pt-10 mt-12">
                        {/* https://i.ibb.co/TrYs6zq/location.jpg */}
                        <img src="https://i.ibb.co/qRYy23m/location.png " alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center mt-7">
                        <h2 className="card-title font-bold text-2xl">Office Address</h2>
                        <p>Discover St, New York,</p>
                        <p>NY 10012, USA</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border border-red-200">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/XVy8cXy/phone.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center -mt-10">
                        <h2 className="card-title font-bold text-2xl">Phone Number</h2>
                        <p>+2(305) 587-3407</p>
                        <p>+2(305) 587-3407</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;