import Layout from "../components/layout";
import Link from "next/link";
const blog =() => (

<Layout>
<div className="text-center">
    <h1>Blog</h1>
    <div className="section-info ">
       <h3>Un saludo, he creado este proyecto para presentar mi conocimiento en tecnologías
           basadas en el desarrollo de software.</h3> 
           <h3>El area de la tecnología cambia de una manera muy rapida, por lo tanto como profesionales debemos
               de mantenernos actualizados.</h3> 
        
    </div>
   <div className="row">
       <div className="col-sm-100%">
           <div className="card card-body bg-light">
           <h2 className="text-decoration-underline">Contacto</h2>

            <div className="row py-3">
                <div className="col-md-6">
                    <h2 className="text-decoration-underline">E-mail</h2>
                    <h3>kevjob826@gmail.com</h3>
                </div>
                <div className="col-md-6">
                    <h2 className="text-decoration-underline">Linkedln</h2>
                    <Link href="www.linkedin.com/in/kevin-lópez-meza-5b3a3a213">
                    <button type="button" className="btn btn-info rounded-pill">Kevin López Meza</button>
                    </Link>
                    
                </div>
               

            </div>
           </div>
       </div>
   </div>
</div>
</Layout>


)

export default blog;