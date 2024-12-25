import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a style={{color:'white', textDecoration: 'none'}}href="https://www.instagram.com/sum.it____" target="_blank" rel="noopener noreferrer">
        Instagram
        </a>
        <a style={{color:'white', textDecoration: 'none'}}href="https://www.behance.net/deathbringer2" target="_blank" rel="noopener noreferrer">
        Behance
        </a>
        <a style={{color:'white', textDecoration: 'none'}}href="https://in.linkedin.com/in/sumitgusain05" target="_blank" rel="noopener noreferrer">
        LinkedIn
        </a>
    </div>
  )
}
