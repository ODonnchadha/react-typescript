import { Speaker } from '../types/speaker';

export default function useSpeakerSortAndFilter(
  speakerList: Speaker[],
  speakingSaturday: boolean,
  speakingSunday: boolean,
  searchText: string,
) {
  return speakerList
    ? speakerList
        .filter(
          ({ sat, sun }) =>
            (speakingSaturday && sat) || (speakingSunday && sun),
        )
        .filter(({ firstName, lastName }) => {
          return (
            searchText.length === 0 ||
            (firstName?.toLowerCase() + lastName?.toLowerCase()).includes(
              searchText.toLowerCase(),
            )
          );
        })
        .sort((a, b) => a.firstName.localeCompare(b.firstName))
    : [];
}
