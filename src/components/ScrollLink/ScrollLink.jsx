import styles from './ScrollLink.module.css';

export default function ScrollLink({id_section, text, onClick}) {
    
    return <li className={styles.linkButton}> 
        <a href={id_section} onClick={onClick}>
            {text}
        </a>
    </li>;
}
