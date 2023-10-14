import { Card, Row, Col, Button } from 'react-bootstrap';
import { products } from '../products';
import Banner from '../components/Banner';

const ProductsScreen = () => {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="container mx-auto min-h-screen" style={{ position: 'relative'}}>
        <Row className="justify-content-center custom-row">
          {products.map((product) => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
              <Card className="custom-card mb-4" style={{ position: 'relative', zIndex: 1 }}>
                <Card.Img variant="top" src={product.image} style={{ height: '50%' }} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary" type="button" className="w-100 --btn" href="" style={{ color: 'gold', border: 'none' }}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductsScreen;
