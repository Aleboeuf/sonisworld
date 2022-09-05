import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  faPlus = faPlus;

  constructor() {}

  ngOnInit(): void {}

  collapseCard(element: HTMLDivElement) {
    element.classList.toggle('opened');
  }
}
