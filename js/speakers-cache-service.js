// app/lib/speakers-cache.ts
import NodeCache from "node-cache";
import { speakersList } from "@/app/data/speakers-data";
// Create a singleton cache instance that persists across requests
// This ensures the cache is only initialized once when the server starts
let cacheInstance = null;
function getCache() {
  if (!cacheInstance) {
    cacheInstance = new NodeCache({ stdTTL: 0 }); // 0 means no expiration
  }
  return cacheInstance;
}
export async function getSpeakersFromCache() {
  const cache = getCache();
  // Try to get data from cache
  let data = cache.get("speakersData");
  if (!data) {
    // If no data in cache, initialize with default data
    data = speakersList;
    cache.set("speakersData", data);
    console.log("Cache initialized with default speakers data");
  } else {
    console.log("Retrieved speakers data from cache");
  }
  return data;
}
export async function updateSpeakerInCache(updatedSpeaker) {
  const cache = getCache();
  // Get current speakers data from cache
  let speakers = cache.get("speakersData");
  if (!speakers) {
    // Initialize cache if empty
    speakers = speakersList;
  }
  // Find and update the speaker record
  const updatedSpeakers = speakers.map((speaker) =>
    speaker.id === updatedSpeaker.id ? updatedSpeaker : speaker,
  );
  // Update the cache with the new array
  cache.set("speakersData", updatedSpeakers);
  console.log(
    `Updated speaker on server: ` +
      `${updatedSpeaker.id} ${updatedSpeaker.firstName} ${updatedSpeaker.lastName}`,
  );
  return updatedSpeakers;
}
