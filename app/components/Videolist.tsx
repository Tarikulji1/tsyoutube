'use client';
import React from "react";
import {Grid} from "@mui/material";
import VideoItem from "./VideoItem";

interface VideoListProps {
  videos: any[];
  onVideoSelect: (video: any) => void;
}

function Videolist({ videos, onVideoSelect }: VideoListProps) {
  if (!videos) return null;

  const listVideos = videos.map((video: any) => (
  <Grid size={12} key={video.id.videoId}>
    <VideoItem video={video} onVideoSelect={onVideoSelect} />
  </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {listVideos}
    </Grid>
  )
}

export default Videolist;