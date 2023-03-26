import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
  } from '@chakra-ui/react'
import { useRef, useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'
import {signIn}  from '../../services/auth-service';
import "./Login.css";
import useAuth from '../../hooks/useAuth'


  const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ||"/"; 
  console.log(from);

  const userRef = useRef();
  const errRef = useRef();

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswodError] = useState(null);
  const [emailError, setEmailError] = useState(null);

    useEffect(()=>{
      userRef.current?.focus();
    },[]);

    useEffect(()=>{
      setErrMsg('');
    },[email,password])

    const validateEmail = (value) => {
      if (!value) {
        return "Email is required.";
      }
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!isValid) {
        return "Invalid email format.";
      }
      return null;
    };

      const handleClick = async (e) => {
        e.preventDefault();
        if (password) {
          // Submit form data
          setPasswodError(null);
        } else {
          setPasswodError("Password is required.");
        }

        if (email) {
          // Submit form data
          setEmailError(null);
        } else {
          setEmailError("Email is required.");
        }
        if(email && password && !validateEmail(email))
        {
        try {
          const credentials = {
            email: email,
            password : password
          }
          const response = await signIn(
           credentials
          );
          console.log(response?.data?.message);
          if (response?.data?.isSuccess === true ){
          console.log(response?.data?.data);
          const accessToken = response?.data?.data.accessToken;
          const refreshToken = response?.data?.data.refreshToken;
          setAuth({ email, password,accessToken, refreshToken })
          setEmail('')
          setPassword('');
          navigate(from, {replace : true});
          setSuccess(true);
          } 
          else
          {
            setErrMsg(response?.data?.message);
            errRef.current?.focus();
            setSuccess(false);
          }
      } catch (err) {
        console.log(err);
      };
    }
    }
      
    return(
        <Container
    maxW="lg"
    py={{
      base: '12',
      md: '24',
    }}
    px={{
      base: '0',
      sm: '8',
    }}
  >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={{
                base: 'xs',
                md: 'sm',
              }}
            >
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={{
            base: 'transparent',
            sm: 'bg-surface',
          }}
          boxShadow={{
            base: 'none',
            sm: 'md',
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl isRequired isInvalid={emailError || validateEmail(email)}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email}
                             placeholder="Enter your email"/>
                <FormErrorMessage>{emailError || validateEmail(email)}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={passwordError}>
              <PasswordField placeholder="Enter your password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
              <FormErrorMessage>{passwordError}</FormErrorMessage>
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button onClick={handleClick} variant="primary">Sign in</Button>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive" color="red">{errMsg}</p>
           
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>)
  }
  export default Login;