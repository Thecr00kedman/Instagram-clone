import { Box, Typography, styled } from "@mui/material"
import Logo from '../assets/logoinsta.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import appstore from "../assets/app.png"
import playstore from "../assets/play.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const Container = styled(Box)`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:20px;
overflow-x:hidden;
`

const MainContainer = styled(Box)`
max-width:400px;
display:flex;
justify-content:center;
flex-grow:1;
flex-direction:column;
padding:20px 15px;
margin-top:65px;
`
const UpperContainer = styled(Box)`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
text-align:center;
padding:20px 15px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
& > button{
    display:flex;
    justify-content:center;
    align-items:center;
    width:250px;
    height:32px;
    border:none;
    outline:none;
    border-radius:5px;
    margin:10px 0;
    background:#0095F6;
    color:white;
    cursor:pointer;

    &:hover{
        opacity:.8;
    & > img{
        margin-right:8px;
        width:15px;
    }
}
`
const Image = styled("img")({
    height: 50,
    width: 174,
    objectFit: "cover",
    margin: 10,
})

const OrContainer = styled(Box)`
display:flex;
justify-content:center;
align-items:center;
margin:10px 0;
& > div{
    border:1px solid rgb(219, 219, 219);
    width:100px;
}
&>span{
    margin:0 12px;
    color:grey;
    font-weight:bold;
    font-size:14px;
}
`
const InputContainer = styled("form")`
display:flex;
flex-direction:column;
align-items:center;
width:300px;

& > p{
    color:#737373;
    font-size:12px;
    margin:8px 0;
}

& > div{
    width: 250px;
    display:flex;
    align-items:center;
    height:36px;
    margin:3px 0;
    border:1px solid rgb(219, 219, 219);
    border-radius:3px;
    overflow:hidden;
    background:rgb(245, 245, 245);
    & >span svg{
        margin-right:5px;
        color:gray;
        cursor:pointer;
    }
}
& >div input{
    border:none;
    width:100%;
    height:100%;
    outline:none;
    padding: 9px 0 7px 8px;
    background:none;
    font-size:12px;
}

& > button{
    width:250px;
    margin:10px 0;
    height:36px;
    border:none;
    outline:none;
    background:  #0095F6;
    color:white;
    border-radius:5px;
    cursor:pointer;

    &:hover{
        opacity:.8;
}`;

const LowerContainer = styled(Box)`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
margin-top:15px;
text-align:center;
font-size:14px;
padding:20px 15px;
&  span{
    color:#0095F6;
    cursor:pointer;
}
`
const ImgContainer = styled(Box)`
display:flex;
justify-content:center;
margin:10px 0;
& > img{
    height:40px;
    width: 130px;
    cursor:pointer;
    margin:0 5px;
}
`


const SignupPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const [formValues, setFormValues] = useState(
        {
            email: "",
            fullname: "",
            username: "",
            password: ""
        }
    );

    const handleSignIn = async (e) => {
        e.preventDefault()
        try {
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error, "error while handling signin")
        }
    }


    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate('/')
    })

    return (
        <Container>
            <MainContainer>
                <UpperContainer>
                    <Image src={Logo} alt="instagram logo" />
                    <Typography style={{ fontSize: 17, color: "#737373", fontWeight: "bold", width: 280 }}>Sign up to see photos and videos from your friends</Typography>
                    <button>
                        <FacebookIcon />
                        &nbsp;Log in with Facebook
                    </button>

                    {/* or container start  */}
                    <OrContainer>
                        <Box></Box>
                        <Box component='span' >OR</Box>
                        <Box></Box>
                    </OrContainer>
                    {/* or container end  */}

                    {/* input container start */}
                    <InputContainer>
                        <Box>
                            <input type="email"
                                placeholder='Mobile number or email address'
                                name="email"
                                value={formValues.email}
                                onChange={(e) => setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </Box>
                        <Box>
                            <input
                                type='text'
                                placeholder='Full name'
                                name="fullname"
                                value={formValues.fullname}
                                onChange={(e) => setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </Box>
                        <Box>
                            <input
                                type="text"
                                placeholder='Username'
                                name="username"
                                value={formValues.username}
                                onChange={(e) => setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </Box>
                        <Box>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='password'
                                name="password"
                                value={formValues.password}
                                onChange={(e) => setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value
                                })}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
                            </span>
                        </Box>
                        <Typography>
                            People who use our service may have uploaded your contact information to Instagram.
                            <Box component='span' style={{ color: "#00376B" }} >Learn more</Box>
                        </Typography>
                        <Typography>
                            By signing up, you agree to our
                            <Box component='span' style={{ color: "#00376B" }} >Terms, Privacy Policy</Box> and <Box component='span' style={{ color: "#00376B" }} >Cookies Policy.</Box>
                        </Typography>
                        <button onClick={(e) => handleSignIn(e)} >Sign Up</button>
                    </InputContainer>
                    {/* input container end  */}
                </UpperContainer>

                {/* lower container start  */}
                <LowerContainer>
                    <Box>Have an account?&nbsp;
                        <Box component="span" onClick={() => navigate("/login")}>Login</Box>
                    </Box>
                </LowerContainer>
                {/* lower container end  */}

                {/* get the app text start  */}
                <Typography style={{ textAlign: "center", fontSize: "14px", margin: "8px 0" }} >Get the app</Typography>
                {/* get the app text end  */}

                {/* app/play img start  */}
                <ImgContainer>
                    <img src={playstore} alt="playstore logo" />
                    <img src={appstore} alt="appstore logo" />
                </ImgContainer>
                {/* app.play img end  */}
            </MainContainer>
        </Container>
    )
}

export default SignupPage
