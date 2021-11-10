import Layout from "../components/Layouts"
import Error from "../_error"

const GitHub = ({user, statusCode}) => {

    if (statusCode){
        return <Error  />
    }

    return(
        <Layout footer={false} dark={true}>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card card-body text-center">
                    <h1>{user.name}</h1>
                    <img src={user.avatar_url} alt=""/>
                    <p>{user.bio}</p>
                </div>
            </div>
        </div>
        </Layout>
    )

}

export async function getServerSideProps(){
    
const res = await fetch('https://api.github.com/users/goodlife499')
const data = await res.json()

console.log(res.status);

const statusCode = res.status > 200 ? res.status : false;

console.log(data)
    return {
        props: {
            user: data,
            statusCode
        }
    }
}
export default GitHub