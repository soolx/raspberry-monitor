import HooksDemo from './hooksdemo';
import styles from './index.css';


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <HooksDemo />
    </div>
  );
}
