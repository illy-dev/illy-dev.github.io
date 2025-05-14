"use client";

import React, { useRef, useEffect } from "react";
import lerp from "../utils/helpfunctions";

export default function Gallery() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<NodeListOf<HTMLDivElement> | null>(null);

    const ease = 0.1;

    useEffect(() => {
        if (typeof window !== "undefined") {
            cardsRef.current = document.querySelectorAll(".card");
        }
    }, []);

    const getScaleFactor = (position: number, viewportWidth: number) => {
        const screenCenter = viewportWidth / 2;
        const maxDistance = screenCenter;
    
        const distance = Math.abs(position - screenCenter);
        const normalized = 1 - distance / maxDistance;
    
        const scale = lerp(0.9, 1.2, Math.max(0, Math.min(1, normalized)));
        return scale;
    };

    useEffect(() => {
        if (typeof window === "undefined") return;
        let currentX = 0;
        let targetX = 0;
        cardsRef.current = document.querySelectorAll(".card");

        const updateScales = () => {
            const viewportWidth: number = window.innerWidth;
            if (cardsRef.current) {
                cardsRef.current.forEach(element => {
                    const cardRect = element.getBoundingClientRect();
                    const cardCenter = cardRect.left + cardRect.width / 2;
                    const scaleFactor = getScaleFactor(cardCenter, viewportWidth);
                    const imgScaleFactor = scaleFactor * 1.1;
                    const img = element.querySelector("img");
                    element.style.transform = `scale(${scaleFactor})`;
                    if (img) {
                        img.style.transform = `scale(${imgScaleFactor})`;
                    }
                });
            }
        };

        const update = () => {
            currentX = lerp(currentX, targetX, ease);
            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(${currentX}vw)`;
            }
            updateScales();
            requestAnimationFrame(update);
        };

        const handleScroll = () => {
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollProgress = window.scrollY / maxScroll;
            targetX = -scrollProgress * 400; // vw units
        };

        window.addEventListener("scroll", handleScroll);
        update(); // start animation loop

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className="box-border w-[100vw] h-[1000vh] font-[Switzer-Medium] text-white z-40">
            <div
                ref={sliderRef}
                className="fixed top-0 left-0 w-[500%] h-[100vh] flex justify-around items-center slider"
            >
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="card" style={{ transformOrigin: 'center center' }}>
                        <img
                            className="imageGallery"
                            src={`/image_gallery/photo${i + 1}.jpg`}
                            alt={`photo${i + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
