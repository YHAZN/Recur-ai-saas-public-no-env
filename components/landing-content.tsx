"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Tony",
        avatar: "T",
        title: "Software Engineer",
        description: "This is the best application I've ever used! Recur has revolutionized my development workflow, accelerated our project timelines, and improved overall productivity."
    },
    {
        name: "Emily",
        avatar: "E",
        title: "Customer Success Manager",
        description: "This application has transformed our customer support operations. This chatbot is able to engage customers in natural conversations, providing instant assistance and resolving queries efficiently. It's like having a virtual support team available 24/7!"
    },
    {
        name: "Alex",
        avatar: "A",
        title: "Code Hobbyist",
        description: "Recur has become my coding companion! Its Code Generation AI lets me generate code snippets effortlessly, making coding projects feel like a breeze. Now I can spend more time exploring new ideas and less time worrying about syntax errors."
    },
    {
        name: "Sarah",
        avatar: "S",
        title: "Creative Storyteller",
        description: "This app fuels my creative storytelling! Their Video Generation abilities helps me bring my ideas to life with captivating visuals and animations."
    },
    {
        name: "Michael",
        avatar: "M",
        title: "Music Enthusiast",
        description: "Recur is where I play with music. Using its Music Generation feature, I create tunes that fit my vibe perfectly. It's like having my own virtual band to jam with whenever I want!"
    },
    {
        name: "Luisa",
        avatar: "L",
        title: "Traveler",
        description: "Recur is my language-learning sidekick. Its Translation capabilities allows me to explore new cultures and languages with ease. Whether I'm traveling or just curious, Recur helps me break down language barriers and connect with people from all over the world."
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ld:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}