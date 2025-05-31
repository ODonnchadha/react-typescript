"use client";
import { useReducer, useTransition } from "react";
import { speakerFavoriteToggleAction } from "@/app/speakers/speaker-favorite-toggle-action";
import { Speaker } from "../types/speaker";

type State = {
  speaker: Speaker,
  error: string | null
}

type Action = 
{ type: "TOGGLE_FAVORITE_OPTIMISTIC"; payload: boolean } | 
{ type: "TOGGLE_FAVORITE_REVERT"; payload: boolean } | 
{ type: "ERROR"; payload: string } |
{ type: "CLEAR_ERROR"; };

function speakerReducer(state : State, action : Action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE_OPTIMISTIC":
      return {
        ...state,
        error: null,
        speaker: { ...state.speaker, favorite: !action.payload },
      };
    case "TOGGLE_FAVORITE_REVERT":
      return {
        ...state,
        speaker: { ...state.speaker, favorite: action.payload },
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    // Not needed with TypeScript.
    default:
      return state;
  }
}

type SpeakerFavoriteToggleProps = {
  speakerRec : Speaker
}

export default function SpeakerFavoriteToggle({ speakerRec }: SpeakerFavoriteToggleProps) {
  const initialState = { speaker: speakerRec, error: null };
  const [state, dispatch] = useReducer(speakerReducer, initialState);
  const [isPending, startTransition] = useTransition();
  const { speaker, error } = state;

  async function handleToggleFavorite() {
    const oldFavorite = speaker.favorite;

    dispatch({ type: "CLEAR_ERROR" });
    dispatch({ type: "TOGGLE_FAVORITE_OPTIMISTIC", payload: oldFavorite });

    startTransition(async () => {
      try {
        await speakerFavoriteToggleAction({
          ...speaker,
          favorite: !oldFavorite,
        });
      } catch (err) {
        dispatch({ type: "TOGGLE_FAVORITE_REVERT", payload: oldFavorite });
        let errorMessage = "Error toggling favorite.";
        if (err instanceof Error) {
          errorMessage += ` ${err.message}`;
        }
        dispatch({ type: "ERROR", payload: errorMessage });
      }
    });
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", position: "relative" }}
    >
      <button
        className={speaker.favorite ? "heartredbutton" : "heartdarkbutton"}
        onClick={handleToggleFavorite}
        aria-label={
          speaker.favorite ? "Remove from favorites" : "Add to favorites"
        }
        disabled={isPending}
      />
      {isPending && (
        <span
          className="spinner-border spinner-border-sm favorite-toggle-spinner"
          role="status"
          aria-hidden="true"
          style={{ marginLeft: "0.4rem" }}
        />
      )}
      {/* Error area */}
      <div className="error-container">
        <span
          style={{
            color: "red",
            visibility: error ? "visible" : "hidden",
          }}
        >
          {state?.error ?? ""}
        </span>
      </div>
    </div>
  );
}
