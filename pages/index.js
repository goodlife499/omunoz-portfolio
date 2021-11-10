import Layout from "../components/Layouts";
import { skills,experiences,projects } from "../profile";
import Link from 'next/link'

const Index = () => (
    <Layout>
       

        <header className="row">
            <div className="col-md-12">
                <div className="car card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/foto.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                           <h1>Oscar Muñoz</h1>
                           <h3>FullStack Developer</h3>
                           <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                           <a href="/hireme">Contratar</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {
                            skills.map(({skill,percentage}, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div 
                                            className="progress-bar" 
                                            role="progressbar" 
                                            style={{ width: `${percentage}%` }}></div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>

                        <ul>
                            
                            {
                                experiences.map(({title, from, to, description}, index) => (
                                    <li>
                                    <h3>{title}</h3>
                                    <h5>{from}-{to}</h5>
                                    <p>
                                        {description}
                                    </p>
                                </li>
                                ))
                            }
                        </ul>

                        

                    </div>
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        
                        {
                                projects.map(({title, description, image, url}, index) => (
                                    <div className="col-md-4 p-2">
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={image} alt="" className="card-img-top"></img>
                                        </div>
                                        
                                        <div className="card-body">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                            
                                        </div>
                                    </div>
                                    </div>
                                ))
                        }

                    <div className="text-center">
                        <Link href="/portfolio">
                            <a className="btn btn-outline-light">Ver Más</a>
                        </Link>
                    </div>
                        
                    </div>
                </div>

               


            </div>            
        </div>

        


    </Layout>

)

export default Index;