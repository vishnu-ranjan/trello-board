import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import BoardList from 'src/app/types/board-list';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styles: [
  ]
})
export class ListFormComponent implements OnInit, OnDestroy {
  @Input() formData!: BoardList ; //This variable will not be null. Hence using non-null assertion operator.
  viewData:any = {};
  constructor(public modal: NgbActiveModal) {
  
   }

  deleteList(id?: string|undefined) {
    if(this.viewData.isEdit){
      this.modal.dismiss(this.formData); //Delete popup
    }else{
      this.modal.dismiss('Cancel'); //Cancel button
    }
  }
  onSubmit() {
      if(this.viewData.isEdit){
        this.modal.dismiss('automaticallly saving as we are passing object reference..'); //Edit case
      }else{
        this.modal.close(this.formData);
      }
  }

  ngOnDestroy(): void {
    this.modal.close({});
  }

  ngOnInit(): void {
    this.viewData.isEdit = this.formData?true:false;
    this.formData = this.formData?this.formData:{id: Date.now() + '', name: '', cards:[], creation_time:Date.now()}; //Sample Object

  }

}
