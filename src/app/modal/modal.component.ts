import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    @Input() btn1;
    @Input() msg:string;
    @Input() forms:any;
    @Output() formEntry = new EventEmitter<any>(); 
    @Output() close = new EventEmitter<any>();
    @Output() buttondata = new EventEmitter<string>();
    
      data = [];
     

    
    constructor() {}

  ngOnInit() {
  }
   addNEwEntry(btndata)
  {  
    if(btndata == "yes")
    {
     this.formEntry.emit(this.data);
     this.buttondata.emit(btndata);  
     console.log(this.buttondata)

    }
      else if(btndata == "confirm")
    {
      this.buttondata.emit(btndata);
      console.log(this.buttondata)
    }
  }
  onCancel()
  {
    this.close.emit();
   
  }
  
}
