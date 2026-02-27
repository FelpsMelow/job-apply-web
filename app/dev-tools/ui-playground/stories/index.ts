import { PlaygroundStory } from "../types";

// Atoms
import AvatarStory from "./atoms/Avatar.story";
import ButtonStory from "./atoms/Button.story";
import CopyIdButtonStory from "./atoms/CopyIdButton.story";
import DividerStory from "./atoms/Divider.story";
import DividerWithTextStory from "./atoms/DividerWithText.story";
import GradientFooterBarStory from "./atoms/GradientFooterBar.story";
import InputStory from "./atoms/Input.story";
import OverlayStory from "./atoms/Overlay.story";
import RefreshIconStory from "./atoms/RefreshIcon.story";
import SelectStory from "./atoms/Select.story";
import SocialLoginButtonsStory from "./atoms/SocialLoginButtons.story";
import SocialOptionStory from "./atoms/SocialOption.story";
import TextStory from "./atoms/Text.story";

// Molecules
import BreadcrumbStory from "./molecules/Breadcrumb.story";
import LabelWithArrowStory from "./molecules/LabelWithArrow.story";
import ModalStory from "./molecules/Modal.story";
import ProgressBarStory from "./molecules/ProgressBar.story";
import StepStory from "./molecules/Step.story";
import TaskCardHeaderStory from "./molecules/TaskCardHeader.story";
import TaskObservationStory from "./molecules/TaskObservation.story";
import TaskStepsStory from "./molecules/TaskSteps.story";
import TermStory from "./molecules/Term.story";
import UserInfoStory from "./molecules/UserInfo.story";

// Organisms
import AlertsStory from "./organisms/Alerts.story";
import TaskCardStory from "./organisms/TaskCard.story";

const stories: PlaygroundStory[] = [
  // Atoms
  AvatarStory,
  ButtonStory,
  CopyIdButtonStory,
  DividerStory,
  DividerWithTextStory,
  GradientFooterBarStory,
  InputStory,
  OverlayStory,
  RefreshIconStory,
  SelectStory,
  SocialLoginButtonsStory,
  SocialOptionStory,
  TextStory,
  // Molecules
  BreadcrumbStory,
  LabelWithArrowStory,
  ModalStory,
  ProgressBarStory,
  StepStory,
  TaskCardHeaderStory,
  TaskObservationStory,
  TaskStepsStory,
  TermStory,
  UserInfoStory,
  // Organisms
  AlertsStory,
  TaskCardStory,
];

export default stories.sort((a, b) => a.title.localeCompare(b.title));
