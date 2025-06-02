"use server";
import { updateSpeakerInCache } from "@/speakers-cache-service";
import { Speaker, speakerSchema } from '../types/speaker';

// Endpoint via `heart` icon click.
export async function speakerFavoriteToggleAction(speakerRec : Speaker) {
  
  let validatedSpeaker;
  try {
    validatedSpeaker = speakerSchema.parse(speakerRec);
  } catch (err: unknown) {
    throw new Error("Invalid data: " + (err instanceof Error ? err.message : ""));
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  await updateSpeakerInCache(validatedSpeaker);
}
