"use client";

import { useState } from "react";
import Loader from "@/components/Loader";

import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import EventDetails from "@/components/EventDetails";
import Story from "@/components/Story";
import People from "@/components/People";
import Thankyou from "@/components/Thankyou";

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && <Loader onComplete={() => setLoadingDone(true)} />}

      {loadingDone && (
        <>
          <Hero />
          <Invitation />
          <EventDetails />
          <Story />
          <People />
          <Thankyou />
        </>
      )}
    </>
  );
}