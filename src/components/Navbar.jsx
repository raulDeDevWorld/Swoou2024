'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  const { pathname } = useRouter()
  function handleMenu() {
    setMenu(!menu)
  }
  return (
    <header className={style.header}>
      <div className={style.navbar}>
        <img src="/main-logo-white.svg" className={style.logo} alt="logo" />
        <div className={style.menu} onClick={handleMenu}>
          <span className={`${style.span} ${menu === true ? style.transformOne : ''}`}></span>
          <span className={`${menu === false ? style.span : ''}`}></span>
          <span className={`${style.span} ${menu === true ? style.transformTwo : ''}`}></span>
        </div>
      </div>
      <nav className={`${style.nav} ${menu === true ? style.visible : ''}`}>
        <Link href="#inicio" className={`${style.link} ${pathname == "#inicio" ? style.active : ''}`} onClick={() => setMenu(!menu)}  >
          Inicio
        </Link>
        <Link href="#servicios" className={`${style.link} ${pathname == "#servicios" ? style.active : ''}`} onClick={() => setMenu(!menu)}>
          Servicios
        </Link>
        <Link href="#productos" className={`${style.link} ${pathname == "#productos" ? style.active : ''}`} onClick={() => setMenu(!menu)}>
          Productos
        </Link>
       
        {/* <Link href="#cursos">
        <a className={`${style.link} ${pathname == "#cursos" ? style.active : ''}`} onClick={()=>setMenu(!menu)}>Cursos</a>
      </Link> */}
        <Link href="#nosotros" className={`${style.link} ${pathname == "#nosotros" ? style.active : ''}`} onClick={() => setMenu(!menu)}>
          Acerca de
        </Link>
        <Link href="#contacto" className={`${style.link} ${pathname == "#contacto" ? style.active : ''}`} onClick={() => setMenu(!menu)}>
          Contacto
        </Link>
      </nav>
    </header>
  )
}