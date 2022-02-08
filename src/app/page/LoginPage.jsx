import {
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
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
	const [loginError, setLoginError] = useState(false);

  const onLoginError = () => {
		setLoginError(true);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		MAuth.login({ email, password }, onLoginError);
	}

  const onUserNameChange = (e) => {
		setEmail(e.target.value);
	}

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	}

  const renderLoginError = (show) => {
		return (
			show &&
			<Grid item xs>
				<Typography color="error">Tài khoản hoặc mật khẩu không đúng</Typography>
			</Grid>
		);
	};

  return (
    <div>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className="login-box">
					<Typography component="h1" variant="h5">
						Đăng nhập
					</Typography>
					<form className="login-form" noValidate onSubmit={onSubmit}>
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
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Ghi nhớ tài khoản"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className="btn-login"
						>
							Đăng nhập
						</Button>
						<Grid container>
							{renderLoginError(loginError)}
						</Grid>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Quên mật khẩu?
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</div>
  )

};

export default LoginPage;