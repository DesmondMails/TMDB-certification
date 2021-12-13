import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Copyright from './components/Copyright/Copyright'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginForm } from '@/types/loginTypes'
import InputField from '@/components/form-fields/input-field/InputField'
import { authCredentials } from '@/constants'
import { loginEvent } from '@/store/auth/events/login'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(4, 'Username must be at least 4 characters')
      .max(14, 'Username must not exceed 14 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password must be at least 4 characters')
      .max(14, 'Password must not exceed 14 characters'),
  })

  const methods = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  })

  const { handleSubmit, control, setError } = methods

  const onSubmit = (data: LoginForm) => {
    const { username, password } = data

    if (username !== authCredentials.username) {
      setError('username', { message: 'Incorect username!' })
    } else if (password !== authCredentials.password) {
      setError('password', { message: 'Incorect password!' })
    } else {
      loginEvent({ username })
      navigate(state?.path || '/')
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              name='username'
              label='Username'
              margin='normal'
              control={control}
              fullWidth
              autoFocus
            />
            <InputField
              name='password'
              label='Password'
              type='password'
              margin='normal'
              control={control}
              fullWidth
              autoFocus
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </form>
        </FormProvider>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default Login
