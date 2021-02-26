import { Component} from '@angular/core';

@Component({
    selector: 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls :['./counting.component.css']
})
export class CountingComponent {

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
