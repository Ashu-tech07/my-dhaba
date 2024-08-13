//import User from "./User";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h4>About us page</h4>
      <UserContext.Consumer>
        {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
      </UserContext.Consumer>
      {/* <User name={"Ashish"} location={"Varanasi"}/> */}
      <UserClass name={"Ashish"} location={"Varanasi"} />
    </div>
  );
};

export default About;
