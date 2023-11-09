import Footer from "../../Pages/Footer/Footer";
import Banner from "../Banner/Banner";
import RecentBlog from "../RecentBlog/RecentBlog";
import About from "./About/About";
import MeetTeam from "./MeetTeam/MeetTeam";
import NewsLetter from "./NewsLetter/NewsLetter";


const Home = () => {
    return (
        <div>
            {/* <h2>This is Home</h2> */}
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <NewsLetter></NewsLetter>
            <MeetTeam></MeetTeam>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;