
import { FaFacebook, FaLinkedin,  FaTwitter} from 'react-icons/fa';

const MeetTeam = () => {
    return (
        <div className="text-center mt-24 max-w-screen-xl mx-auto px-4 py-5">
            <div>
                <h1 className="mb-5  text-3xl md:text-5xl font-bold ">Meet the team section</h1>
                <p className="mb-2 ">Meet the Minds Behind the Magic: Get to Know the Creative Forces Shaping Our Blog!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {/* first card */}
                <div className="card p-9 h-[400px] mt-12  shadow-xl bg-fuchsia-200">
                    <figure><img className="" src="https://i.ibb.co/FYn3zM4/member1.png" alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h3 className="font-lato text-2xl font-bold -ml-1">Awlad Hossain</h3>
                        <p className="font-lato">Personal Development Expert</p>
                        {/* font awesome  */}
                        <div className="flex flex-row mt-2 text-center gap-6 text-xl text-[#E76F51] ml-9">
                            <FaFacebook></FaFacebook>
                            <FaLinkedin></FaLinkedin>
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>
                </div>
                {/* Second card */}
                <div className="card p-9 h-[400px] mt-12 shadow-xl bg-fuchsia-200">
                    <figure><img className="" src="https://i.ibb.co/TkhYfrG/member2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h3 className="font-lato text-2xl font-bold">Safia Chowdhury</h3>
                        <p className="font-lato">Fashion and Style Expert</p>
                        {/* font awesome  */}
                        <div className="flex flex-row mt-2 text-center gap-6 text-xl text-[#E76F51] ml-9">
                            <FaFacebook></FaFacebook>
                            <FaLinkedin></FaLinkedin>
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>
                </div>
                {/* Third card */}
                <div className="card p-9 h-[400px] mt-12 shadow-xl bg-fuchsia-200">
                    <figure><img className="" src="https://i.ibb.co/tqRk6nt/member3.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h3 className="font-lato text-2xl font-bold">Rokib Hossain</h3>
                        <p className="font-lato">Book Reviews Expert</p>
                        {/* font awesome  */}
                        <div className="flex flex-row mt-2 text-center gap-6 text-xl text-[#E76F51] ml-9">
                            <FaFacebook></FaFacebook>
                            <FaLinkedin></FaLinkedin>
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>
                </div>
                {/* Forth card */}
                <div className="card p-9 h-[400px] mt-12 shadow-xl bg-fuchsia-200">
                    <figure><img className="" src="https://i.ibb.co/8sBVbRH/member4.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h3 className="font-lato text-2xl font-bold">Chaity</h3>
                        <p className="font-lato">Technology Expert</p>
                        {/* font awesome  */}
                        <div className="flex flex-row mt-2 text-center gap-6 text-xl text-[#E76F51] ml-9">
                            <FaFacebook></FaFacebook>
                            <FaLinkedin></FaLinkedin>
                            <FaTwitter></FaTwitter>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default MeetTeam;
