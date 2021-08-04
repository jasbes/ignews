import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export const SigninButton = () => {
    const isUserLoggedIn = true;
    return isUserLoggedIn ? (
        <button className={styles.signinButon} type="button">
            <FaGithub color="#84d361" />
            Jefferson da Silva
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button className={styles.signinButon} type="button">
            <FaGithub color="#eba417" />
            Signin with Github
        </button>
    );
}