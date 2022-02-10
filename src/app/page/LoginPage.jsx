import {
  Box,
	Button,
	Container,
	Grid,
	Link,
	TextField,
	Typography
} from '@material-ui/core';
import { useState } from 'react';
import MAuth from '../model/MAuth';

const LoginPage = () => {

  document.title = 'Đăng nhập';

  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		MAuth.login({ email, password });
	}

  const onUserNameChange = (e) => {
		setEmail(e.target.value);
	}

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
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
        <Container maxWidth="sm">
          <form onSubmit={onSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Đăng nhập
              </Typography>
            </Box>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
            </Box>
            <TextField
							onChange={onUserNameChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Tên đăng nhập hoặc email"
							name="username"
							autoComplete="username"
							autoFocus
						/>
            <TextField
							onChange={onPasswordChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Mật khẩu"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
            <Box sx={{ py: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="btn-login"
              >
                Đăng nhập
              </Button>
            </Box>
            <Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Quên mật khẩu?
								</Link>
							</Grid>
						</Grid>
          </form>
        </Container>
      </Box>
		</div>
  )

};

export default LoginPage;