import React from 'react'
import { Col, Row, CardSubtitle, Card, CardBody, CardTitle, CardText } from 'reactstrap'
import Perfil from "../images/perfil.jpg";
import { FiCheckCircle } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import NavBar from "./NavBar";
import { Drawer, Button,Input } from 'antd';
const { TextArea } = Input;


export default class Details extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            dataList: [],
            name: '',
            visible:false,
            value: '',
            chosenTask:'',
            dataComment:[]
        }      
        this.obtenerDetalles = this.obtenerDetalles.bind(this) 
        this.showDrawer = this.showDrawer.bind(this) 
        this.onClose = this.onClose.bind(this)
        this.onChangeComment = this.onChangeComment.bind(this)
        this.saveComment = this.saveComment.bind(this)
    }

    showDrawer(data){                        
        this.setState({
            visible: true, 
            chosenTask:JSON.stringify(data)          
        })           
    };
    
    onClose(){      
        this.setState({
            visible: false,           
        })         
    };

    componentDidMount() {
        this.obtenerDetalles()
    }  

    obtenerDetalles() {   
        const json = []   
        const IdTarea = this.props.match.params.id  
        const detalles = JSON.parse(localStorage.getItem("listaPersonal"))
        
        for (let i = 0; i < detalles.length; i++) {             
            if (JSON.stringify(detalles[i].id) === IdTarea) {
                console.log(detalles[i],IdTarea)
                json.push(detalles[i])              
            }
        }       
        this.setState({
            dataList: json,
            name: json[0].tittle
        })      
        if (localStorage.getItem("comentariosRealizados")) {
            const comentariosExitosos = JSON.parse(localStorage.getItem("comentariosRealizados"))
            this.setState({
                dataComment: comentariosExitosos
            })
        }        
    }

    onChangeComment(event){        
        this.setState({value: event.target.value});
    }

    saveComment(){      
        const comentarios=[]      
        comentarios.push({comentario:this.state.value})       
        /*for (let i = 0; i < detalles.length; i++) {             
            if (JSON.stringify(detalles[i].id) === IdTarea) {                
                detalles[i].push({asas:'asa'})
                localStorage.setItem("listaPersonal", JSON.stringify(totalPerfil))
            }
        }  */     
            /*const comentariosLocal = localStorage.getItem("listaPersonal")   
            const comentariosExistentes= JSON.parse(comentariosLocal)
            
            localStorage.setItem("comentariosRealizados", JSON.stringify(comentariosExistentes))*/
        
        this.obtenerDetalles()      
    }

    render() { 
        return (
            <div>
            <NavBar/>            
                <center>
                    <div className="container row justify-content-md-center">
                        <div className="col-lg-4">
                            <div className="cardMovie">
                                <img src={Perfil} alt="" className="img-fluid" />
                            </div>
                            <hr />                            
                        </div>

                        <div className="col-lg-8 mt-3">                             
                            <h4>{this.state.name}</h4>
                            <Row>
                            {this.state.dataList.map((e,i) =>
                                e.task.map(d =>
                                <Col sm="6" key={i}>                               
                                    <Card style={{ border: 'none' }} >                                   
                                        <CardBody>
                                            <CardTitle  tag="h5">{d.name}<FiCheckCircle style={{ color:'green', marginLeft:'4px',fontSize:'13px'}}/></CardTitle>
                                            <CardSubtitle>{ d.date }</CardSubtitle>
                                            <CardText>{d.observation}</CardText>
                                            <CardText  tag="hr"></CardText>                                           
                                            <Button type="primary" shape="round" icon={<FaRegCommentDots style={{ marginRight:'5px' }}/>} onClick={ () => this.showDrawer(d.id) }>Realizar comentario</Button>  
                                        </CardBody>                                                                                                                  
                                    </Card>                               
                                </Col>
                            ))} 
                            </Row> 
                            <Drawer
                                title="Agregar comentario"
                                placement="right"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >
                                <TextArea                                                                     
                                    placeholder="Aqui tu comentario..."
                                    className="mb-3"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                    onChange={this.onChangeComment}
                                    value={this.state.value}
                                />  
                                <Button type="dashed" danger  onClick={this.saveComment}>Guardar</Button>                            
                            </Drawer>                        
                        </div>
                    </div>
                </center >               
            </div>
        )
    }
}