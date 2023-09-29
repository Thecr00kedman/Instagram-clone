import { Box, Divider } from "@mui/material";
import Navbar from "../components/Navbar";
import StorySlider from "../components/StorySlider";

const HomePage = () => {

    return (
        <>
            <Navbar />
            <Box
                sx={{ ml: { xs: "10px", md: "180px" }, mt: { xs: "5rem" } }}
            >
                <Box
                    sx={{ overflow: "hidden", p: "0 20px", mb:"10px" }} >
                    <StorySlider />
                </Box>
                <Divider />
            </Box>
        </>
    )
}

export default HomePage;
