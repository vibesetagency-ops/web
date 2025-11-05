import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroScrollDemo() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-[var(--canvas)]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-[var(--text-primary)]">
              Transform Your Business with <br />
              <span className="text-4xl md:text-[6rem] leading-none bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                AI-Powered Automation
              </span>
            </h1>
          </>
        } className="text-[24px]"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwaHVtYW5vaWR8ZW58MXx8fHwxNzYxNTA4MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="VibeSet AI automation - Humanoid robot representing artificial intelligence"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}