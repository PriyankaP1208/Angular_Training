import {Directive, Input, ElementRef, Renderer2, HostListener, Output} from '@angular/core';

@Directive({
    selector: '[validateElement]'
})
export class ValidateDirective{
    constructor(private ele:ElementRef, private renderer:Renderer2){
        this.validateElement = '';
    }

    @Input('validateElement')validateElement:any;

   //@Output()message:EventEmitter<any>;

    private setElement(color:string):void {
        this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', color);
    }

   @HostListener('keyup')
   onKeyUp(){
       if(this.validateElement == undefined || this.validateElement == 0 || this.validateElement == null){
           //this.message.emit('Value must contain some value')
           this.setElement('red')
      }else if(this.validateElement < 0){
        //this.message.emit('Value must be a positive integer')
       this.setElement('red')
   }
       //else if(this.validateElement.toString().length<2||this.validateElement.toString().length>10){
    //        this.message.emit('Value must be of at least 2 digit and less than 10 digits')
    //        this.setElement('red')
    //    }else if(this.validateElement.toString().split('.').length-1>1){
    //     this.message.emit('Value must only contain one decimal')
    //        this.setElement('red')
       //}
       else{
           //this.message.emit('')
           this.setElement('white')
       }

   }
//    @HostListener('mouseleave')
//    onMouseLeave(){
//        this.setElement('');
//    }
}