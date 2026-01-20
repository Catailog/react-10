import styles from '@/lectures/lecture16/css/btn1.module.css';

export default function ModuleCssBtn1() {
  return (
    <button type="button" className={styles.btn}>
      이번엔 CSS-Module을 이용해서 스타일을 적용했습니다.
    </button>
  );
}
