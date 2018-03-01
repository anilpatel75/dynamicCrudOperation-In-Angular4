import { Component, OnInit, Input,OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit,OnChanges {
  @Input() nextArray ="nextArray";
  @Input() newaddedData:any;
  @Output() deleteList = new EventEmitter<any>();
   @Input() deleteIndex:number;
   @Input() latestbuttonval:string;
   
   spanDisplay:boolean= true;

   hellonumber:number;
     
    arrayOFKeys=[];
    newArray =[];
    celli:number;
    cellj:number;
    cellz:string
    

  constructor() {}

  ngOnInit() {    
    this.arrayOFKeys = Object.keys(this.nextArray[0]);
    for(var i = 0;i<this.nextArray.length;i++)
    {
     this.newArray.push(this.nextArray[i]);
    }
    
    
   }
  
   ngOnChanges() 
   {
     console.log(this.latestbuttonval)
     if(this.latestbuttonval == "yes")
     {
       this.update()
    }
      else if(this.latestbuttonval == "confirm")
     {
      this.toDelete();
    
      }
  }
  // this is edit function
  onDoubleClick(i,j,newval)
  {
    this.celli = i;
    this.cellj = j;
    this.cellz = newval
    this.spanDisplay = false;

  } 
   // this for delete entry
  onDeleteClick(index)
  {
   this.hellonumber = index;
   this.deleteList.emit()
}
   update()
  {  
    let obj = {};
    for(var i=0;i<this.arrayOFKeys.length;i++)
    {
      obj[this.arrayOFKeys[i]] = this.newaddedData[i];
    }
     this.newArray.push(obj);
     console.log(this.latestbuttonval);
     
    }
    toDelete()
    {
      this.newArray.splice(this.hellonumber,1);
    }
    onblur()
    {
      this.celli = null;
      this.cellj = null;
      this.cellz = null;
    }
   
   

}
