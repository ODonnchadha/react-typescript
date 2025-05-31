"use client";
import React, { createContext, useState } from "react";

export const SpeakersDataContext = createContext({
  speakerList: [],
  updateSpeaker: async (updatedSpeaker) => updatedSpeaker,
});
export function SpeakersDataProvider({ children, initialData }) {
  const [speakerList, setSpeakerList] = useState(initialData);
  async function updateSpeaker(updatedSpeaker) {
    const index = speakerList.findIndex((s) => s.id === updatedSpeaker.id);
    if (index !== -1) {
      const updatedList = [...speakerList];
      updatedList[index] = updatedSpeaker;
      setSpeakerList(updatedList);
    }
  }
  return (
    <SpeakersDataContext.Provider value={{ speakerList, updateSpeaker }}>
      {children}
    </SpeakersDataContext.Provider>
  );
}
