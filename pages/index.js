import Layout from '../components/layout'
import Link from 'next/link';



const Index= ()=> (
 <Layout>
    
    {/**Header Card */}
    <header className= "Row">
        <div className="col-md-12">
            <div className="card card-body bg-light">
                <div className="row">
                    <div className="col-md-3">
                        <img src="Kevin Lopez.jpg" alt="" className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8 ">
                        <h1>Kevin López Meza</h1>
                        <h3>Fullstack Developer</h3>
                        <p> Responsable, ético y autodidacta.</p>
                        <Link href="Kevin López Meza cv.pdf">
                        <button type="button" class="btn btn-primary">Hoja de vida</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </header>

    {/**Second section */}

    <div className="row py-3">
        <div className="col-md-4">
            <div className="card bg-light">
                <div className="card-body">
                    <h1>Conocimiento</h1>

                    <ul>
                        <li>
                         <h5>Javascript</h5>
                        </li>
                        <li>
                         <h5>Html</h5>
                        </li>
                        <li>
                         <h5>Css</h5>
                        </li>
                        <li>
                         <h5>Java</h5>
                        </li>
                        <li>
                         <h5>C#</h5>
                        </li>
                    </ul>
                   
                    
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="card bg-light">
                <div className="card-body">
                    <h1>Experiencia</h1>
                    <ul>
                    <li>
                            <h3>CyberSiquirres</h3>
                            <h5>Septiembre 2016 hasta Noviembre 2016</h5>
                            <p>Auxiliar Técnico en computadoras</p>
                        </li>
                        <li>
                            <h3>Akon Servicentro</h3>
                            <h5>23-Marzo del 2021 hasta el 15 de noviembre</h5>
                            <p>Pistero</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/**Portfolio */}
    <div className="row">
        <div className="col-md-12">
            <div className="card card-body bg-dark">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-light">Portafolio</h1>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="overflow">
                            <img src="/1.png" alt="" className="card-img-top"  />
                            </div>
                                <div className="card-body">
                                    <h5>Api de Criptomonedas</h5>
                                    <p>Descripción</p>

                                </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                        <div className="overflow">
                            <img src="/2.png" alt="" className="card-img-top" />
                            </div>
                                <div className="card-body">
                                    <h5>Web de servicios profesionales</h5>
                                    <p>Descripción</p>

                                </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="overflow">
                            <img src="/3.png" alt="" className="card-img-top" />
                            </div>
                                <div className="card-body">
                                    <h5>Aplicación de inventario</h5>
                                    <p>Descripción</p>

                                </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>


 </Layout>
   
)

export default Index;

//npm run dev correr el servidor