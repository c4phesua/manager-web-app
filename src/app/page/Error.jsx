import { Box, Button, Container, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import { MESSAGE } from '../util/Constant';
import PageRouter from '../routes/PageRouter';
import RouteConstants from '../routes/RouteConstants';

const Error = ({ message = MESSAGE.NOT_FOUND }) => {

  document.title = 'Lỗi';

  const onBackButtonClick = (e) => {
    e.preventDefault();
    PageRouter.redirect(RouteConstants.root);
  }

  return (
    <div>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography
              align="center"
              color="textPrimary"
              variant="h1"
            >
              {message}
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <img
                alt="Under development"
                src="/static/images/not_found.png"
                style={{
                  marginTop: 50,
                  display: 'inline-block',
                  maxWidth: '100%',
                  width: 560
                }}
              />
            </Box>
            <Button
              color="primary"
              startIcon={(<ArrowBack fontSize="small" />)}
              sx={{ mt: 3 }}
              variant="contained"
              onClick={onBackButtonClick}
            >
              Quay về trang chủ
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  )
};

export default Error;