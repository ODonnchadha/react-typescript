import Image from "next/image";
import SpeakerFavoriteToggle from "@/app/speakers/speaker-favorite-toggle";
import { Speaker } from '../types/speaker';

type SpeakerDetailProps = {
  speakerRec: Speaker
};

export default function SpeakerDetail({ speakerRec }: SpeakerDetailProps) {
  return (
    <div className="col-xl-6 col-md-12">
      <div className="card border-0">
        <div className="row g-0">
          <div className="col-4">
            <Image
              src={speakerRec?.imageUrl}
              alt={`${speakerRec?.firstName} ${speakerRec?.lastName}`}
              width={200}
              height={200}
              className="speaker-image" // Add this class
            />
          </div>

          <div className="col-8 d-flex flex-column flex-nowrap">
            <div className="card-body">
              <div className="speaker-action d-flex">
                <div className="favoriteToggleWrapper">
                  <SpeakerFavoriteToggle speakerRec={speakerRec} />
                </div>
              </div>
              <h4 className="card-title">
                {speakerRec.firstName} {speakerRec.lastName}
              </h4>
              <p className="card-text">{speakerRec.userBioShort}</p>
            </div>

            <div className="card-footer text-muted d-flex flex-wrap justify-content-between align-items-center">
              {speakerRec?.company?.length > 0 ? (
                <small>
                  <strong>Company:</strong> {speakerRec.company}
                </small>
              ) : null}

              {speakerRec.twitterHandle.length > 0 ? (
                <small>
                  <strong>Twitter</strong>: {speakerRec.twitterHandle}
                </small>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
