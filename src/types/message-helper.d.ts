import { JsonSerializer } from "typescript-json-serializer";

import { Message } from "../models/message";

export interface MessageHelper {
  //parameters
  prefix: string;
  jsonSerializer: JsonSerializer;
  messages: Message[];
  //methods
  init(prefix?: string): void;
  createTitleInput(): HTMLInputElement;
  createJsonTextArea(): HTMLTextAreaElement;
  createUpdateAndSaveButton(): HTMLInputElement;
  createFillAndSendButton(): HTMLInputElement;
  createInfoDiv(): HTMLDivElement;
  createMessagesInfoString(messagesLeft: number): string;
  createMainDiv(
    titleInput: HTMLInputElement,
    jsonTextArea: HTMLTextAreaElement,
    updateAndSaveButton: HTMLInputElement,
    fillAndSendButton: HTMLInputElement,
    infoDiv: HTMLDivElement
  ): HTMLDivElement;
  confirmUpdatePopUp(additionalInfo?: string): boolean;
  deserializeJson(jsonString: string): Message[];
  serializeMessages(messages: Message[]): string;
  addFooter(): void;
}
