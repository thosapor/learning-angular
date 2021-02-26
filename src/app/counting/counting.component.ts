import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls :['./counting.component.css']
})
export class CountingComponent {
    @Input()
    title: string;

    count = 0;
    constructor() { }

    countNumber() {
        this.count = this.count + 1
    }

    minusCount(){
        if(this.count>0)
        this.count = this.count - 1
    }
}
