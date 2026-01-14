'use client';
import { useState } from "react";
import { Grid } from "@mui/material";
import { SearchBar, Videolist, VideoDetails} from "./components";
import youtube from "./api/youtube";


interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: any;
  };
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleSubmit = async (searchTerm: string) => {
    try {
      const response = await youtube.get("search", { 
        params: {
          q: searchTerm,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);  
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};

const onVideoSelect = (video: Video) => {
  setSelectedVideo(video);
};

  return (
    <>
    <Grid container spacing={4} justifyContent='center' sx={{ p: 2 }}>
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <VideoDetails video={selectedVideo} />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Videolist videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>

        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
