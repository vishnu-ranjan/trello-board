import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { List } from 'lodash';
import BoardList from 'src/app/types/board-list';
import Card from 'src/app/types/card';
import { CardFormComponent } from '../card-form/card-form.component';
import { ListFormComponent } from '../list-form/list-form.component';

@Component({
    selector: 'app-list-items',
    templateUrl: './list-items.component.html',
    styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {

    constructor(private modalService: NgbModal) {

    }

    boardsList: BoardList[] = [
        {
            id: "1000",
            name: "List 1",
            creation_time:Date.now(),
            cards: [{
                id: "1000-1",
                name: "Card 1",
                description: "Description of Card 1 in List 1",
                done: true,
                creation_time:Date.now()
            },
            {
                id: "1000-2",
                name: "Card 2",
                description: "Description of Card 2 in List 1",
                done: false,
                creation_time:Date.now()
            },
            {
                id: "1000-3",
                name: "Card 3",
                description: "Description of Card 3 in List 1",
                done: true,
                creation_time:Date.now()
            }
            ]
        },
        {
            id: '1001',
            name: 'List 2',
            creation_time:Date.now(),
            cards: [
                {
                    id: "1001-1",
                    name: "Card 1",
                    description: "Description of Card 1 in List 2",
                    done: false,
                    creation_time:Date.now()
                },
                {
                    id: "1001-2",
                    name: "Card 2",
                    description: "Description of Card 2 in List 2",
                    creation_time:Date.now(),
                    done: true
                }
            ]
        },
        {
            id: '1002',
            name: 'List 3',
            creation_time:Date.now(),
            cards: [
                {
                    id: "1002-1",
                    name: "Card 1",
                    description: "Description of Card 1 in List 3",
                    creation_time:Date.now(),
                    done: true
                },
                {
                    id: "1002-2",
                    name: "Card 2",
                    description: "Description of Card 2 in List 3",
                    creation_time:Date.now(),
                    done: false
                }
            ]
        }
    ];

    identifyElem(index:any, item:any){
        return item.id;
    }

    onDragStart(event:any, card:Card, boardList:BoardList){
        event.dataTransfer.setData("text/plain", JSON.stringify({card: card, boardList: boardList}));
        console.log("onDragStart",event);
    }
    onDragOver(event:any){
        event.preventDefault();
        event.stopPropagation();
    }
    onDrop(event:any, newBoardList:BoardList){
        event.preventDefault();
        let data = JSON.parse(event.dataTransfer.getData("text"));
      
        let oldBoardList = data.boardList;
        if(oldBoardList.id !== newBoardList.id){
            oldBoardList.cards = oldBoardList.cards.filter((card:any)=>{
                if(data.card.id == card.id){
                    return false;
                }else{
                    return true;
                }
            });
            newBoardList.cards = [data.card].concat(newBoardList.cards);
            console.log("drop Completed");  
        }
             
    }
    openListForm(list?: BoardList) {
        const modalRef = this.modalService.open(ListFormComponent);
        modalRef.componentInstance.formData = list;
        modalRef.result.then(value => {
            this.boardsList = [value].concat(this.boardsList);
            //this.boardsList.unshift(value); //Only works in impure case of orderBypipe
        }, error => {
            if('id' in error){
                this.boardsList = this.boardsList.filter(listEle => {
                    if(listEle.id == error.id){
                        return false;
                    }else{
                        return true;
                    }
                });
            }
        });
    }

    openCardForm(list: BoardList, card?: Card) {
        const modalRef = this.modalService.open(CardFormComponent);
        modalRef.componentInstance.list = list;
        modalRef.componentInstance.formData = card;
        modalRef.result.then(value => {
        }, error => {
        });
    }
}
