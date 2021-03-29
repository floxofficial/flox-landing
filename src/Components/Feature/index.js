import styles from './styles.module.scss';

const Feature = ({data}) => {
  return (
    <div>
      <div className={styles.circle}>{data.icon}</div>
      <div className={styles.title}>{data.title}</div>
      <p className={styles.desc}>
        {data.desc}
      </p>
    </div>
  );
};

export default Feature;