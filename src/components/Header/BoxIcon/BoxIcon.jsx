import styles from '../styles.module.scss';
import fbicon from '@icon/fbicon.svg';
import instaicon from '@icon/instaicon.svg';
import yticon from '@icon/yticon.svg';
const BoxIcon = ({ type, href }) => {
    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbicon;
            case 'ins':
                return instaicon;
            case 'yt':
                return yticon;
        }
    };
    return (
        <div className={styles.boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
};

export default BoxIcon;
