// import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";

import styles from "./Home.module.css";
import FirstPicture from "../../assets/472CBF0A-A0FC-4292-AA7D-DACA8F812333 1.png";
import SecondPicture from "../../assets/472CBF0A-A0FC-4292-AA7D-DACA8F812333 2.png";
import ThirdPicture from "../../assets/472CBF0A-A0FC-4292-AA7D-DACA8F812333 3.png";
import FourthPicture from "../../assets/9E643F28-7B63-4F82-8437-E4F676FBF616 1.png";
import FifthPicture from "../../assets/38E6CEE7-8E43-4447-89AE-16F7F99656E9.png";

import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
});

const Users = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const classes = useStyles();

  const paragraph1 = (
    <div data-aos="fade-up" className={styles.thought}>
      We have all been forced away
      <br />
      Behind closed doors we stay
      <br /> Craving human interaction
      <br /> In desperate need of a companion
      <br />
    </div>
  );

  const paragraph2 = (
    <div data-aos="fade-left" className={styles.thought}>
      No one knows from whence she came;
      <br /> Covid-19, we cannot tame
      <br /> But alas do not despair
      <br /> For sometimes the world is fair
      <br />
    </div>
  );

  const paragraph3 = (
    <div data-aos="fade-right" className={styles.thought}>
      Yes it has lectures and tests
      <br /> And assignments, unwanted guests
      <br /> Before your entire world crashes
      <br /> Let’s help you rise out the ashes
      <br />
    </div>
  );

  const paragraph4 = (
    <div data-aos="flip-left" className={styles.thought}>
      Hello, welcome to UC-Me!
      <br />
      That needed kinship, we can guarantee
      <br /> Unwanted guests we’ll help you endure So sign up and go explore!
    </div>
  );

  const paragraph5 = (
    <div data-aos="fade-up" className={styles["thought-in-frame"]}>
      <h2>
        <u>T’s and C’s</u>
      </h2>
      <li>No offensive language</li>
      <li>Important announcements always pinned at the top of the chat</li>
      <li>Join the groups relevant to you</li>
      <li>Failure to follow the above will have consequences</li>
    </div>
  );

  return (
    <div className={classes.root}>
      <Typography>
        <img
          data-aos="fade-up"
          alt="speech bubble"
          className={styles.images}
          src={FirstPicture}
        />
        {paragraph1}
        <img
          data-aos="fade-left"
          alt="speech bubble"
          className={styles.images}
          src={SecondPicture}
        />
        {paragraph2}
        <img
          data-aos="fade-right"
          alt="speech bubble"
          className={styles.images}
          src={ThirdPicture}
        />
        {paragraph3}
        <img
          data-aos="flip-left"
          alt="speech bubble"
          className={styles.images}
          src={FourthPicture}
        />
        {paragraph4}
        <br />
        <img
          data-aos="fade-up"
          alt="speech bubble"
          className={styles.images}
          src={FifthPicture}
        />
        {paragraph5}
      </Typography>
    </div>
  );
};

export default Users;
