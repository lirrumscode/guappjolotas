import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    let TIME_IN_MS = 8000;
    setTimeout(() => {
      this.route.navigateByUrl('home');
    }, TIME_IN_MS);
  }

}
