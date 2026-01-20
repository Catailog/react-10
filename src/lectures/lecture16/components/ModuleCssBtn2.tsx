import styles from '@/lectures/lecture16/css/btn2.module.css';

export default function ModuleCssBtn2() {
  return (
    <button type="button" className={styles.btn}>
      덮어쓰지 않고 고유한 이름으로 스타일이 적용되었습니다.
    </button>
  );
}
