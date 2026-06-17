import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import { ClientOnly } from "@/components/ClientOnly";

function IndexPage() {
  return (
    <ClientOnly
      fallback={
        <div
          style={{
            minHeight: "100vh",
            background: "#0a0a0f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#888",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Loading…
        </div>
      }
    >
      {() => <Portfolio />}
    </ClientOnly>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — AI, IoT & Real-time Systems Engineer" },
      { name: "description", content: "Interactive portfolio showcasing AI/ML, IoT, and real-time architecture projects with immersive 3D and motion design." },
      { property: "og:title", content: "Portfolio — AI, IoT & Real-time Systems Engineer" },
      { property: "og:description", content: "Selected work across computer vision, predictive modeling, and decentralized identity systems." },
    ],
  }),
  component: IndexPage,
});
