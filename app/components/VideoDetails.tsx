'use client';
import React from "react";
import { Paper, Typography } from "@mui/material";

interface VideoProps {
  video: {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      channelTitle: string;
      description: string;
      thumbnails: any;
    };
  } | null;
}

function VideoDetails({ video }: VideoProps) {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={videoSrc}
          frameBorder="0"
          title="Video Player"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </Paper>

      <Paper elevation={6} style={{ padding: '15px' }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {video.snippet.description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default VideoDetails;