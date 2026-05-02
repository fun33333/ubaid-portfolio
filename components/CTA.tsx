export default function CTA() {
    return (
        <section className="py-32 bg-brand relative group overflow-hidden">
            {/* <div className="min-h-screen w-full relative"> */}
            {/* Violet Abyss */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 100%)",
                }}
            />
            {/* Your Content/Components */}
            {/* </div> */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
            <div className="container mx-auto px-6 max-w-5xl text-center space-y-12 relative z-10">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.8] italic">
                    Let's Talk About <br /> Your <span className="text-[#A300D9] opacity-40">Growth Goals</span>
                </h2>
                <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto uppercase tracking-widest">
                    If you're looking for a clear, structured approach to marketing, I'd be happy to discuss how I can help.
                </p>
                <button className="bg-white/90 backdrop-blur-md text-[#A300D9] px-12 py-5 rounded-full font-bold text-xl uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20">
                    Schedule a Call
                </button>
            </div>
        </section>
    )
}