import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) {
      console.log("Directiva llamada");
  }

@Input() appResaltado: string;

@HostListener('mouseenter') mouseEntro(){

  this.resaltar(this.appResaltado || "yellow");
}

@HostListener('mouseleave') mouseSalio(){
  this.resaltar( null );
}

private resaltar(color:string){
  this.el.nativeElement.style.backgroundColor=color;
}
}
