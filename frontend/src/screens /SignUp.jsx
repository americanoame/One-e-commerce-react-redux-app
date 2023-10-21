import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import { Form, Button, Container, Col } from 'react-bootstrap';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/backend/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      data.success === false ? setError(true) : null;
       
      // "If data.success is equal to false, then setError(true) 
      // is called. Otherwise, do nothing (null)."

      navigate('/log-in');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };


    return (
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <div className="bg-white p-4">
        <h2 className="text-2xl text-center font-semibold mb-4" style={{color: 'grey', fontWeight: '600'}}>Sign Up</h2>
  
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
            <Col xs={3}>
              <Form.Label>Username</Form.Label>
            </Col>
              <Form.Control
                type="text"
                name="username"
                
                className="w-full px-5 py-2 border rounded-lg"
                onChange={handleChange}
              />
            </Form.Group>
  
            <Form.Group controlId="email">
            <Col xs={2}>
              <Form.Label className="mt-2">Email</Form.Label>
            </Col>
              
              <Form.Control
                type="email"
                name="email"
                
                className="w-full px-5 py-2 border rounded-lg"
                onChange={handleChange}
              />
            </Form.Group>
  
            <Form.Group controlId="password">
             <Col xs={2}>
              <Form.Label className="mt-2" >Password</Form.Label>
            </Col>
              <Form.Control
                type="password"
                name="password"
                
                className="w-full px-5 py-2 border rounded-lg"
               onChange={handleChange}
              />
            </Form.Group>
  
            <Button disabled={loading} variant="primary" type="submit"   className='w-100 --btn mt-3' 
                 style={{ color: 'grey', border: 'none', fontWeight: 'bold', textTransform: 'uppercase'}}>
                 {loading ? 'Loading...' : 'Sign Up'}
                 </Button>
          </Form>
  
          <p className="text-gray-600 text-sm mt-4">
            Have an account?{' '}
            <a href="/log-in" className="text-green-500" style={{color: 'green'}}>
              Log in
            </a>
          </p>
          <p className={`text-danger `}> {error && 'Something went wrong!'} </p>
        </div>
      </Container>
    );
  }







  


