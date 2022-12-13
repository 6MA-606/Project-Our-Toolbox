import styles from './CornerBtn.module.css';
import Icon from '../Icon/Icon'



const CornerBtn = (props) => {

    const { id, href, target, bg, icon, iconColor, iconSize } = props;

    const handleClick = () => {
        window.open(href, target);
    }

    return (
        <div id={ id } className={ styles.btn } onClick={ handleClick }>
            <div style={{ background: bg }}>
                <Icon
                    iconName={ icon }
                    color={ iconColor }
                    size={ iconSize }
                />
            </div>
        </div>
    );
}

export default CornerBtn;