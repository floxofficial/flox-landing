import classNames from 'classnames';
import {ReactComponent as Logo} from 'assets/images/logo-gray.svg';
import {ReactComponent as Twitter} from 'assets/images/twitter.svg';
import {ReactComponent as Github} from 'assets/images/github.svg';
import styles from './styles.module.scss';

const Footer = () => {
  const githubLink = 'https://github.com/floxwallet';
  const twitterLink = 'https://twitter.com/floxwallet';
  return (
    <div className={classNames('content', styles.content)}>
      <div className="row justify-content-between align-items-center d-md-flex d-sm-none d-none">
        <div className="col-auto">
          <div className={styles.info}>
            <Logo className={styles.logo} />
            <div className={styles.line} />
              Copyrighy (C) 2019 tronace.com
          </div>
        </div>
        <div className="col-auto">
          <div className={styles.social}>
            <a href={twitterLink} target="_blank" rel="noreferrer"><Twitter /></a>
            <a href={githubLink} target="_blank" rel="noreferrer"><Github /></a>
          </div>
        </div>
      </div>
      <div className="row justify-content-between align-items-center d-md-none d-sm-flex d-flex">
        <div className="col-auto"><Logo className={styles.logo} /></div>
        <div className="col-auto">
          <div className={styles.social}>
            <a href={twitterLink} target="_blank" rel="noreferrer"><Twitter /></a>
            <a href={githubLink} target="_blank" rel="noreferrer"><Github /></a>
          </div>
        </div>
      </div>
      <div className="row mt-3 d-md-none d-sm-flex d-flex">
        <div className="col-12">
          <div className={classNames(styles.info, 'justify-content-center')}>
            Copyrighy (C) 2019 tronace.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;