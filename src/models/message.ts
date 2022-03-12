import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
export class Message {
  @JsonProperty() recipient: string;
  @JsonProperty() content: string;

  constructor(recipient: string, content: string) {
    this.recipient = recipient;
    this.content = content;
  }
}
