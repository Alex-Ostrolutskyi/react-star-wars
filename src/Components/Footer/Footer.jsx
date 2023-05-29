import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import classes from "../../styles/Footer/footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer_left}>
          <h3>Follow me</h3>
          <ul className={classes.footer__list}>
            <li>
              <a
                href="https://www.linkedin.com/in/oleksii-ostrolutskyi-16305522b/"
                target="_blank"
              >
                <p>LinkedIn</p>
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href=" https://github.com/Alex-Ostrolutskyi" target="_blank">
                <p>Github</p>
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Developed by Oleksii Ostrolutskyi &copy; 2023 </p>
        </div>
      </div>

      <p className={classes.copy}>
        Star Wars and all associated names and/or images are copyright Lucasfilm
        Ltd.
      </p>
    </footer>
  );
};

export default Footer;
