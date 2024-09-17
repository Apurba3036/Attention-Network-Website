
import Banner from './Banner';
import Community from './Community';
import OurServices from './OurServices';
import Mail from '../Components/Mail';
import VideoPlayer from '../Components/VideoPlayer';
import AttentionCafe from '../Components/AttentionCafe';
import Comment from '../Components/Comment';
import Map from '../Components/Map';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Community></Community>
           <OurServices></OurServices>
           {/* <Mail></Mail>
           <VideoPlayer></VideoPlayer> */}
           <AttentionCafe></AttentionCafe>
           <Comment></Comment>
           <Map></Map>
        </div>
    );
};

export default Home;