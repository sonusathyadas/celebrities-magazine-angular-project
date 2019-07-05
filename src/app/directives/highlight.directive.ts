import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {


    @Input("color") highlight: string;
    @Input() size:number;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        //this.renderer.setStyle(this.el.nativeElement,"backgroundColor", "yellow");        
    }

    ngOnInit(): void {
        console.log("Color is " + this.highlight);
        if (this.highlight) {
            this.el.nativeElement.style.backgroundColor = this.highlight;
        } else {
            this.el.nativeElement.style.backgroundColor = "yellow";
        }
        console.log("Size is " + this.size);
    }

}
