import SpeakerMenu from "@/app/speakers/speakers-menu";
import SpeakersList from "@/app/speakers/speakers-list";
import { SpeakerMenuProvider } from "@/app/speakers/speaker-menu-context";
import { getSpeakersFromCache } from "@/speakers-cache-service";
import { SpeakersDataProvider } from "@/app/speakers/speakers-data-context";
import { Speaker, speakerSchema } from '../types/speaker';

async function loadSpeakersData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await getSpeakersFromCache() as Speaker[];
}

export default async function SpeakersPage() {
  const speakersData = await loadSpeakersData();

  // The parsed data return, if exists, is valid. Server.
  let speakerDataParsed;
  try {
    speakerDataParsed = speakerSchema.array().parse(speakersData);
  } catch (err: unknown) {
    throw new Error("Invalid data: " + (err instanceof Error ? err.message : ""));
  }

  return (
    <SpeakerMenuProvider>
      <SpeakerMenu />
      <SpeakersDataProvider initialData={speakerDataParsed}>
        <SpeakersList />
      </SpeakersDataProvider>
    </SpeakerMenuProvider>
  );
}
