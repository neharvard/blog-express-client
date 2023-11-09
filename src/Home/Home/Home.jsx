import Footer from "../../Pages/Footer/Footer";
import Banner from "../Banner/Banner";
import RecentBlog from "../RecentBlog/RecentBlog";
import NewsLetter from "./NewsLetter/NewsLetter";


const Home = () => {
    return (
        <div>
            {/* <h2>This is Home</h2> */}
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;