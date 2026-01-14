'use client';

import { useState, FormEvent, ChangeEvent } from "react";
import { Paper, TextField } from "@mui/material";

interface SearchBarProps {
    onFormSubmit: (searchTerm: string) => void;
}

function SearchBar({ onFormSubmit }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onFormSubmit(searchTerm);
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);

  return (
    <Paper elevation={6} style={{ padding: '25px'}}>
      <form onSubmit={handleSubmit}>
      <TextField fullWidth label="Search..." onChange={handleChange} value={searchTerm} />
      </form>
    </Paper>
  )
}

export default SearchBar;