import { Component } from '@angular/core';
import { Imageslider } from '../../imageslider/imageslider/imageslider';
import { Slide } from '../../imageslider/imageslider/types/slide';

@Component({
  selector: 'app-randominfo',
  imports: [Imageslider],
  templateUrl: './randominfo.html',
  styleUrl: './randominfo.css',
})
export class Randominfo {
slides: Slide[] = 
[
  {
    url: "/jackson.jpg",
    title:"guitarjackson"

  },
  {
    url: "/ibanez2.jpg",
    title:"guitaribanez"

  },
  {
    url: "aria.jpg",
    title:"guitararia"

  }




  
]
}
