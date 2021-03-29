import classNames from 'classnames';
import {ReactComponent as Logo} from 'assets/images/logo.svg';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <>
      <div className={classNames('content', styles.container)}>
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <Logo />
          </div>
          <div className="col-auto">
            <button type="button" className={styles.btn}>Download</button>
          </div>
        </div>
      </div>
      <hr className={styles.hr}/>
    </>
  );
};

export default Header;