'use client';
import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

interface VideoItemProps {
  video: any;
  onVideoSelect: (video: any) => void;
}

const VideoItem = ({ video, onVideoSelect }: VideoItemProps ) => {
  return (
    <>
    <Grid size={12}>
        <Paper elevation={3}
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '10px', '&:hover': { backgroundColor: '#f0f0f0'}}}
        onClick={() => onVideoSelect(video)}>
        <Box 
            component="img"
            sx={{ 
                marginRight: '15px', 
                height: '50px', // standardized thumbnail height
                borderRadius: '4px' 
            }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url} 
        />
        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
          {video.snippet.title}
        </Typography>
        </Paper>
    </Grid>
    </>
  );
}

export default VideoItem;
