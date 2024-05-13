import Banner from "./Banner";
import CreateAccount from "./CreateAccount";
import CreationTips from "./NewSections/CreationTips";
import Newslater from "./Newslater";
import RecentBlogs from "./RecentBlogs";






const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Newslater></Newslater>
            <CreationTips></CreationTips>
            <CreateAccount></CreateAccount>
        </div>
    );
};

export default Home;