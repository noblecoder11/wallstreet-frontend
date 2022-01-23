import { useState } from 'react';
import {Button, Col, Container, Row, Form} from 'react-bootstrap';

import "./login.css"
// 5 6 12
const LoginHome = () =>{
    const [user_name, setUsername] = useState('');
    const [pass_word, setPassword] = useState('');
    const [ispending, setIsPending] = useState(false);
    const [isuser, setIsUser] = useState('');
        
    const handleSubmit = (e) =>{
        // e.preventDefault();
        setIsPending(true);
        const user = {user_name, pass_word};

        if (user_name === "Shreyas" && pass_word === "test123")
        {
            setIsPending(false);

            setIsUser('User found');
        }
        else{
            setIsUser('User not found');
            setIsPending(false);
        }

       
    }
    
    return(    
        <div className="main_div">
        <Container className="locont">
            <br></br>
            <h1 className="m-auto p-2 text-center text-primary loheader1">Wallstreet</h1>
            <h1 className=" m-auto p-1 text-center text-white loheader2 fs-3">Welcome</h1>
            <Row className=" mt-5">
                <Col lg={3} md={6} sm={12} className="lobox p-5 m-auto  shadow-sm ">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control value={user_name} onChange = {(e) => setUsername(e.target.value)} className="rounded-pill" type="text" placeholder="Enter your username" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={pass_word} onChange = {(e) => setPassword(e.target.value)} className="rounded-pill" type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                  { !ispending && <Button className="submitBtn" variant="primary" type="submit">
                     Submit
                  </Button>}
                  { ispending && <Button variant="primary" type="submit">
                     Logging
                  </Button>}
                  <p className="m-auto">{isuser}</p>

                  </div>
                </Form>
                </Col>
            </Row>
        </Container>
        
        </div>
        
       
    );
}

export default LoginHome