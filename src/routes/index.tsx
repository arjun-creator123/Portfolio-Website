import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — AI, IoT & Real-time Systems Engineer" },
      { name: "description", content: "Interactive portfolio showcasing AI/ML, IoT, and real-time architecture projects with immersive 3D and motion design." },
      { property: "og:title", content: "Portfolio — AI, IoT & Real-time Systems Engineer" },
      { property: "og:description", content: "Selected work across computer vision, predictive modeling, and decentralized identity systems." },
    ],
  }),
  component: Portfolio,
});
