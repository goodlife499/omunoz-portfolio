import Layout from "../components/Layouts"
import Link from 'next/link'

const custom404 = () => (
    <Layout>
        <div className="text-center">
        <h1>404</h1>
        <p>Esta pagina no existe, por favor vuelve a <Link href="/">
            <a>Inicio</a>
        </Link>
        </p>
        </div>
    </Layout>
)

export default custom404