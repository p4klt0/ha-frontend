import { fireEvent } from "../../../common/dom/fire_event";
import type {
  AssistPipeline,
  AssistPipelineMutableParams,
} from "../../../data/assist_pipeline";

export interface VoiceAssistantPipelineDetailsDialogParams {
  cloudActiveSubscription?: boolean;
  pipeline?: AssistPipeline;
  hideWakeWord?: boolean;
  updatePipeline: (updates: AssistPipelineMutableParams) => Promise<unknown>;
  createPipeline?: (values: AssistPipelineMutableParams) => Promise<unknown>;
}

export const loadVoiceAssistantPipelineDetailDialog = () =>
  import("./dialog-voice-assistant-pipeline-detail");

export const showVoiceAssistantPipelineDetailDialog = (
  element: HTMLElement,
  dialogParams: VoiceAssistantPipelineDetailsDialogParams
) => {
  fireEvent(element, "show-dialog", {
    dialogTag: "dialog-voice-assistant-pipeline-detail",
    dialogImport: loadVoiceAssistantPipelineDetailDialog,
    dialogParams,
  });
};
