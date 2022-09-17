import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sw-card',
  templateUrl: './sw-card.component.html',
  styleUrls: ['./sw-card.component.scss'],
})
export class SwCardComponent implements AfterViewInit {
  @Input() title!: string;
  @Input() defaultOpen!: string;
  @ViewChild('cardTitle') cardTitle: ElementRef | undefined;
  @ViewChild('cardBody') cardBody: ElementRef | undefined;

  accordionIcon = faPlus;
  opened = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.defaultOpen === 'true') {
      this.collapseCard();
      this.changeDetectorRef.detectChanges();
    }
    if (this.cardTitle) {
      this.cardTitle.nativeElement.innerHTML = this.title || '';
    }
  }

  collapseCard() {
    this.opened = !this.opened;
    this.accordionIcon = this.opened ? faMinus : faPlus;

    this.cardBody?.nativeElement.classList.toggle('opened', this.opened);
    this.cardTitle?.nativeElement.classList.toggle('opened', this.opened);
  }
}
