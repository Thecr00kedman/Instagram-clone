import { AppBar, Avatar, Box } from "@mui/material";
import { StyledStory } from "./styles";

const dummyStories = [
  {
    id: 1,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 2,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 3,
    name: "John Doe",
    src: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 4,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 5,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 6,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 7,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 8,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 9,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 10,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 11,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 12,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 13,
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

const Story = () => {
  return (
    <>
      <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
        <StyledStory>
          {dummyStories.map((story) => (
            <Box
              key={story.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                "& > small": { color: "black", textAlign: "center" },
              }}
            >
              <Avatar
                src={story.src}
                sx={{ height: "80px", width: "80px", border: "2px solid red" }}
              />
              <small>{story.name}</small>
            </Box>
          ))}
        </StyledStory>
      </AppBar>
    </>
  );
};

export default Story;
