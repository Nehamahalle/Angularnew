import { Directive,ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {
  // constructor(private elementRef:ElementRef) {
  //   elementRef.nativeElement.style.color='blue'
  //   }

  @HostBinding('style.color') color:string;
    constructor(private elementRef:ElementRef) {
    this.color='black';
    elementRef.nativeElement.style.background='#ccccff';
    }
    @HostListener('mouseover') onMouseOver(){
    this.color='green';
    this.elementRef.nativeElement.style.background= 'lightblue';
    //this.elementRef.nativeElement.style.fontSize= '30px';
    

    
    }
    
    @HostListener('mouseleave') onMouseLeave(){
    this.color='blue';
    this.elementRef.nativeElement.style.background='#ccccff';
    // this.elementRef.nativeElement.style.fontSize= '20px';
    }

    
  

}
