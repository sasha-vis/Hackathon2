import styles from './Progress.module.css';

export const Progress = ({ name, progress }) => {
  const getProgressColor = (progress) => {
    const percent = progress * 10;
    if (percent >= 90) return styles.expert;
    if (percent >= 70) return styles.advanced;
    if (percent >= 40) return styles.intermediate
    return styles.beginner;
  };

  return (
    <div className={styles.container}>
      <p>{name}</p>
      <div className={styles['progress-container']}>
        <div
          className={`${styles.progress} ${getProgressColor(progress)}`}
          style={{ width: `${progress * 10}%` }}
        >
          {progress > 1 && `${progress * 10}%`}
        </div>
      </div>
    </div>
  );
};
