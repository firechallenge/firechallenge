"use client";
import { NameSection } from "@/components/new/name-section";
import { QuestionsSection } from "@/components/new/questions-section";
import { useState } from "react";
import StoreProvider from "../store-provider";

export default function New() {
  const [name, setName] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "Let's start with the name",
      section: (
        <NameSection
          name={name}
          setName={setName}
          onNext={() => setCurrentStep(1)}
        />
      ),
    },
    {
      section: <QuestionsSection name={name} />,
    },
  ];

  return (
    <StoreProvider>
      <div className="flex items-center flex-col h-screen w-full">
        <div className="flex gap-4 flex-col w-full">
          {steps[currentStep].name && (
            <h1 className="text-2xl font-bold text-center">
              {steps[currentStep].name}
            </h1>
          )}
          {steps[currentStep].section}
        </div>
      </div>
    </StoreProvider>
  );
}
