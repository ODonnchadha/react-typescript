"use client";
import React, { useContext, useRef } from "react";
import { SpeakersDataContext } from "@/app/speakers/speakers-data-context";
import { SpeakerMenuContext } from "@/app/speakers/speaker-menu-context";
import useSpeakerSortAndFilter from "@/app/speakers/use-speaker-sort-and-filter";
import SpeakerDetail from "@/app/speakers/speaker-detail";
import { useTheme } from "@/app/theme-context";
import { Speaker, speakerSchema } from '../types/speaker';

export default function SpeakersList() {
  const { speakerList } = useContext(SpeakersDataContext) as { speakerList: Speaker[] };
  const { darkTheme } = useTheme();
  const { speakingSaturday, speakingSunday, searchText } =
    useContext(SpeakerMenuContext);

  // The parsed data return, if exists, is valid. Client.
  let speakerListParsed;
  try {
    speakerListParsed = speakerSchema.array().parse(speakerList);
  } catch (err: unknown) {
    throw new Error("Invalid data: " + (err instanceof Error ? err.message : ""));
  }

  const speakerListFiltered = useSpeakerSortAndFilter(
    speakerListParsed,
    speakingSaturday,
    speakingSunday,
    searchText,
  );

  // An object named speakerRef that will include one key=value pair for each rendered row.
  // Key is the speakerId. And the value is the DOM element that contains the *full* speaker row rendering.
  type SpeakerRefsType = Record<number, HTMLDivElement | null>;

  // Create a ref map to store references for each speaker.
  const speakerRefs = useRef<SpeakerRefsType>({});

  // Function to handle speaker click and scroll
  const handleSpeakerClick = (speakerId : number) => {
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
            {speakerListFiltered.map((speakerRec : Speaker) => {
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
