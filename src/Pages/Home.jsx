import React from 'react';
import Banner from './Banner';
import Community from './Community';
import Services from './OurServices';
import OurServices from './OurServices';
import Mail from '../Components/Mail';
import VideoPlayer from '../Components/VideoPlayer';
import AttentionCafe from '../Components/AttentionCafe';
import Comment from '../Components/Comment';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Community></Community>
           <OurServices></OurServices>
           <Mail></Mail>
           <VideoPlayer></VideoPlayer>
           <AttentionCafe></AttentionCafe>
           <Comment></Comment>
        </div>
    );
};

export default Home;