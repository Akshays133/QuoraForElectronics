/* eslint-disable @next/next/no-img-element */
import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.community}>
          <img
            className={styles.ecepng}
            src="/images/goodCommunity.png"
            alt="community"
            width={500}
            height={450}
          />
        </div>
        <div>
          <img
            className={styles.logoece}
            src="/images/robot.png"
            alt="LogoforECE"
            width={350}
            height={350}
          />
          <div className={styles.title}>
            <span className={styles.nextjs}>Bringing Electronics,</span>
            <span className={styles.mongodb}>Community Together</span>
          </div>
          <div className={styles.feedbutton}>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Feed</ButtonLink>
            </Link>
          </div>
        </div>
      </div>
      <p className={styles.subtitle}>
        QuoraForElectronics is a place to gain and share knowledge. 
        It's a platform to ask questions and connect with people who contribute unique insights and quality answers.
        </p>
    </div>
  );
};

export default Hero;

{
  /* <h1 className={styles.title}>
          <span className={styles.nextjs}>Quora For</span>
          <span className={styles.mongodb}>Electronics</span>
          <span>App</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Feed</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://github.com/Akshays133/QuoraForElectronics"
              type="secondary"
              className={styles.button}
            >
              GitHub
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>
        QuoraForElectronics is a place to gain and share knowledge. 
        It's a platform to ask questions and connect with people who contribute unique insights and quality answers.
        </p> */
}
