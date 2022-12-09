import styles from './CornerBtn.module.css';
import Icon from '../Icon/Icon'



const CornerBtn = (props) => {

    const { id, href, target, bg, icon, iconColor, iconSize } = props;

    return (
        <a id={ id } className={ styles.btn } href={ href } target={ target }>
            <div style={{ background: bg }}>
                <Icon
                    iconName={ icon }
                    color={ iconColor }
                    size={ iconSize }
                />
            </div>
        </a>
    );
}

export default CornerBtn;