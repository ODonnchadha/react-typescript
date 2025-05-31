"use server";
import { updateSpeakerInCache } from "@/speakers-cache-service";

export async function speakerFavoriteToggleAction(speakerRec) {
  //throw new Error("Simulated error");
  const updatedSpeaker = { ...speakerRec, favorite: !speakerRec.favorite };
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await updateSpeakerInCache(updatedSpeaker);
}
