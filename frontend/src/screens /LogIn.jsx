
import { Form, Button, Container, Col } from 'react-bootstrap';

export default function SignUp() {
  
    return (
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <div className="bg-white p-4">
        <h2 className="text-2xl text-center font-semibold mb-4 text-dark">Log In</h2>
          <Form>
            <Form.Group controlId="email">
            <Col xs={2}>
              <Form.Label className="mt-2">Email</Form.Label>
            </Col>
              
              <Form.Control
                type="email"
                name="email"
                
                className="w-full px-5 py-2 border rounded-lg"
                
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
               
              />
            </Form.Group>
  
            <Button variant="primary" type="button"   className='w-100 --btn mt-3' 
                href="/" style={{ color: 'gold', border: 'none' }}>Log In</Button>
          </Form>
  
          <p className="text-gray-600 text-sm mt-4">
            Have no account?{' '}
            <a href="/sign-up" className="text-green-500">
              Sign Up instead
            </a>
          </p>
          {/* <p className="text-red-700 mt-5">{error && 'Password does not match!'}</p> */}
        </div>
      </Container>
    );
  }







  



