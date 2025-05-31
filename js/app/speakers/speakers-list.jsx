"use client";
import React, { useContext, useRef } from "react";
import { SpeakersDataContext } from "@/app/speakers/speakers-data-context";
import { SpeakerMenuContext } from "@/app/speakers/speaker-menu-context";
import useSpeakerSortAndFilter from "@/app/speakers/use-speaker-sort-and-filter";
import SpeakerDetail from "@/app/speakers/speaker-detail";
import { useTheme } from "@/app/theme-context";

export default function SpeakersList() {
  const { speakerList } = useContext(SpeakersDataContext);
  const { darkTheme } = useTheme();
  const { speakingSaturday, speakingSunday, searchText } =
    useContext(SpeakerMenuContext);
  const speakerListFiltered = useSpeakerSortAndFilter(
    speakerList,
    speakingSaturday,
    speakingSunday,
    searchText,
  );

  // Create a ref map to store references for each speaker
  const speakerRefs = useRef({});

  // Function to handle speaker click and scroll
  const handleSpeakerClick = (speakerId) => {
    if (speakerRefs.current[speakerId]) {
      speakerRefs.current[speakerId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <div className="container">
        <div className="row justify-content-center">
          <div>
            {speakerListFiltered.map((speakerRec) => {
              return (
                <div
                  key={speakerRec.id}
                  className="mb-4"
                  ref={(el) => {
                    speakerRefs.current[speakerRec.id] = el;
                  }}
                  onClick={() => handleSpeakerClick(speakerRec.id)}
                >
                  <SpeakerDetail key={speakerRec.id} speakerRec={speakerRec} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
