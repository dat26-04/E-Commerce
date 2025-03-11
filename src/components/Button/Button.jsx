import styles from './styles.module.scss';

const Button = ({ content, ...props }) => {
    return <button className={styles.btn} {...props}>{content}</button>;
};

export default Button;
