
export default interface Card {
    id: string | undefined;
    name:string;
    description?:string; //Optional property
    creation_time:number,
    done: boolean;
}