import Card from "./card";

export default interface BoardList {
    id:string,
    name:string,
    cards:Card[],
    creation_time:number
}
