import { JsonSerializer, throwError } from "typescript-json-serializer";
import { Message } from "./models/message";

import { MessageHelper } from "./types/message-helper";

const MessageHelper: MessageHelper = {
  prefix: "message_helper",
  jsonSerializer: new JsonSerializer({
    errorCallback: throwError,
    nullishPolicy: {
      undefined: "remove",
      null: "remove",
    },
  }),
  messages: [],
  init: function (prefix) {
    if (prefix !== undefined) {
      this.prefix = prefix;
    }

    const twSendMessageForm = document.querySelector("form[id='form']");
    if (!twSendMessageForm) {
      return;
    }

    const messageTitleLocalStorageId = `${this.prefix}_message_title`;
    const messagesJsonLocalStorageId = `${this.prefix}_messages_json`;

    const titleInput = this.createTitleInput();
    const jsonTextArea = this.createJsonTextArea();
    const updateAndSaveButton = this.createUpdateAndSaveButton();
    const fillAndSendButton = this.createFillAndSendButton();
    const infoDiv = this.createInfoDiv();

    const mainDiv = this.createMainDiv(
      titleInput,
      jsonTextArea,
      updateAndSaveButton,
      fillAndSendButton,
      infoDiv
    );

    twSendMessageForm.prepend(mainDiv);

    const localStorageTitle = localStorage.getItem(messageTitleLocalStorageId);
    if (localStorageTitle) {
      titleInput.value = localStorageTitle;
    }

    const localStorageMessagesJson = localStorage.getItem(
      messagesJsonLocalStorageId
    );
    if (localStorageMessagesJson) {
      jsonTextArea.value = localStorageMessagesJson;
      this.messages = this.deserializeJson(localStorageMessagesJson);
      infoDiv.textContent = this.createMessagesInfoString(this.messages.length);
    }

    updateAndSaveButton.addEventListener("click", () => {
      let info = "";

      const titleInputValue = titleInput.value;
      const jsonTextAreaValue = jsonTextArea.value;

      if (titleInputValue && !jsonTextAreaValue) {
        info =
          "As the only the title was provided, messages saved won't be replaced.";
      } else if (!titleInputValue && jsonTextAreaValue) {
        info =
          "As the only messages were provided, the title saved won't be replaced.";
      } else if (!titleInputValue && !jsonTextAreaValue) {
        window.alert("You have to fill in at least one field.");
        return;
      }

      if (!this.confirmUpdatePopUp(info)) {
        return;
      }

      if (titleInputValue) {
        localStorage.setItem(messageTitleLocalStorageId, titleInputValue);
      }
      if (jsonTextAreaValue) {
        this.messages = this.deserializeJson(jsonTextAreaValue);
        if (this.messages.length) {
          localStorage.setItem(messagesJsonLocalStorageId, jsonTextAreaValue);
          infoDiv.textContent = this.createMessagesInfoString(
            this.messages.length
          );
        }
      }
    });

    const twRecipientInput = twSendMessageForm.querySelector("input[id='to']");
    const twTitleInput = twSendMessageForm.querySelector(
      "input[type='text'][name='subject']"
    );
    const twMessageTextArea = twSendMessageForm.querySelector(
      "textarea[id='message']"
    );
    const twSendMessageButton = twSendMessageForm.querySelector(
      "p > input[type='submit'][name='send']"
    );

    if (
      !twRecipientInput ||
      !twTitleInput ||
      !twMessageTextArea ||
      !twSendMessageButton
    ) {
      return;
    }

    fillAndSendButton.addEventListener("click", () => {
      if (!this.messages.length) {
        window.alert("There are no messages to send.");
        return;
      }

      const localStorageTitle = localStorage.getItem(
        messageTitleLocalStorageId
      );
      if (!localStorageTitle) {
        window.alert("There is no message title saved.");
        return;
      }

      const lastMessage = this.messages.pop();
      if (!lastMessage) {
        return;
      }

      if (twRecipientInput instanceof HTMLInputElement) {
        twRecipientInput.value = lastMessage.recipient;
      }
      if (twTitleInput instanceof HTMLInputElement) {
        twTitleInput.value = localStorageTitle;
      }
      if (twMessageTextArea instanceof HTMLTextAreaElement) {
        twMessageTextArea.value = lastMessage.content;
      }

      if (this.messages.length) {
        const jsonString = this.serializeMessages(this.messages);
        localStorage.setItem(messagesJsonLocalStorageId, jsonString);
      } else {
        localStorage.removeItem(messagesJsonLocalStorageId);
      }

      if (twSendMessageButton instanceof HTMLElement) {
        twSendMessageButton.click();
      }
    });
  },
  createTitleInput: function () {
    const titleInputId = `${this.prefix}_title`;
    const titleInput = document.createElement("input");
    titleInput.id = titleInputId;
    titleInput.type = "text";
    titleInput.minLength = 1;
    titleInput.maxLength = 32;
    return titleInput;
  },
  createJsonTextArea: function () {
    const jsonTextAreaId = `${this.prefix}_json`;
    const jsonTextArea = document.createElement("textarea");
    jsonTextArea.id = jsonTextAreaId;
    jsonTextArea.cols = 64;
    jsonTextArea.rows = 8;
    return jsonTextArea;
  },
  createUpdateAndSaveButton: function () {
    const updateAndSaveButtonId = `${this.prefix}_confirm`;
    const updateAndSaveButton = document.createElement("input");
    updateAndSaveButton.id = updateAndSaveButtonId;
    updateAndSaveButton.type = "button";
    updateAndSaveButton.value = "Update and save";
    return updateAndSaveButton;
  },
  createFillAndSendButton: function () {
    const fillAndSendButtonId = `${this.prefix}_confirm`;
    const fillAndSendButton = document.createElement("input");
    fillAndSendButton.id = fillAndSendButtonId;
    fillAndSendButton.type = "button";
    fillAndSendButton.value = "Fill and send";
    return fillAndSendButton;
  },
  createInfoDiv: function () {
    const infoDivId = `${this.prefix}_info`;
    const infoDiv = document.createElement("div");
    infoDiv.id = infoDivId;
    return infoDiv;
  },
  createMessagesInfoString: function (messagesLeft) {
    return `Messages left to send: ${messagesLeft}`;
  },
  createMainDiv: function (
    titleInput,
    jsonTextArea,
    updateAndSaveButton,
    fillAndSendButton,
    infoDiv
  ) {
    const mainDiv = document.createElement("div");
    mainDiv.id = `${this.prefix}_main`;

    const titleInputId = titleInput.id;
    if (titleInputId) {
      const titleLabel = document.createElement("label");
      titleLabel.htmlFor = titleInputId;
      titleLabel.textContent = "Title: ";
      mainDiv.append(titleLabel);
    }
    mainDiv.append(titleInput);
    mainDiv.append(document.createElement("br"));

    const jsonTextAreaId = jsonTextArea.id;
    if (jsonTextAreaId) {
      const jsonLabel = document.createElement("label");
      jsonLabel.htmlFor = jsonTextAreaId;
      jsonLabel.textContent = "Messages (JSON): ";
      mainDiv.append(jsonLabel);
      mainDiv.append(document.createElement("br"));
    }
    mainDiv.append(jsonTextArea);
    mainDiv.append(document.createElement("br"));

    mainDiv.append(updateAndSaveButton);
    mainDiv.append(document.createElement("br"));

    mainDiv.append(fillAndSendButton);
    mainDiv.append(document.createElement("br"));

    mainDiv.append(infoDiv);

    return mainDiv;
  },
  confirmUpdatePopUp: function (additionalInfo) {
    let popUpText =
      "Do you want to override the current settings and remaining messages?";
    if (additionalInfo) {
      popUpText = `${popUpText}\n${additionalInfo}`;
    }
    return window.confirm(popUpText);
  },
  deserializeJson: function (jsonString) {
    try {
      const deserialized = this.jsonSerializer.deserializeObjectArray(
        jsonString,
        Message
      ) as Message[];
      return deserialized;
    } catch (error) {
      console.error(error);
      window.alert("Invalid JSON string.");
    }
    return [];
  },
  serializeMessages: function (messages) {
    const objects = this.jsonSerializer.serializeObjectArray(messages);
    const jsonString = JSON.stringify(objects ?? []);
    return jsonString;
  },
  addFooter: function () {
    const serverInfoParagraph = document.querySelector(
      "p[class='server_info']"
    );

    const footerSpan = document.createElement("span");
    footerSpan.style.cssFloat = "left";

    const footerName = document.createElement("b");
    footerName.textContent = "tw-message-helper";
    const footerUrl = document.createElement("a");
    footerUrl.textContent = "szelbi.ovh";
    footerUrl.href = "https://szelbi.ovh/";
    footerUrl.target = "_blank";

    footerSpan.innerHTML = `${footerName.outerHTML} by szelbi (${footerUrl.outerHTML})`;

    serverInfoParagraph?.prepend(footerSpan);
  },
};

const url = window.location.href;
const urlRegex = /^.*:\/\/.*\/game\.php.*screen=mail.*mode=new.*$/;

if (urlRegex.test(url)) {
  MessageHelper.init();
  MessageHelper.addFooter();
}
