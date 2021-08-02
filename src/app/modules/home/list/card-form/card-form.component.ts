import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import BoardList from 'src/app/types/board-list';
import Card from 'src/app/types/card';

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styles: [
    ]
})
export class CardFormComponent implements OnInit {

    @Input() formData!: Card;
    @Input() list!: BoardList;
    viewData: any = {};
    constructor(public modal: NgbActiveModal) {

    }

    ngOnInit(): void {
        this.viewData = { isEdit: this.formData ? true : false, list: this.list };
        this.formData = this.formData ? {...this.formData} : { id: Date.now() + '', name: '', done: false, creation_time:Date.now() };
    }


    deleteCard(id?: string) {
        if (this.viewData.isEdit) {
            this.list.cards = this.list.cards.filter(function (card) {
                if (card.id === id) {
                    return false;
                } else { return true; }
            });
            this.modal.close(id); //Closing the popup after saving form
        } else {
            this.modal.dismiss('cancel'); //Cancel button
        }
    }

    onSubmit() {

        if (this.viewData.isEdit) {
            if(this.list.cards){
                this.list.cards = this.list.cards.slice(0);
                this.list.cards.forEach((card, index) => {
                    if(card.id == this.formData.id){
                        this.list.cards[index] = {...this.formData};
                    }
                });
            }
            this.modal.dismiss('automaticallly saving as we are passing object reference..'); //Edit case
        } else {
            this.formData.id = Date.now() + ''; //Converting to string as every other list id is a string
            if (!this.list.cards) {
                this.list.cards = [];
            }
            this.list.cards = [this.formData].concat(this.list.cards);
            this.modal.close(this.formData);
        }
    }
}
