import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
	plugins: [react()], // Cloudflare plugin disabled for frontend-only development
});
