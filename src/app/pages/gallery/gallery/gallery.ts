import { Component } from '@angular/core';
import { Imageslider } from '../../../imageslider/imageslider/imageslider';
import { Slide } from '../../../imageslider/imageslider/types/slide'

@Component({
  selector: 'app-gallery',
  imports: [Imageslider],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {


  slides: Slide[] = 
[ 
  
  {
    url: "/chaoticevildeathcorepochyloneV4.png",
    title: "chaovil"
  },
  {
    url: "/opor.png",
    title: "opor"
  },
  {
    url: "/oporcoverafaarrow.png",
    title: "opocover"
  },
  
    {
    url: "/ryżostan.png",
    title: "ryzostan"
  },
    {
    url: "/wroclove.jpeg",
    title: "wroclaw"
  },
  {
    url: "/frog.png",
    title: "frog"
  },
   {
    url: "/butterflypix.png",
    title: "butterfly"
  },
   {
    url: "/tshirtpix.png",
    title: "tshirt"
  }
  




]

}
