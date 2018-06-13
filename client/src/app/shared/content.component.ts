import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private location: Location,
    ) {
        this.route.params.subscribe(res => console.log(res));
    }

    ngOnInit() {
        
    }
}