import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert,Button, Form, FormGroup, Label, Input ,Container,Row,Col} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema=Yup.object({
    firstname:Yup.string().required("fisrtname zorunludur"), lastname:Yup.string().required("lastname zorunludur"), phone:Yup.number("sayı giriniz"), email:Yup.string().email("email zorunulu ve bir email adresi giriniz").required(),url:Yup.string().url("web sitesi giriniz"),
  });
 const Contact = () => {
    return (
        <div>
              <Formik
               initialValues={{  firstname: "", lastname:"",company:"", phone:"", email:"", url:"",time:[],newsletter:false}} 
               validationSchema={validationSchema}
                onSubmit={(data,{setSubmitting,resetForm})=>{ setSubmitting(true); console.log(data); resetForm();setSubmitting(false);}}>
                {({values,isSubmitting, errors,touched, handleChange,handleBlur,handleSubmit })=>(
                  <Container>
        <Form onSubmit={handleSubmit}>
        <Label for="exampleEmail"><legend>Contact Us</legend></Label>
        <Row><Col md={6}>
        <FormGroup>
        <Label for="first">First Name</Label>
        <Input type="text" className="form-control" id="firstname" placeholder="firstname" value={values.firstname} onChange={handleChange } onBlur={handleBlur}/>
        {errors.firstname && touched.firstname ? (
            <Alert color="danger">{errors.firstname}</Alert>
          ) : null}
      </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="last">Last Name</Label>
        <Input type="text" className="form-control" placeholder="lastname" id="lastname" value={values.lastname} onChange={handleChange } onBlur={handleBlur}/>
        {errors.lastname && touched.lastname ? (
            <Alert color="danger">{errors.lastname}</Alert>
          ) : null}
      </FormGroup>
        </Col>
        </Row>

        <Row><Col md={6}>
        <FormGroup>
        <Label for="company">Company</Label>
        <Input type="text" className="form-control" placeholder="company" id="company" value={values.company} onChange={handleChange } onBlur={handleBlur}/>

      </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="phone">Phone Number</Label>
        <Input type="text" className="form-control" id="phone" placeholder="phone"value={values.phone} onChange={handleChange } onBlur={handleBlur}/>
        {errors.phone && touched.phone ? (
            <Alert color="danger">{errors.phone}</Alert>
          ) : null}
      </FormGroup>
        </Col>
        </Row>

        <Row><Col md={6}>
        <FormGroup>
        <Label for="email">Email address</Label>
        <Input type="text" className="form-control" id="email" placeholder="email" value={values.email} onChange={handleChange } onBlur={handleBlur}/>
        {errors.email && touched.email ? (
            <Alert color="danger">{errors.email}</Alert>
          ) : null}
      </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="url">Your Website <small>Please include http://</small></Label>
        <Input type="text" className="form-control" id="url" placeholder="url" value={values.url} onChange={handleChange } onBlur={handleBlur}/>
        {errors.url && touched.url ? (
             <Alert color="danger">{errors.url}</Alert>
          ) : null}
      </FormGroup>
        </Col>
        </Row>
    
      <FormGroup tag="fieldset">
      <Label for="contact-preference">When is the best time of day to reach you?</Label>
        <FormGroup check>
          <Label check>
            <Input  type="radio" name="time" id="time"  value={"Morning"} onChange={handleChange } onBlur={handleBlur}/>{' '}
            Morning
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="time"  id="time" value="Evening" onChange={handleChange } onBlur={handleBlur} />{' '}
            Evening
          </Label>
        </FormGroup>
      </FormGroup>
      <Label for="newsletter">Would you like to recieve our email newsletter?</Label>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="newsletter" id="newsletter"  value={values.newsletter} onChange={handleChange } onBlur={handleBlur}/>{' '}
          Sure!
        </Label>
      </FormGroup>
      <Button disabled={isSubmitting } color="primary" type="submit">Submit</Button>
                <pre>{JSON.stringify(values,null,2)}</pre>
    </Form>
    </Container>
                )}
    </Formik>
            </div>
    )
}
export default Contact;