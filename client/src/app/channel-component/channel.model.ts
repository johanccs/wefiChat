export class ChannelModel {
    id: number;
    name: string;

    constructor(init?: Partial<ChannelModel>){
        this.id = init?.id ?? 0;
        this.name = init?.name ?? '';
    }
}
