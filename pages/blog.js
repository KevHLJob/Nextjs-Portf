import Layout from "../components/layout";
import Link from "next/link";

const blog =() => (

<Layout>

<header className="text-center">
    <h1>Blog</h1>
</header>

 {/* cards of programming languages */}
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="/css6.jpg" class="card-img-top" alt="..." style={{width: "100%", height: "55%"}}/>
      <div class="card-body">
        <h5 class="card-title text-center">Css</h5>
        <p class="card-text">
        Desde CSS3, el alcance de las especificaciones se incrementó de forma significativa y
         el progreso de los diferentes modulos de CSS comenzó a mostrar varias diferencias,
          lo que hizo más efectivo desarrollar y publicar recomendaciones separadas por módulos.
          
          </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" >
      <img src="/4.png" class="card-img-top" alt="..." style={{width: "100%", height: "55%"}} />
      <div class="card-body">
        <h5 class="card-title text-center" >JavaScript</h5>
        <p class="card-text">JavaScript (JS) es un lenguaje de programación ligero, interpretado,
           o compilado justo-a-tiempo (just-in-time) con funciones de primera clase.
            Si bien es más conocido como un lenguaje de scripting (secuencias de comandos)
             para páginas web, y es usado en muchos entornos fuera del navegador.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/html5.png" class="card-img-top" alt="..." style={{width: "100%", height: "55%"}} />
      <div class="card-body">
        <h5 class="card-title text-center">HTML5</h5>
        <p class="card-text">También se han añadido etiquetas que permiten crear animaciones en 2D,
         con una etiqueta de canvas y
          una API que permiten que puedas dibujar elementos en dos dimensiones y animarlos en la web.
           También se pueden añadir eventos para el teclado, ratón o mandos,
           s que permiten poder utilizarlos para interactuar con una página.</p>
      </div>
    </div>
  </div>
  </div>


<div className="row py-3">
 
    
 
  </div>

   




 {/* //information */}
<div className="container text-center">
  <h2>Contacto</h2>
<div class="row align-items-center">
    <div class="col">
      <h3>Correo:</h3>
      <p>kevjob826@gmail.com</p>
    </div>
    <div class="col">
      <h3>Linkedin</h3>
      <Link href="https://www.linkedin.com/in/kevin-l%C3%B3pez-meza-5b3a3a213/">
          <button type="button" class="btn btn-primary">Ver</button>
      </Link>
    </div>
    <div class="col">
      <h3>Creado con:</h3>
      <p>Next.js, Bootstrap</p>
    </div>
  </div>
  </div>
</Layout>



)

export default blog;