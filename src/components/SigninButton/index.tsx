import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signin, signout, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export const SigninButton = () => {
    const [session] = useSession();
    return session ? (
        <button
            className={styles.signinButon}
            onClick={() => signout()}
            type="button">
            <FaGithub color="#84d361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            className={styles.signinButon}
            onClick={() => signin('github')}
            type="button">
            <FaGithub color="#eba417" />
            Signin with Github
        </button>
    );
}