import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { ScanSearch, Brain, Gamepad2, Binary, Radar, Workflow } from "lucide-react";

export default function ServicesModal() {
  return (
    <div className="w-full max-w-5xl mx-auto px-8">
      <h2 className="text-2xl font-bold text-center mb-8">Bridging Consciousness & Technology</h2>
      
      <BentoGrid className="mx-auto">
        {/* Large Feature Item */}
        <BentoGridItem
          title="AI & Quantum Solutions"
          description="Merging consciousness with quantum computing to create next-generation systems. Pioneered in Psychon's quantum randomness mining."
          header={<div className="flex w-full h-full bg-gradient-to-br from-violet-500 to-purple-500">
            <Binary className="h-12 w-12 text-white m-auto" />
          </div>}
          className="md:col-span-2"
        />
        
        {/* Bio-Responsive VR */}
        <BentoGridItem
          title="Immersive Realities"
          description="Bio-responsive VR/AR environments at Sensistan, India's first interactive digital art museum."
          header={<div className="flex w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500">
            <Radar className="h-12 w-12 text-white m-auto" />
          </div>}
        />
        
        {/* Biofeedback */}
        <BentoGridItem
          title="Biofeedback Systems"
          description="Senseplay: Revolutionary gaming through biosensor integration and affective computing."
          header={<div className="flex w-full h-full bg-gradient-to-br from-green-500 to-emerald-500">
            <Gamepad2 className="h-12 w-12 text-white m-auto" />
          </div>}
        />

        {/* Wellness Tech */}
        <BentoGridItem
          title="Digital Wellness"
          description="Vibrasonix: Sound-based healing and rejuvenation through advanced vibroacoustic technology."
          header={<div className="flex w-full h-full bg-gradient-to-br from-orange-500 to-yellow-500">
            <Brain className="h-12 w-12 text-white m-auto" />
          </div>}
        />

        {/* Web3 Solutions */}
        <BentoGridItem
          title="Web3 Innovation"
          description="TokenofME: Patent-pending win-win token rewards system integrating consciousness principles."
          header={<div className="flex w-full h-full bg-gradient-to-br from-pink-500 to-rose-500">
            <Workflow className="h-12 w-12 text-white m-auto" />
          </div>}
        />

        {/* Custom Development */}
        <BentoGridItem
          title="Custom Solutions"
          description="HeyLegal: AI legal assistant merging consciousness principles with practical utility."
          header={<div className="flex w-full h-full bg-gradient-to-br from-teal-500 to-emerald-500">
            <ScanSearch className="h-12 w-12 text-white m-auto" />
          </div>}
        />
      </BentoGrid>

      <div className="text-center mt-8">
        <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all">
          Schedule Discovery Call
        </button>
      </div>
    </div>
  );
}