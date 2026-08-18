

import { useState, useMemo } from "react";
import type { SyntheticEvent, ChangeEvent } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  TextField,
  Button,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// union type: mode فقط می‌تونه یکی از این دو مقدار باشه
type ThemeMode = "light" | "dark";

export default function ThemeForm() {
  const [text, setText] = useState<string>("");
  const [mode, setMode] = useState<ThemeMode>("light");
  const [submitted, setSubmitted] = useState<string>("");

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  const toggleTheme = () => {
    setMode((prev: ThemeMode) => (prev === "light" ? "dark" : "light"));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") return;
    setSubmitted(text);
    setText("");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{ position: "relative", p: 3, borderRadius: 3, minHeight: 260 }}
      >
        <IconButton
          onClick={toggleTheme}
          sx={{ position: "absolute", top: 12, right: 12 }}
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <Typography variant="h6" gutterBottom>
          فرم تمرینی
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
        >
          <TextField
            size="small"
            value={text}
            onChange={handleChange}
            placeholder="چیزی بنویس..."
          />
          <Button type="submit" variant="contained">
            ارسال
          </Button>
        </Box>

        {submitted && (
          <Typography sx={{ mt: 2 }}>
            آخرین مقدار ارسال‌شده: <strong>{submitted}</strong>
          </Typography>
        )}
      </Paper>
    </ThemeProvider>
  );
}