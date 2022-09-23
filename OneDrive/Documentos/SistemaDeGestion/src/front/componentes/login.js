import React from "react"
import { Form } from "react-bootstrap"
//import './css/style.css'

const login = () => {

    return (
        <div className="login-form">
            <h2>login</h2>
            <Form action="auth" method="POST">
                <input type="text" name="user" id="user" placeholder="Usuario" required/>
                <input type="password" name="pass" id="pass" placeholder="Contraseña" required/>
                <a href="PanelPrincipal" className="btn-login" value="Login"/>
            </Form>
        </div>
    )
}

export default login

