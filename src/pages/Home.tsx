import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-next'

export function Home() {
	return (
		<Container>
	      
		        <Card className='d-flex align-items-center justify-content-center border-0' style={{ gap: '0.5rem' }}>
					<Card.Img style={{ width: '30rem', justifyContent: 'center' }} src='../../imgs/SmartestPhones.png' alt='smartphones' />
					<Card.Text className='fs-2 fw-bold d-flex align-items-center justify-content-center mb-5'>
						<span className='align-items-center justify-content-center m-3'>Get the best smartphones...<br/>
						At the best prices !</span>
						<Card.Img className='align-items-center justify-content-center m-3' src='../../imgs/smartphonez.jpg' alt='smartphones' style={{ width: '20rem', objectFit: 'contain' }} />
					</Card.Text>
				</Card>
	        
   	    </Container>
	)
}