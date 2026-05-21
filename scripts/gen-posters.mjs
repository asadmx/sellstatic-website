import { existsSync } from "node:fs";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = dirname(scriptDir);
const adsDir = join(projectRoot, "public", "ads");
const postersDir = join(projectRoot, "public", "screenshots", "generated");

const videos = [
  {
    input: "apple.mp4",
    output: "apple.jpg",
  },
  {
    input: "sellstatic.mp4",
    output: "sellstatic.jpg",
  },
  {
    input: "ikea.mp4",
    output: "ikea.jpg",
  },
  {
    input: "cadillac.mp4",
    output: "cadillac.jpg",
  },
  {
    input: "Figma.mp4",
    output: "figma.jpg",
  },
  {
    input: "Mercedes-Benz Canada.mp4",
    output: "mercedes-benz-canada.jpg",
  },
];

async function resolveFfmpegPath() {
  if (process.env.FFMPEG_PATH && existsSync(process.env.FFMPEG_PATH)) {
    return process.env.FFMPEG_PATH;
  }

  const whereResult = spawnSync("where.exe", ["ffmpeg"], { encoding: "utf8" });
  if (whereResult.status === 0) {
    const foundPath = whereResult.stdout.split(/\r?\n/).find((line) => line.trim().length > 0);
    if (foundPath && existsSync(foundPath.trim())) {
      return foundPath.trim();
    }
  }

  const localAppData = process.env.LOCALAPPDATA;
  if (localAppData) {
    const packagesDir = join(localAppData, "Microsoft", "WinGet", "Packages");
    if (existsSync(packagesDir)) {
      const packageDirs = await readdir(packagesDir, { withFileTypes: true });
      for (const dirent of packageDirs) {
        if (!dirent.isDirectory() || !dirent.name.startsWith("Gyan.FFmpeg")) {
          continue;
        }

        const candidate = join(packagesDir, dirent.name, "ffmpeg-8.1.1-full_build", "bin", "ffmpeg.exe");
        if (existsSync(candidate)) {
          return candidate;
        }

        const altCandidate = join(packagesDir, dirent.name, "bin", "ffmpeg.exe");
        if (existsSync(altCandidate)) {
          return altCandidate;
        }
      }
    }
  }

  return null;
}

async function main() {
  await mkdir(postersDir, { recursive: true });

  const ffmpegPath = await resolveFfmpegPath();
  if (!ffmpegPath) {
    console.error(
      "Could not find ffmpeg. Set FFMPEG_PATH or reopen your shell after installing ffmpeg."
    );
    process.exit(1);
  }

  const failures = [];

  for (const video of videos) {
    const inputPath = join(adsDir, video.input);
    const outputPath = join(postersDir, video.output);

    if (!existsSync(inputPath)) {
      failures.push(`Missing source video: ${video.input}`);
      continue;
    }

    const result = spawnSync(
      ffmpegPath,
      [
        "-y",
        "-ss",
        "00:00:01.000",
        "-i",
        inputPath,
        "-frames:v",
        "1",
        "-update",
        "1",
        "-vf",
        "scale=1280:-2:force_original_aspect_ratio=decrease",
        "-q:v",
        "2",
        outputPath,
      ],
      { stdio: "inherit", shell: false }
    );

    if (result.status !== 0) {
      failures.push(`Failed to generate poster for: ${video.input}`);
    }
  }

  if (failures.length > 0) {
    console.error("Poster generation finished with issues:\n" + failures.join("\n"));
    process.exit(1);
  }

  const manifestPath = join(postersDir, "manifest.json");
  await writeFile(
    manifestPath,
    JSON.stringify(
      videos.map((video) => ({
        video: video.input,
        poster: video.output,
      })),
      null,
      2
    ) + "\n"
  );

  console.log(`Generated ${videos.length} posters in ${postersDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});