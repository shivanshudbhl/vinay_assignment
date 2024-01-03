import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";

import FormContainer from "../components/FormContainer";


const ContactScreen = ({ location }) => {
    const formRef = useRef()
    const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
    })
  
    const [loading, setLoading] = useState(false)
  
    const handleChange = (e) => {
      const { target } = e
      const { name, value } = target
  
      setForm({
        ...form,
        [name]: value,
      })
    }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_wbq520s',
        'template_eigi8iz',
        {
          from_name: form.name,
          to_name: 'Shivanshu Dobhal',
          from_email: form.email,
          to_email: 'shivanshudobhal@gmail.com',
          message: form.message,
        },
        'VVLqL3D7oEE5et5ao'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thanks! I will get back to you soon.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Oops, something went wrong. Please try again.')
        }
      )
  }

  

  return (
    <FormContainer>
      <h1>Contact Us</h1>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="name">
          <FormLabel>Name</FormLabel>
          <FormControl
            type="name"
            placeholder="Enter Name"
            value={Form.name}
            onChange={handleChange}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel>Email Address</FormLabel>
          <FormControl
            type="email"
            placeholder="Enter Email"
            value={Form.email}
             onChange={handleChange}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Message</FormLabel>
          <FormControl
            type="textarea"
            placeholder="Enter your message"
            value={Form.message}
              onChange={handleChange}
          ></FormControl>
        </FormGroup>
        
        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactScreen;
