// import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./Home.module.css";
import FirstPicture from "../../assets/472CBF0A-A0FC-4292-AA7D-DACA8F812333 1.png";
import SecondPicture from "../../assets/472CBF0A-A0FC-4292-AA7D-DACA8F812333 2.png";
import ThirdPicture from "../../assets/472CBF0A-A0FC-4292-AA7D-DACA8F812333 3.png";
import FourthPicture from "../../assets/9E643F28-7B63-4F82-8437-E4F676FBF616 1.png";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
});

const Users = () => {
  const classes = useStyles();

  const paragraph1 = (
    <div className={styles.thought}>
      (First picture with the redish background) We have all been forced away
      <br />
      Behind closed doors we stay
      <br /> Craving human interaction
      <br /> In desperate need of a companion
      <br />
    </div>
  );

  const paragraph2 = (
    <div className={styles.thought}>
      <br />
      (Covid picture) No one knows from whence she came;
      <br /> Covid-19, we cannot tame
      <br /> But alas do not despair
      <br /> For sometimes the world is fair
      <br />
    </div>
  );

  const paragraph3 = (
    <div className={styles.thought}>
      <br />
      (Sad picture) Yes it has lectures and tests
      <br /> And assignments, unwanted guests
      <br /> Before your entire world crashes
      <br /> Let’s help you rise out the ashes
      <br />
    </div>
  );

  const paragraph4 = (
    <div className={styles.thought}>
      T’s and C’s:
      <br /> • No offensive language
      <br /> • Important announcements always pinned at the top of the chat
      <br /> • Join the groups relevant to you
      <br /> • Failure to follow the above will have consequences
      <br />
    </div>
  );

  return (
    <div className={classes.root}>
      <Typography>
        <img alt="speech bubble" className={styles.images} src={FirstPicture} />
        {paragraph1}
        <img
          alt="speech bubble"
          className={styles.images}
          src={SecondPicture}
        />
        {paragraph2}
        <img alt="speech bubble" className={styles.images} src={ThirdPicture} />
        {paragraph3}
        <img
          alt="speech bubble"
          className={styles.images}
          src={FourthPicture}
        />
        {paragraph4}
      </Typography>
    </div>
  );
};

export default Users;
