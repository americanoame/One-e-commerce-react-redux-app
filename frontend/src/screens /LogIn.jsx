import { useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function LogIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch('/backend/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }

      // "If data.success is equal to false, then setError(true)
      // is called. Otherwise, do nothing (null)."
      dispatch(signInSuccess(data));
      navigate('/products');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <div className="bg-white p-4">
        <h2 className="text-2xl text-center font-semibold mb-4" style={{ color: 'grey', fontWeight: '600' }}>
          Log In
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Col xs={2}>
              <Form.Label className="mt-2">Email</Form.Label>
            </Col>

            <Form.Control type="email" name="email" className="w-full px-5 py-2 border rounded-lg" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="password">
            <Col xs={2}>
              <Form.Label className="mt-2">Password</Form.Label>
            </Col>
            <Form.Control type="password" name="password" className="w-full px-5 py-2 border rounded-lg" onChange={handleChange} />
          </Form.Group>

          <Link>
            <Button disabled={loading} variant="primary" type="submit" className="w-100 --btn mt-3" style={{ color: 'grey', border: 'none', textTransform: 'uppercase', fontWeight: 'bold' }}>
              {loading ? 'Loading...' : 'Log In'}
            </Button>
          </Link>
        </Form>

        <p className="text-gray-600 text-sm mt-4">
          Have no account?{' '}
          <a href="/sign-up" className="text-green-500" style={{ color: 'green' }}>
            Sign Up
          </a>
        </p>
        <p className={`text-danger `}> {error ? error.message || 'Something went wrong!' : ''} </p>
      </div>
    </Container>
  );
}
