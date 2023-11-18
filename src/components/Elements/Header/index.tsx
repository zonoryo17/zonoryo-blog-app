import styles from '@/styles/Header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Zonoryo Blog</h1>
      <button className={styles.profileIconBtn}>
        <Image
          src="/images/profileImage.jpg"
          alt="プロフィール画像"
          className={styles.profileImage}
          width={80}
          height={80}
        />
      </button>
    </div>
  );
}
