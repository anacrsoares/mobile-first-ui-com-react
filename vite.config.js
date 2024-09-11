import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: process.env.VITE_BASE_PATH,
=======
  base: "",
>>>>>>> master
  plugins: [react()],
});
