import styles from './styles.module.scss';

const Button = ({ content }) => {
    return <button className={styles.btn}>{content}</button>;
};

export default Button;
