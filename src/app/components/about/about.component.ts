import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Input } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnChanges, OnDestroy {

    @Input("message") private title: string;
    private count: number;
    pageTitle: string; // Welcome +

    constructor() {
        console.log("Constructor executed");
        this.count = 10;
    }

    ngOnInit() {
        console.log("ngOnInit executed");
        this.pageTitle = `Welcome ${this.title}`;
        console.log(`Page title is ${this.pageTitle}`)

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("onChanges executed")
        this.pageTitle = `Welcome ${this.title}`;
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy executed")
    }


}
