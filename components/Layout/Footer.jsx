/* eslint-disable prettier/prettier */
import { Text, TextLink } from '@/components/Text';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import styles from './Footer.module.css';
import Spacer from './Spacer';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <Text color="accents-7">
          Made with ❤️, 🔥, and By {' '}
          <TextLink
            href="https://github.com/Akshays133/QuoraForElectronics"
            color="link"
          >
            Agrit Tiwari
          </TextLink>
          {'  '}
          <TextLink
            href="https://github.com/Akshays133/QuoraForElectronics"
            color="link"
          >
            Akshay Sharma
          </TextLink>{'  '}
          <TextLink
            href="https://github.com/Akshays133/QuoraForElectronics"
            color="link"
          >
            Shekher
          </TextLink>
          .
        </Text>
        <Spacer size={1} axis="vertical" />
        <ThemeSwitcher />
      </Wrapper>
    </footer>
  );
};

export default Footer;
