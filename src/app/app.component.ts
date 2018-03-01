import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  button = ["yes","confirm"];
  button2;
  message:string="Sure you Want to Delete this!";
  form = ["Id","Name","Age"];
  form2 ;
  message2;
 //storing delete index

  addedData:any; // adding data
  otherButton:string;

   //new data add
  allow = false;

  next= [{
    id:"1234",
    name:"anil",
    Age:"19",
  },
  {
    id:"5678",
    name:"jaimin",
    Age:"44"
  },
  {
  id:"1434",
  name:"vikalp",
  Age:"76"
  },
  {
  id:"4343",
  name:"bhargav",
  Age:"23"
  },
  {
  id:"7777",
  name:"vishl",
  Age:"33"
  }];

  ngOnInit(){
    this.allow = false;
    this.form2 = this.form;
    this.message2 = this.message;
   
  }


  // this function run when click on the add new entry
  onAddEntry()
  { this.button2 = this.button[0];
    this.form2 = this.form;
     this.message2 ="Add New Entry";
    this.allow = true;
   
    
  }
  onClosedata() // this for closing the model 
  { 
    this.allow = false;
  }

  openForm(newdata) // this for form adding form data
{
  this.allow = false;
  this.addedData = newdata;

}  
   // This operation for delete
ondeleteData()
{
   this.button2 = this.button[1];
  this.allow = true;
  this.form2 =[];
  this.message2 = this.message;
  this.otherButton = "";
 }

 openButton(data) // button data
 { this.allow = false;
   this.otherButton = data;
  
  }

}

