import { ChatUser } from "../user-component/chat-user.model";

export class ChatMessage {

  id: number;
  channelId: number;
  user: string;
  message: string;
  date: Date;

  constructor(init?: Partial<ChatMessage>) {
    this.id = init?.id ?? 0;
    this.channelId = init?.channelId ?? 0;
    this.user = init?.user ?? '';
    this.message = init?.message ?? '';
    this.date = init?.date ?? new Date();
  }
}
