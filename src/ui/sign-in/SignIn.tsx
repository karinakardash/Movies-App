import { Link } from "react-router-dom";
import { AppPages } from "../../types";
import styles from "./SignIn.module.css";

type SignInProps = {};

export const SignIn: React.FC<SignInProps> = ({ }) => {
  return (
    <div className={styles.box}>
      <div className={styles.visual}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
      <Link to={AppPages.LOGIN} className={styles.text}>Sign in</Link>
      <div className={styles.svg}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7809 6.3753C10.4359 5.94404 9.80657 5.87412 9.3753 6.21913C8.94404 6.56414 8.87412 7.19343 9.21913 7.6247L10.7809 6.3753ZM14 12L14.7809 12.6247L15.2806 12L14.7809 11.3753L14 12ZM9.21913 16.3753C8.87412 16.8066 8.94404 17.4359 9.3753 17.7809C9.80657 18.1259 10.4359 18.056 10.7809 17.6247L9.21913 16.3753ZM9.21913 7.6247L13.2191 12.6247L14.7809 11.3753L10.7809 6.3753L9.21913 7.6247ZM13.2191 11.3753L9.21913 16.3753L10.7809 17.6247L14.7809 12.6247L13.2191 11.3753Z" fill="#AFB2B6"/>
</svg>
</div>
    </div>
  );
};