import style from './style.module.css';
import rocketLogo from '../../assets/rocket.png';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style['container-logo']}>
        <img src={rocketLogo} alt="Foguete que representa a logo" title="Foguete que representa a logo" className={style['logo-img']} />
        <div className={style['container-font']}>
          <span className={style['logo-font-color-a']}>TO</span><span className={style['logo-font-color-b']}>DO</span>
        </div>
      </div>
    </header>
  )
}