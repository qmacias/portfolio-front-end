import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

import { JsonService, Portfolio } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateString: string;
  jsonData!: Portfolio;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private jsonService: JsonService
  ) {
    this.dateString = formatDate(Date.now(), 'yyyy', this.locale);
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.jsonService.getAll().subscribe({
      next: (data: Portfolio) => { this.jsonData = data },
      error: (e) => console.log(e)
    });
  }
}
