import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { Brain, Sparkles, Laptop, Globe, Radar } from "lucide-react";

export default function ProjectsModal() {
  return (
    <div className="w-full max-w-4xl mx-auto px-8">
      <h2 className="text-2xl font-bold text-center mb-8">Innovation Timeline</h2>
      
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={<Brain className="h-4 w-4" />} />
          <Timeline.Content>
            <Timeline.Time>2024</Timeline.Time>
            <Timeline.Title>Vibrasonix Launch</Timeline.Title>
            <Timeline.Body>
              Pioneered vibroacoustic therapy integration with modern technology, transforming beds into immersive sound healing spaces.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={<Sparkles className="h-4 w-4" />} />
          <Timeline.Content>
            <Timeline.Time>2023</Timeline.Time>
            <Timeline.Title>Hybrid-Quantum AI Achievement</Timeline.Title>
            <Timeline.Body>
              Finalist in $500K Pandemic Response Challenge with world's first hybrid-quantum computer AI system.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={<Laptop className="h-4 w-4" />} />
          <Timeline.Content>
            <Timeline.Time>2023</Timeline.Time>
            <Timeline.Title>Senseplay Production</Timeline.Title>
            <Timeline.Body>
              Launched revolutionary biosensor wristband with Unity/Unreal SDK for affective gaming integration.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={<Globe className="h-4 w-4" />} />
          <Timeline.Content>
            <Timeline.Time>2022</Timeline.Time>
            <Timeline.Title>TokenofME Platform</Timeline.Title>
            <Timeline.Body>
              Developed patent-pending win-win token rewards system for personal improvement tracking.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point icon={<Radar className="h-4 w-4" />} />
          <Timeline.Content>
            <Timeline.Time>2022</Timeline.Time>
            <Timeline.Title>Sensistan Installation</Timeline.Title>
            <Timeline.Body>
              Created groundbreaking biofeedback interactive experience at India's first digital art museum.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>

      <div className="text-center mt-8">
        <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all">
          Explore All Projects
        </button>
      </div>
    </div>
  );
}