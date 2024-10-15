import React from 'react';
import { Container, Grid } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
