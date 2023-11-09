// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const NewsLetter = () => {

//     const handleSubscribe = async (e) => {
//         e.preventDefault();
//         toast.success('Thank you for subscribing to our Newsletter', { autoClose: 3000 });
//     };

//     return (
//         <div className="text-center mt-24">
//             <h2 className="text-5xl text-center font-bold mb-14">Newsletter</h2>
//             <form className="card-body">
//                     <fieldset className="form-control w-80">
//                         <label className="label">
//                             <span className="label-text">Enter your email address</span>
//                         </label>
//                         <div className="relative">
//                             <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
//                             <button onClick={handleSubscribe}
//                              className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
//                         </div>
//                     </fieldset>
//                 </form>
//         </div>
//     );
// };

// export default NewsLetter;






import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
    const handleSubscribe = async (e) => {
        e.preventDefault();
        toast.success('Thank you for subscribing to our Newsletter', { autoClose: 3000 });
    };

    return (
        <div className="flex flex-col items-center justify-center mt-24 border w-[900px]  ml-56 bg-fuchsia-100">
            <h2 className="text-5xl font-bold mb-7">Newsletter</h2>
            <span className=" font-semibold ">Stay Connected: Uncover the Latest Insights, <br /> Trends, and 
                        Updates in Our Monthly Newsletter!!</span>
            <form className="card-body w-80">
                <fieldset className="form-control">
                    {/* <label className="label">
                        <span className=" font-semibold ">Stay Connected: Uncover the Latest Insights, Trends, and 
                        Updates in Our Monthly Newsletter</span>
                    </label> */}
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-12" />
                        <button onClick={handleSubscribe} className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </fieldset>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default NewsLetter;
