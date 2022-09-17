import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  accordionIcon = faPlus;

  constructor() {}

  ngOnInit(): void {}

  collapseCard(cardBody: HTMLDivElement, cardTitle: HTMLDivElement) {
    this.accordionIcon = cardBody.classList.contains('opened')
      ? faPlus
      : faMinus;
    cardBody.classList.toggle('opened');
    cardTitle.classList.toggle('opened');
  }
}
