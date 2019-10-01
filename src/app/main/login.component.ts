import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    currentPath: string;
    body: HTMLBodyElement;

    constructor(private route: ActivatedRoute) {
        this.currentPath = this.route.snapshot.url[0].path;
    }

    ngOnInit(): void {
        this.body = document.getElementsByTagName('body')[0];
        this.body.classList.add(this.currentPath)
    }
    
    ngOnDestroy(): void {
        this.body.classList.remove(this.currentPath)      
      }
}