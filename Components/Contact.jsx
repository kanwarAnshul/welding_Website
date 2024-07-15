import React from 'react';
import { Container, Grid, TextField, Button, Typography, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import weldingLogo from '../src/assets/weildingLogo.png';

const Contact = () => {
  const initialValues = {
    name: '',
    phone: '',
    suburb: '',
    subject: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone number is required'),
    suburb: Yup.string().required('Suburb is required'),
    subject: Yup.string().required('Subject is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <Box sx={{ py: 5, textAlign: 'center',width:"100vw",marginTop:"8rem" }}>
      <img src={weldingLogo} alt="Welding Logo" style={{ width: '50%', maxWidth: '300px', marginBottom: '20px' }} />
      <Typography variant="h4" gutterBottom>
        Drop us a message
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ px: 2 }}>
        Mobile welding is something that we have fully set up for my customers' needs
      </Typography>

      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={6}>
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                    variant="outlined"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    as={TextField}
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    variant="outlined"
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    as={TextField}
                    name="suburb"
                    label="Suburb"
                    fullWidth
                    variant="outlined"
                    error={touched.suburb && Boolean(errors.suburb)}
                    helperText={touched.suburb && errors.suburb}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    as={TextField}
                    name="subject"
                    label="Subject"
                    fullWidth
                    variant="outlined"
                    error={touched.subject && Boolean(errors.subject)}
                    helperText={touched.subject && errors.subject}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    variant="outlined"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default Contact;
