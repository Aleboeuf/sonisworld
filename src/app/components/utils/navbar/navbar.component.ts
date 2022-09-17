import { Component, OnInit } from '@angular/core';
import { faHouse, faCode, faFileCsv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faHouse = faHouse;
  faCode = faCode;
  faFileCsv = faFileCsv;

  constructor() {}

  ngOnInit(): void {}
}
