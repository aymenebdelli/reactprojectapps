import React from 'react';
import { ExternalLink } from 'react-external-link';
import {FaFacebook , FaYoutube} from 'react-icons/fa';
import './MyApp.css';
import myImg from '../resources/FerrariDaytonaSP3.jpg';
import myImg1 from '../resources/Ferrarrif13.jpg';
import myImg2 from '../resources/Ferrarif12.jpg';
import background from '../resources/ferrari-logo-1.png'
import {
  Row,
  Image,
  Navbar,
  Container,
  Nav,
  Col,
  FormControl,
  Form,
  Carousel,
  Card,
  Button,
} from 'react-bootstrap';



function MyApp() {
  return (
    <div className='myDiv' style={{ backgroundImage: `url(${background})`}}>
      <Navbar bg='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <Nav className='me-auto'>
              <img
                src='/logo192.png'
                width='15%'
                className='d-inline-block align-top'
                alt='React Bootstrap logo'
              />
              <Nav.Link href='#home' style={{ color: 'white' }}>
                Home
              </Nav.Link>
              <Nav.Link href='#features' style={{ color: 'white' }}>
                Features
              </Nav.Link>
              <Nav.Link href='#pricing' style={{ color: 'white' }}>
                Pricing
              </Nav.Link>
              <Form className='d-flex'></Form>
            </Nav>
          </Navbar.Brand>
        </Container>
        <FormControl
          type='search'
          placeholder='Search'
          id='search'
          aria-label='Search'
        />
        <Button variant='outline-success' id='btn'>
          Search
        </Button>
      </Navbar>

      <Form className='break'>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label style={{ fontStyle: 'oblique', fontSize: '25px' }}>
              Email
            </Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label style={{ fontStyle: 'oblique', fontSize: '25px' }}>
              Password
            </Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label style={{ fontStyle: 'oblique', fontSize: '25px' }}>
              City
            </Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label style={{ fontStyle: 'oblique', fontSize: '25px' }}>
              State
            </Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label style={{ fontStyle: 'oblique', fontSize: '25px' }}>
              Zip
            </Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' id='formGridCheckbox'>
          <Form.Check
            type='checkbox'
            label='Check me out'
            style={{ fontStyle: 'oblique', fontSize: '25px' }}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>

      <Carousel variant='dark' className='fer'>
        <Carousel.Item>
          <img className='d-block w-100' src={myImg} alt='First slide' />
          <Carousel.Caption>
            <h5 style={{ color: 'white' }}>FerrariDaytonaSP3</h5>
            <p style={{ color: 'white' }}>Essere Ferrari</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={myImg1} alt='Second slide' />
          <Carousel.Caption>
            <h5 style={{ color: 'white' }}>Ferrarif13</h5>
            <p style={{ color: 'white' }}>Essere Ferrari</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={myImg2} alt='Third slide' />
          <Carousel.Caption>
            <h5 style={{ color: 'white' }}>Ferrari12</h5>
            <p style={{ color: 'white' }}>Essere Ferrari</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className='text-center'>
        <Card.Footer className='text-muted bg-dark'>
          Copyright &copy; 2021 by Aymen  <ExternalLink href="https://www.facebook.com/Ferrari" ><FaFacebook style={{color: "royalblue" , fontSize: "20px"}}/></ExternalLink> <ExternalLink href="https://www.youtube.com/c/Ferrari" > <FaYoutube style={{color: "red" , fontSize: "20px"}}/></ExternalLink>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default MyApp;
