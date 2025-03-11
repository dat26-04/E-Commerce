import styles from '../styles.module.scss';
import fbicon from '@icon/fbicon.svg';
import instaicon from '@icon/instaicon.svg';
import yticon from '@icon/yticon.svg';
import reloadicon from '@icon/reloadicon.svg';
import hearticon from '@icon/hearticon.svg';
import carticon from '@icon/carticon.svg';
const BoxIcon = ({ type, onClick }) => {
    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbicon;
            case 'ins':
                return instaicon;
            case 'yt':
                return yticon;
            case 'reload':
                return reloadicon;
            case 'heart':
                return hearticon;
            case 'cart':
                return carticon;
        }
    };
    return (
        <div className={styles.boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} onClick={() => onClick(type)}/>
        </div>
    );
};

export default BoxIcon;
