import Main from "../components/Main/Main";
import back from "../assets/main/av.svg";
import History from "../components/History/History";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team/Team";
import Positions from "../components/Positions/Positions";
import Request from '../components/Request/Request'

const news = {
  img: back,
  title: "Available positions",
  desc: "Build your career with Createx Construction Bureau.",
};

function About2() {
  return (
    <>
      <Main {...news} />
      <Positions />
      <Request/>
      <Footer />
    </>
  );
}

export default About2;
