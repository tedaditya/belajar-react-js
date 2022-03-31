import styles from './header.module.css'

function Header(props) {
    const { nama, alamat } = props;
    return (
        <h1 className={`${styles.red} App`}>Ini header, hai {nama} dari {alamat} </h1>
    )
}

export default Header