import Layout from "../components/layout";
import Link from "next/link";
const Github= () => 
<Layout>

<header className= "Row">
        <div className="col-md-12">
            <div className="card card-body bg-light">
                <div className="row">
                   
                    <div className="col-md-8 d-grid gap-2 col-6 mx-auto text-center ">
                        <h1>Repositorios de Kevin López Meza</h1>
                        <div  class="d-grid gap-2 col-6 mx-auto">

                       
                        <Link href="https://github.com/kevHLJob">
                            <button type="button" class="btn btn-primary text-center">Github</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </header>

</Layout>

export default Github;