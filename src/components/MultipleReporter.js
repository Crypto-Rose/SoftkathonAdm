import React from "react";
import NavBar from "./NavBar";
import Reporter from "./Reporter";
import { Jumbotron } from 'reactstrap'

export default class MultipleReporter extends React.Component {

    constructor() {
        super()
        this.state = {
            dataList: []
        }
        this.verificarCache = this.verificarCache.bind(this)
        this.obtenerDatos = this.obtenerDatos.bind(this)     
    }    

    componentDidMount() {
        this.verificarCache()
        this.obtenerDatos()
    }       
    
    verificarCache() {
        if (!localStorage.getItem("listaPersonal")) {
            const tareasDefault = [
                {
                    id: 0,
                    tittle: 'Rosa Morales',                    
                    description: 'Desarrolladora Full Stack',
                    nroTask: '20',
                    task: [
                        {   
                            id:0,
                            name:'Primer punto',
                            date: '9/10/2020',
                            observation: 'Se realiza backend de la aplicacion'
                        },
                        {
                            id:1,
                            name:'Segundo punto',
                            date: '10/11/2020',
                            observation: 'Se toman medidas de seguridad'
                        },
                        {
                            id:2,
                            name:'Tercer punto',
                            date: '11/12/2020',
                            observation: 'Se configura el servidor Proxy'
                        }
                    ]                                        
                },
                {
                    id: 1,
                    tittle: 'Julian ...',                                        
                    description: 'Desarrollador Frontend',   
                    nroTask: '19',                 
                    task: [
                        {   
                            id:0,
                            name:'Primer punto',
                            date: '9/10/2020',
                            observation: 'Se realiza backend de la aplicacion'
                        },
                        {
                            id:1,
                            name:'Segundo punto',
                            date: '10/11/2020',
                            observation: 'Se toman medidas de seguridad'
                        },
                        {
                            id:2,
                            name:'Tercer punto',
                            date: '11/12/2020',
                            observation: 'Se configura el servidor Proxy'
                        }
                    ]                  
                }
            ]
            localStorage.setItem("listaPersonal", JSON.stringify(tareasDefault))
        }
    }

    obtenerDatos() {
        const tareas = JSON.parse(localStorage.getItem("listaPersonal"))
        this.setState({
            dataList: tareas
        })
    }

    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        {this.state.dataList.map(e =>
                            <div className="col-lg-4 align-self-center" key={e.id}>
                                <center>
                                <Reporter tittle={e.tittle} description={e.description} id={e.id} nroTask={e.nroTask} updateState={this.obtenerDatos}/>
                                </center>
                            </div>
                        )}
                        {
                            this.state.dataList.length === 0
                            ? <div className="col-lg-12 align-self-center">
                                <center>
                                    <Jumbotron>
                                        <h1>No hay tareas</h1>
                                        <p className="lead text-muted">No hay usuarios</p>
                                    </Jumbotron>
                                </center>
                            </div>  
                            : <div></div>
                        }                                       
                    </div>
                </div> 
            </div>
        )
    }
}