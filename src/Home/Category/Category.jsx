
const Category = () => {

    // Function to handle clicking on a category picture
    const handleClick = (category) => {
        console.log("cater: ",category);
    
        window.location.href = `/blogs-by-category/${category}`;     
    };

    return (
        <div className='mt-24 mt-28 max-w-screen-xl mx-auto px-4 py-5'>
            {/* <h1>This is Category</h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-[1200px]  mb-24">
                <div className="hero h-[260px] relative cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/zmrs4kC/technology.jpg)'}} onClick={() => handleClick('Technology')} >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl font-bold">Technology</h1>
                        </div>
                    </div>
                </div>
                <div className="hero relative cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/9H8bm80/travel.jpg)' }} onClick={() => handleClick('Travel')}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl font-bold">Travel</h1>
                        </div>
                    </div>
                </div>
                <div className="hero relative cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/hZfRT5X/Food-and-Cooking.jpg)' }} onClick={() => handleClick('Food and Cooking')}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl font-bold">Food and Cooking</h1>
                        </div>
                    </div>
                </div>
                <div className="hero relative cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/zRYsCVD/Personal-Development.jpg)' }} onClick={() => handleClick('Personal Development')}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl font-bold">Personal Development</h1>
                        </div>
                    </div>
                </div>
                <div className="hero h-[260px] relative cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/pj5L6KH/smily-face.jpg)' }} onClick={() => handleClick('Health')}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl font-bold">Health</h1>
                        </div>
                    </div>
                </div>
                <div className="hero relative cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/S7s7Fyj/stock-photo-online-resume.jpg)' }} onClick={() => handleClick('Career Advice')}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl font-bold">Career Advice</h1>
                        </div>
                    </div>
                </div>
                <div className="hero relative cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/TKwNXGj/Book-Review.jpg)' }} onClick={() => handleClick('Book Reviews')}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl font-bold">Book Reviews</h1>
                        </div>
                    </div>
                </div>
                <div className="hero relative cursor-pointer overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/z8fmVcn/women-fashion-styles-vector-13633898.jpg)' }} onClick={() => handleClick('Fashion and Style')}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl font-bold">Fashion and Style</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
