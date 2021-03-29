import classNames from 'classnames';
import {ReactComponent as Logo} from 'assets/images/logo-gray.svg';
import {ReactComponent as Twitter} from 'assets/images/twitter.svg';
import {ReactComponent as Github} from 'assets/images/github.svg';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={classNames('content', styles.content)}>
      <div className="row justify-content-between align-items-center">
        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 col-12">
          <div className={styles.info}>
            <Logo className={styles.logo} />
            <div className={styles.line} />
              Copyrighy (C) 2019 tronace.com
          </div>
        </div>
        <div className="col-2 mt-sm-0 mt-3">
          <div className={styles.social}>
            <a href="/"><Twitter /></a>
            <a href="/"><Github /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;