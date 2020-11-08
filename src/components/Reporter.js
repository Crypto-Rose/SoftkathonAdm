import React from 'react'
import { Toast, ToastBody, ToastHeader, Button, Badge } from 'reactstrap';
import { MdDateRange } from "react-icons/md";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Link } from 'react-router-dom'


export default class Reporter extends React.Component {

    comentarTarea() {
        window.location = "/multipleReporter";
    }

    render() {
        return(
            <div className="p-3 my-2 rounded">
                <Link to={"/details/"+this.props.id} style={{textDecoration: 'none', color: 'black'}}>
                    <Toast>
                        <ToastHeader className="lead">
                            <strong>{this.props.tittle}{' '}</strong>
                            <Badge color="dark"><MdDateRange/> {this.props.nroTask}</Badge>
                        </ToastHeader>
                        <ToastBody>                           
                            <p className="text-muted">{this.props.description}</p>                              
                        <ToastBody>                                               
                            <Button color="success" size="sm" type="submit" ><HiOutlinePlusCircle/> Ver mas</Button>
                        </ToastBody>                         
                        </ToastBody>                                        
                    </Toast>
                </Link>
            </div>
        )
    }
}



//<Button className="mr-3" color="info" size="sm" onClick={this.eliminarTarea}><AiOutlineComment/> Comentar</Button>

/*
  let tareas = JSON.parse(localStorage.getItem("listaTareas"))
        console.log(this.props.id)
        for (var i = 0; i < tareas.length; i++) {
            if (tareas[i].id === this.props.id) {
              tareas[i].state = "hecho"
            }
          }
        localStorage.setItem("listaTareas", JSON.stringify(tareas))
        this.props.updateState();
*/ 