import Navbar from "./Navbar"
//import Head from 'next/head'
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import nProgress from "nprogress";

const Layout = ({ children, footer = true, dark = false }) => {

    const router = useRouter();

    useEffect(() =>{

        const handleRouteChange = url => {
            nProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => nProgress.done())

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
        <div className={dark ? 'bg-dark' : ''}>  
        <Navbar />
        <main className="container py-4">
            {children}
        </main>

       {
           footer && (
            <footer className="bg-dark text-light text-center">
            <div className="container py-4">
                <h1>&copy; Oscar Muñoz</h1>
                <p>2012 - {new Date().getFullYear()}</p>
                <p>All rights reserved</p>
            </div>
        </footer>   
           )
       }
        </div>
    )

}

export default Layout;