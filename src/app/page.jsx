'use client'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Button from '@/components/Button'
import Card from '@/components/Card'
// import style from '@/styles/Home.module.css'
import style from '@/app/style.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  function click(link) {
    router.push(link)
  }
  return (
    <div className='bg-white px-[15px]'>
      <section className='h-screen flex flex-col justify-around items-center  pt-[70px]' id="inicio">

        <div className="w-full h-[70vh] flex flex-col items-center justify-between ">
          <img src="/main-logo-dark.svg" className='h-[150px]' alt="logo" />
          <br />
          <img src="/portada.svg" className='h-[150px]' alt="logo" />
          <br />
          <div className='text-center text-[16px]'>
            <p>BIENVENIDO A SWOOU.COM</p>
            <p>Desarrolla tus proyectos con nosotros</p>
          </div>
          <br />
          <div className='w-full max-w-[500px] grid grid-cols-2 gap-[5px] px-[5px]'>
            <a href="#Productos"><Button theme={'Primary'} click={() => router.push('#productos')}>Productos</Button></a> 
            <a href="#Servicios"><Button theme={'Secondary'} click={() => router.push('#servicios')}>Servicios</Button></a> 
          </div>
        </div>
       

      </section>
      <section className="min-h-screen pt-[80px] " id="servicios">
        <h2 className="w-full text-[20px] text-center font-bold text-black">SWOOU servicios</h2>
        <div className="flex justify-center flex-wrap md:grid grid-cols-3 gap-[30px]">
          <Card img='/web.svg'
            prove={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}
            acquire={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}
            textButtonOne={'Cotizar'}
            textButtonTwo={'Consultar'}>
            <h4 className='text-center font-bold text-black'>DISEÑO Y DESARROLLO WEB y APK</h4>
            <p className={style.paragraphLeft}>
              <b>Detalles</b><br />
              Responsive y SPA<br />
              Optimizacion SEO<br />
              Arquitectura escalable<br />
              <b>Tecnologias</b><br />
              Figma <i>(Disaeño UI)</i> <br />
              React, Vue, Angular, Next, Nuxt <i>(Frontend)</i> <br />
              Node, Express <i>(Backend)</i><br />
              Firebase, Amplify <i>(Backend as a service)</i> <br />
              MongoDB <i>(Base de datos)</i> <br /> <br />
            </p>
          </Card>
          <Card img='/host.svg'
            prove={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}
            acquire={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}
            textButtonOne={'Cotizar'}
            textButtonTwo={'Consultar'}>
          
            <h4 className='text-center font-bold text-black'>DOMINIOS Y HOSTINGS</h4>
            <p className={style.paragraphLeft}>
              <b>Dominios</b><br />
              NameCheep<br />
              Google Domain<br />
              GoDaddy<br />
              <b>Hostings</b><br />
              AWS<br />
              Firebase<br />
              Heroku<br />
              Vercel<br />
              Netlify<br />
              Hostinger<br />
              Github<br />
            </p>
          </Card>
          <Card img='/search.svg'
            prove={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}
            acquire={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}
            textButtonOne={'Cotizar'}
            textButtonTwo={'Consultar'}>
            <h4 className='text-center font-bold text-black'>POSICIONAMIENTO SEO</h4>
            <p className={style.paragraphLeft}>
              <b>Navegadores</b><br />
              Google<br />
              Bing<br />
              Yahoo<br />
              <b>Soporte</b><br />
              Indexacion<br />
              Metadatos<br />
              Palabras clave<br />
              Google search console<br />
              Web master tools<br />
              Blogs<br />
              Paginas web<br />
            </p>
          </Card>
        </div>
      </section>
      <section className="min-h-screen pt-[80px]" id="productos">
        <h2 className="w-full text-[20px] text-center font-bold text-black pb-[30px]">Prueba Los Productos SWOOU</h2>
        <div className="flex justify-center flex-wrap md:grid grid-cols-3 gap-[30px]">
          <Card img='/mathLogo.svg'
            prove={() => click('https://swoou-math.vercel.app/')}
            acquire={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}
            textButtonOne={'Adquirir'}
            textButtonTwo={'Probar'}>
            <p  className='text-black'>Aplicación web y android instalable con
              funcionalidad offline que automatiza
              el proceso de enseñanza-aprendizaje
              de matemáticas, dirigida a profesores
              y psicopedagogos que trabajan con
              estudiantes de primaria.</p>
          </Card>
          <Card img='/preuniversityLogo.svg'
            prove={() => click('https://preuniversity.swoou.com')}
            acquire={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}
            textButtonOne={'Adquirir'}
            textButtonTwo={'Probar'}>
            <p className='text-black'>Aplicación web y android instalable con
              funcionalidad offline que provee 
              un simulacro de orientación vocacional 
              y diferentes simulacros de examenes de admision
              para estudiantes pre-universitarios.</p>
          </Card>
          <Card img='/qrLogo.svg'
            prove={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20quisiera%20probar%20Swoou%20QR%20para%20mi%20negocio...%20')}
            acquire={() => click('https://swoou-site.vercel.app')}
            textButtonOne={'Adquirir'}
            textButtonTwo={'Probar'}>
            <p className='text-black'>Aplicación web instalable, 
              que provee un catalogo dígital 
              personalizable para la publicación 
              de servicios y/o productos en internet.</p>
          </Card>
        </div>
      </section>



      <section className="min-h-screen pt-[80px]" id="nosotros">
        <h2 className="w-full text-[20px] text-center font-bold text-black pb-[30px]">ACERCA DE</h2>
        <div className={style.paragraphBox}>
          <p className=' text-black  text-center'>Swoou es una compañia de desarrollo
            y distribucion de aplicaciones web y mobil dirigida por el Ing. Raul Choque Romero.</p> 
            <br /> 

          <p>Trabaja con nosotros como DEV o afiliado de distribucion de apps y/o servicios.</p>
          <br /> 
          <div className="w-full flex justify-center">
          <div className="w-full max-w-[500px] grid grid-cols-2 gap-[5px] px-[5px]">
          <Button theme={'Secondary'} click={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}>Aplicar</Button>
          <Button theme={'Primary'} click={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}>Solicitar Servicio</Button>

          </div>          
          </div>

          
        </div>

        {/* <div className={style.cardBox}>
          <div className={style.cardProfile}>
            <span className={style.imgRadius}>
              <img src="/rau.jpg" alt="Raúl Choque Romero" style={{ borderRadius: '200px' }} width="200" height="200" />
            </span>
            <h5>RAÚL CHOQUE ROMERO</h5>
            <p>Project Manager y Desarrollador Web
              especializado en el MERN stack.</p> 
            <Button style={'buttonPrimary'} click={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')}>Contactar</Button>
          </div>
        </div> */}
        <br /> 
        <h3>   Empresas que actualmente trabajan con nosotros </h3>
        <br /> 
        <div className='relative flex w-[100%] h-[50px] overflow-hidden'>
          <div className='flex w-[300%] md:w-[200%] absolute'>
            <div className={` w-[300%] md:w-[100%] flex justify-between ${style.marquee}`}>
              <img src="/hoy.png" className='h-[50px]' alt="" />
              <img src="/logisticsgear.png" className='h-[50px]' alt="" /> 
              <img src="/lavavelox.png" className='h-[50px]' alt="" />  
              <img src="/preciojusto.png" className='h-[50px]' alt="" />
              <img src="/redciclapp.jpg" className='h-[50px]' alt="" />
              <img src="/obzon.png" className='h-[50px]' alt="" /> 
              <img src="/koguryokwan.png" className='h-[50px]' alt="" /> 
              <img src="/truek.png" className='h-[50px]' alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />  
      
      </section>
        <img onClick={() => click('https://api.whatsapp.com/send?phone=+59169941749&text=Hola%20Mundo!!%20')} src="whatsapp.svg" className={'fixed right-[20px] bottom-[20px] w-[50px] z-50'} alt="logo" />
      <footer className="absolute left-0 w-screen bg-black text-white px-[10px] py-[20px]" id="contacto">
        <span className='flex items-center'>
          <img src="/phone.svg" alt="logo" width={30} height={30} />
          <span>+591 69941749</span>
        </span><br />
        <span  className='flex items-center'>
          <img src="/email.svg" alt="logo" width={30} height={30} />
          <span className="pl-[5px]">support@swoou.com</span>
        </span><br />
        <span  className='flex items-center'>
          <img src="/location.svg" alt="logo" width={30} height={30} />
          <span>La paz-Bolivia</span>
        </span> <br />
        <p className="w-full text-center">© Copyright 2023 <br /> swoou.com</p>
      </footer>
    </div>
  )
}
