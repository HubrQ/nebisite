import { Component, computed, effect, ElementRef, input, signal, untracked } from '@angular/core';
import { Slide } from './types/slide';
import { CommonModule, NgStyle } from '@angular/common';
@Component({
  selector: 'app-imageslider',
  imports: [CommonModule],
  templateUrl: './imageslider.html',
  styleUrl: './imageslider.css',
})
export class Imageslider {

  slides = input.required<Slide[]>();
  parentWidth = input.required<number>();
  maxHeight = input.required<number>();
  naturalRatio = signal(1); // height / width

  darkMode = signal(false);

  sliderHeight = computed(() => {
    const calculated = this.parentWidth() * this.naturalRatio();
    return Math.min(calculated, this.maxHeight());
  });

  ngOnInit() {
    this.loadImage(this.slides()[0].url);
  }

    loadImage(url: string) {
  const img = new Image();
  img.src = url;
  img.onload = () => {
    this.naturalRatio.set(img.naturalHeight / img.naturalWidth);
  };
  }

  getStyle(slide: Slide) {
    return {
      backgroundImage: `url(${slide.url})`,
      width: `${this.parentWidth()}px`,
      height: '100%',
    };
  }
  
  containerStyle = computed(() => ({
    width: `${this.parentWidth() * this.slides().length}px`,
    height: `${this.sliderHeight()}px`,
    transform: `translateX(-${this.currentIndex()* this.parentWidth()}px)`
  }));

  currentIndex = signal(0)



  gotoprev(): void {
    const isFirst = this.currentIndex() === 0
    const newIndex = isFirst ? this.slides().length - 1 : this.currentIndex() - 1;
    this,this.currentIndex.set(newIndex);

  }
  gotonext(): void {
    const isLast = this.currentIndex() === this.slides().length - 1;
    const newIndex = isLast ? 0 : this.currentIndex() + 1;
    this.currentIndex.set(newIndex);
  }
  gotoslide(index: number): void {this.currentIndex.set(index)}

  timeoutID = signal<number|undefined>(undefined);
  timeouteffect = effect(() => {
    const index = this.currentIndex();
    const prevID = untracked(() => this.timeoutID());
    window.clearTimeout(prevID);
    const ID = window.setTimeout(() => {
      this.gotonext();
    }, 5000);
    untracked(() => this.timeoutID.set(ID));
  })
  constructor(private elRef: ElementRef) {
    // effect to load image whenever currentIndex changes
    effect(() => {
      const index = this.currentIndex(); // read signal → triggers effect
      const slide = this.slides()[index];
      if (!slide) return;

      const img = new Image();
      img.src = slide.url;
      img.onload = () => {
        this.naturalRatio.set(img.naturalHeight / img.naturalWidth);
      };
    });
    this.updateDarkMode();

    // Listen for body class changes dynamically
    const observer = new MutationObserver(() => this.updateDarkMode());
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Effect: whenever darkMode changes, update arrow/dot classes
    effect(() => {
      const isDark = this.darkMode();
      this.syncDarkClass(isDark);
    });
  }

  updateDarkMode() {
    this.darkMode.set(!document.body.classList.contains('body-dark'));
  }

  syncDarkClass(isDark: boolean) {
    // Only target arrows/dots inside this component
    const arrows = Array.from(this.elRef.nativeElement.querySelectorAll('.arrow')) as HTMLElement[];
    const dots = Array.from(this.elRef.nativeElement.querySelectorAll('.dot')) as HTMLElement[];

    arrows.forEach(el => el.classList.toggle('dark', isDark));
    dots.forEach(el => el.classList.toggle('dark', isDark));
  }
    
  }
