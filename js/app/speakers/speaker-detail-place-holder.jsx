import React from "react";

export default function SpeakerDetailPlaceholder() {
  return (
    <div className="col-12 mt-5">
      <div className="card border-0">
        <div className="row g-0">
          <div className="col-4">
            {/* Placeholder for speaker image */}
            <div
              className="speaker-image bg-secondary opacity-25"
              style={{ width: "200px", height: "200px" }}
            ></div>
          </div>

          <div className="col-8 d-flex flex-column flex-nowrap">
            <div className="card-body">
              <div className="speaker-action d-flex">
                {/* Placeholder for the favorite button area */}
                <div className="favoriteToggleWrapper">
                  <div
                    className="placeholder-rectangle bg-secondary opacity-25"
                    style={{ width: "30px", height: "30px" }}
                  ></div>
                </div>
              </div>

              {/* Placeholder for speaker name */}
              <h4 className="card-title">
                <div
                  className="placeholder-rectangle bg-secondary opacity-25"
                  style={{ width: "70%", height: "24px", marginBottom: "8px" }}
                ></div>
              </h4>

              {/* Placeholder for speaker bio */}
              <p className="card-text">
                <div
                  className="placeholder-rectangle bg-secondary opacity-25"
                  style={{ width: "100%", height: "16px", marginBottom: "8px" }}
                ></div>
                <div
                  className="placeholder-rectangle bg-secondary opacity-25"
                  style={{ width: "90%", height: "16px", marginBottom: "8px" }}
                ></div>
                <div
                  className="placeholder-rectangle bg-secondary opacity-25"
                  style={{ width: "80%", height: "16px" }}
                ></div>
              </p>
            </div>

            <div className="card-footer text-muted d-flex flex-wrap justify-content-between align-items-center">
              {/* Placeholder for company */}
              <small>
                <div
                  className="placeholder-rectangle bg-secondary opacity-25"
                  style={{ width: "120px", height: "14px" }}
                ></div>
              </small>

              {/* Placeholder for Twitter handle */}
              <small>
                <div
                  className="placeholder-rectangle bg-secondary opacity-25"
                  style={{ width: "140px", height: "14px" }}
                ></div>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
