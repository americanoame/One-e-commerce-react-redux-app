import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerBox() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '150px', color: 'grey' }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden"></span>  
      </Spinner>
       <p style={{color: 'grey'}}>Page is Loading... </p>
    </div>
  );
}