import { Component, OnInit } from '@angular/core';
import{Image} from '../models/image';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
   images =[ 
     new Image(1,'forest','forest','assets/img/forest_01.jpg',new Date()),
     new Image(2,'dog','animal','assets/img/dog_01.jpg',new Date()),
     new Image(3,'pattern','pattern','assets/img/pattern_01.jpg',new Date()),
    ]

  //  images=[
  //    { id:1,name:'forest',category:'forest',url:'assets/img/forest_01.jpg',  createdDate:Date},
  //    { id:2,name:'dog',category:'animal',url:'assets/img/dog_01.jpg',  createdDate:Date},
  //    { id:3,name:'pattern',category:'pattern',url:'assets/img/pattern_01.jpg',  createdDate:Date},
  //  ]

  // image ={
  //    id:1,
  //    name:'baby',
  //    category:'child',
  //    url:'assets/img/baby_01.jpg',
  //    createdDate:Date
  //    }

  constructor() { }

  ngOnInit() {
  }

}
