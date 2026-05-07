"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

interface ToolsSliderProps {
    images: string[]
}

export function ToolsSlider({ images }: ToolsSliderProps) {
    const plugin = React.useMemo(
        () => Autoplay({ delay: 2000, stopOnInteraction: false }),
        []
    )

    return (
        <div
            className="relative overflow-hidden w-full max-w-7xl mx-auto px-4 md:px-2"
            style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
        >

            <Carousel
                plugins={[plugin]}
                className="w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent className="-ml-8 md:-ml-16 items-center">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="pl-8 md:pl-16 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 select-none">
                            {/* Fixed size container for uniform logos without grayscale */}
                            <div className="relative h-14 sm:h-20 md:h-24 w-24 sm:w-36 md:w-44 flex items-center justify-center mx-auto">
                                <Image
                                    src={image}
                                    alt={`Tool logo ${index + 1}`}
                                    width={200}
                                    height={200}
                                    className="object-contain max-h-12 sm:max-h-16 md:max-h-20 max-w-full"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
