import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "fs";
import path from "path";

// Automate copying generated assets to bypass Windows sandbox command line execution limits
const srcDir = "C:\\Users\\joyde\\.gemini\\antigravity\\brain\\5b4c3501-5c0d-4331-b1a6-2904d275da8e";
const destDir = "d:\\2-Frontend\\ask joy\\amity-ask-joy\\src\\assets";

try {
  // Copy QR Code
  const qrSrc = path.join(srcDir, "media__1782313529088.png");
  const qrDest = "d:\\2-Frontend\\ask joy\\amity-ask-joy\\public\\whatsapp-qr.png";
  if (fs.existsSync(qrSrc)) {
    fs.copyFileSync(qrSrc, qrDest);
    console.log("[Copied QR] whatsapp-qr.png successfully");
  }

  if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir);
    files.forEach(file => {
      if (file.endsWith(".png") && (
        file.startsWith("admissions_sticker") ||
        file.startsWith("placements_sticker") ||
        file.startsWith("hostels_sticker") ||
        file.startsWith("academics_sticker") ||
        file.startsWith("internships_sticker") ||
        file.startsWith("scholarships_sticker") ||
        file.startsWith("campus_life_sticker") ||
        file.startsWith("events_fests_sticker") ||
        file.startsWith("student_clubs_sticker")
      )) {
        const baseName = file.split("_sticker")[0] + "_sticker.png";
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(destDir, baseName);
        fs.copyFileSync(srcPath, destPath);
        console.log(`[Copied Asset] ${file} -> ${baseName}`);
      }
    });
  }
} catch (error) {
  console.error("Failed to copy stickers:", error);
}

export default defineConfig({
  nitro: {
    preset: "vercel",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

