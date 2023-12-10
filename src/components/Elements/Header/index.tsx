import Image from 'next/image';
import { container, profileIconBtn, profileImage } from './style.css';

export default function Header() {
  return (
    <div className={container}>
      <h1>Zonoryo Blog</h1>
      <button className={profileIconBtn}>
        <Image
          src="/images/profileImage.jpg"
          alt="プロフィール画像"
          className={profileImage}
          width={80}
          height={80}
        />
      </button>
    </div>
  );
}
