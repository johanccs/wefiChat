export class ChatUser {

    id: number;
    name: string;

    constructor(init?: Partial<ChatUser>) {
        this.id = init?.id ?? 0;
        this.name = init?.name ?? '';
    }
}

