import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"
import { fadeIn } from '../../../variants';

const Newslater = () => {

    const handleSubscribe = () => {
        toast.success("Thank you for subscribing to our newsletter")
    }

    return (
        <div className=" bg-[#ddd0b0] pb-10 " >
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mx-auto container p-14 md:flex gap-20 rounded-xl justify-around items-center bg-[#1C4C5C] w-fit md:w-fit lg:w-[1000px]">
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h1 className="text-4xl font-extrabold text-white">JOIN US</h1>
                    <p className="text-gray-200 mt-4">Stay up-to-date by <br /> subscribing to our <br />newslater.</p>
                </motion.div>
                <motion.div
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <input className="p-3 rounded-xl mr-5" type="email" placeholder="Enter your email" name="" id="" required />
                    <button onClick={handleSubscribe} className="btn bg-[#e4bb55] text-[#0e191b] border-none">Subscribe</button>
                    <ToastContainer />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Newslater;