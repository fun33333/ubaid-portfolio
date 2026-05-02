import { ToolsSlider } from './tools-slider'

export function ToolsSection() {
    const images = [
        "/tools/python.png",
        "/tools/django.png",
        "/tools/fastapi.png",
        "/tools/nextjs.png",
        "/tools/react.png",
        "/tools/nodejs.png",
        "/tools/postgresql.png",
        "/tools/redis.png",
        "/tools/docker.png",
        "/tools/langchain.png",
        "/tools/openai.png",
    ]

    return (
        <section className="bg-white py-8 md:py-2 border-b border-gray-100">
            <ToolsSlider images={images} />
        </section>
    )
}
