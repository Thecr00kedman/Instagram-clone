/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { Bottom, Middle, StyledPaper, Top } from "./styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const Card = ({ data }) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState({
    comment: "",
  });

  const handleComment = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.value });
  };

  return (
    <>
      <StyledPaper>
        <Top>
          <small>
            <Avatar /> <strong>{data.name}</strong>
          </small>
          <MoreHorizIcon />
        </Top>
        <Middle>
          <img src={data.img} alt={data.name} />
        </Middle>
        <Bottom>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton onClick={() => setShowCommentInput(!showCommentInput)}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton>
            <SendIcon />
          </IconButton>
          <small>{data.createdAt}</small>
        </Bottom>
        <Typography variant="body2" sx={{ padding: "0.5rem" }}>
          {data.caption}
        </Typography>
        {showCommentInput && (
          <Box
            sx={{
              border: "1px solid rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            <input
              type="text"
              placeholder="Add comment..."
              name="comment"
              onChange={handleComment}
            />
            <IconButton>
              <SendIcon />
            </IconButton>
          </Box>
        )}
      </StyledPaper>
    </>
  );
};

export default Card;
