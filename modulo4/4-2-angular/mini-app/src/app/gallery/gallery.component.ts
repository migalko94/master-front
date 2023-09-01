import { Component } from '@angular/core';

import { Image } from './imageModel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images: Image[];
  showedImage: Image;

  intervalId: any;
  isTimerOn: boolean;

  width: number;
  height: number;

  firstEl: number;
  lastEl: number;
  showedEl: number;

  constructor() {
    this.images = [
      {
        id: 1,
        src: 'assets/galleryImages/1.jpeg',
        title: 'Imagen1',
      },
      {
        id: 2,
        src: 'assets/galleryImages/2.jpeg',
        title: 'Imagen2',
      },
      {
        id: 3,
        src: 'assets/galleryImages/3.jpg',
        title: 'Imagen3',
      },
      {
        id: 4,
        src: 'assets/galleryImages/4.jpg',
        title: 'Imagen4',
      },
      {
        id: 5,
        src: 'assets/galleryImages/5.jpg',
        title: 'Imagen5',
      },
      {
        id: 6,
        src: 'assets/galleryImages/6.jpg',
        title: 'Imagen6',
      },
      {
        id: 7,
        src: 'assets/galleryImages/7.jpg',
        title: 'Imagen7',
      },
      {
        id: 8,
        src: 'assets/galleryImages/8.jpg',
        title: 'Imagen8',
      },
    ];

    this.showedImage = { ...this.images[0] };

    this.width = 150;
    this.height = 150;

    this.isTimerOn = false;

    this.firstEl = 0;
    this.lastEl = 3;
    this.showedEl = 3;
  }

  selectImage(image: Image) {
    this.showedImage = image;
  }

  previous() {
    return (this.showedImage = this.images[this.showedImage.id - 2]);
  }

  next() {
    return (this.showedImage = this.images[this.showedImage.id]);
  }

  play() {
    this.intervalId = setInterval(() => {
      if (this.showedImage.id <= this.images.length - 1) {
        this.isTimerOn = true;
        this.next();
      } else {
        this.showedImage = this.images[0];
      }
    }, 2000);
  }

  stop() {
    this.isTimerOn = false;
    return clearInterval(this.intervalId);
  }

  increaseImg() {
    if (this.width <= 225 && this.height <= 225) {
      this.width = this.width + 20;
      this.height = this.height + 20;
    }
  }

  reduceImg() {
    if (this.width >= 70 && this.height >= 70) {
      this.width = this.width - 20;
      this.height = this.height - 20;
    }
  }

  previousSetOfImg() {
    this.firstEl = this.firstEl - this.showedEl;
  }

  nextSetOfImg() {
    this.firstEl = this.firstEl + this.showedEl;
  }
}
