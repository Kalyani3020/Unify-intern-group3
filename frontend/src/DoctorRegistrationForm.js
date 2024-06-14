import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const DoctorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "First Name is required.";
    tempErrors.lastName = formData.lastName ? "" : "Last Name is required.";
    tempErrors.email = formData.email ? (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? "" : "Email is not valid.") : "Email is required.";
    tempErrors.mobileNo = formData.mobileNo ? (/^\d{10}$/.test(formData.mobileNo) ? "" : "Mobile Number is not valid.") : "Mobile Number is required.";
    tempErrors.address = formData.address ? "" : "Address is required.";
    tempErrors.password = formData.password ? "" : "Password is required.";
    tempErrors.confirmPassword = formData.confirmPassword ? (formData.password === formData.confirmPassword ? "" : "Passwords do not match.") : "Confirm Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        address: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({});
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Doctor Registration Details
        </Typography>
        <form onSubmit={handleSubmit}>

          <TextField fullWidth margin="normal" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}/>

          <TextField fullWidth margin="normal" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}/>

          <TextField fullWidth margin="normal" label="Email" name="email" type="email" value={formData.email} onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}/>

          <TextField fullWidth margin="normal" label="Mobile No" name="mobileNo" value={formData.mobileNo} onChange={handleChange}
            error={!!errors.mobileNo}
            helperText={errors.mobileNo}/>

          <TextField fullWidth margin="normal" label="Address" name="address" value={formData.address} onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}/>

          <TextField fullWidth margin="normal" label="Password" name="password" type="password" value={formData.password} onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}/>

          <TextField fullWidth margin="normal" label="Confirm Password" name="confirmPassword" type="password"value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}/>
            
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Register
          </Button>
        </form>
      </Box> 
    </Container>
  );
};

export default DoctorRegistrationForm;
