import SpeakerDetailPlaceholder from "@/app/speakers/speaker-detail-place-holder";

export default function SpeakersPageFallback() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div>
          {[1, 2, 3].map((id) => {
            return <SpeakerDetailPlaceholder key={id} />;
          })}
        </div>
      </div>
    </div>
  );
}
