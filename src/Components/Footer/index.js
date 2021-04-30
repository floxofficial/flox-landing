import classNames from 'classnames';
import { ReactComponent as Logo } from 'assets/images/logo-gray.svg';
import { ReactComponent as Twitter } from 'assets/images/twitter.svg';
import { ReactComponent as Github } from 'assets/images/github.svg';
import styles from './styles.module.scss';

const Footer = () => {
  const githubLink = 'https://github.com/floxofficial/';
  const twitterLink = 'https://twitter.com/floxwallet/';
  return (
    <div className={classNames('content', styles.content)}>
      <div className="row justify-content-between align-items-center flex-nowrap">
        <div className="col-auto pr-0">
          <div className={styles.info}>© FLOX TEAM. ALL RIGHTS RESERVED</div>
        </div>
        <div className="col-auto pl-0">
          <div className={styles.social}>
            {/* <a href={twitterLink} target="_blank" rel="noreferrer"><Twitter /></a> */}
            <a href={githubLink} target="_blank" rel="noreferrer">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
