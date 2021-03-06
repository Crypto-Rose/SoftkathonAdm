import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import monsterHome from "../images/monsterHome.png";
import enterprise from "../images/enterprise.png"

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {document.body.setAttribute("style", "background-color: white;")}
        <NavBar />
        <div className="container" style={{marginTop: '30px'}}>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img
                src={monsterHome}
                alt=""
                className="img-fluid"
                style={{ padding: "30px" }}
              />
            </div>
            <div className="col-sm-6">
              <Jumbotron style={{marginBottom: '-30px', paddingBottom: '10px'}}>
                <center>
                  <h2>
                    Administra los informes de tus usuarios de una forma {" "}                    
                    <strong>rapida, sencilla y segura</strong>
                  </h2>                 
                  <hr />
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button color="warning" block>
                      <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>{" "}
                      Iniciar <strong> Speakly </strong>
                    </Button>
                  </Link>
                  <img
                    src={enterprise}
                    alt=""
                    className="img-fluid"
                    style={{ padding: "30px" }}
                  />
                </center>
              </Jumbotron>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
