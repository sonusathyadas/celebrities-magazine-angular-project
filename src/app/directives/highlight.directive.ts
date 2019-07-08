import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    @HostBinding("style.color") colorName:string;
    @HostBinding("class") css:string;

    @Input("color") highlight: string;
    @Input() size:number;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        //this.renderer.setStyle(this.el.nativeElement,"backgroundColor", "yellow");        
    }

    ngOnInit(): void {
        // console.log("Color is " + this.highlight);
        // if (this.highlight) {
        //     this.el.nativeElement.style.backgroundColor = this.highlight;
        // } else {
        //     this.el.nativeElement.style.backgroundColor = "yellow";
        // }
        // console.log("Size is " + this.size);
    }

    @HostListener("mouseover")
    public applyStyle(){
        //this.el.nativeElement.style.backgroundColor="orange";
    }

    @HostListener("mouseout")
    public removeStyle(){
        // if (this.highlight) {
        //     this.el.nativeElement.style.backgroundColor = this.highlight;
        // } else {
        //     this.el.nativeElement.style.backgroundColor = "yellow";
        // }
    }

    @HostListener("mousedown")
    public showColor(){
        this.colorName="white";
        this.css="alert alert-danger";
    }

    @HostListener("mouseup")
    public removeColor(){
        this.colorName="black";
        this.css="";
    }
}
