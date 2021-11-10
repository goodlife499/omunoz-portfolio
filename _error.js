import Layout from "./components/Layouts";

const _error = ({statusCode}) => {
    return (
        <Layout>
            {
                statusCode ? (
                    <p className="text-center">Could not load your page {statusCode}</p> 
                ): (
                    <p className="text-center">No se pudo obtener esta pagina</p>
                )
            }
            
        </Layout>
    )
}


export default _error