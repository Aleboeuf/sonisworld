import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-csv-reader-page',
  templateUrl: './csv-reader-page.component.html',
  styleUrls: ['./csv-reader-page.component.scss'],
})
export class CsvReaderPageComponent implements OnInit {
  @ViewChild('tableContainer') tableContainer: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  changeListener(event: any): void {
    console.log(event);

    if (event.target.value) {
      const regex = new RegExp('(.*?).(csv)$');

      if (!regex.test(event.target.value.toLowerCase())) {
        event.value = '';
        alert('Veuillez choisir un fichier au format .csv');
      } else {
        this.readCsv(event.target);
      }
    }
  }

  readCsv(inputValue: any): void {
    var file: File = inputValue.files[0];
    var reader: FileReader = new FileReader();

    reader.onloadend = () => {
      this.renderTable(this.csvToArray(reader.result as string));
    };

    reader.readAsText(file);
  }

  csvToArray(str: string, delimiter: string = ',') {
    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const headers = str.slice(0, str.indexOf('\n')).split(delimiter);

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');

    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map((row) => {
      const values = row.split(delimiter);
      const el = headers.reduce((object: any, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });

    // return the array
    console.log(arr);

    return arr;
  }

  renderTable(data: any[]) {
    const N_table = document.createElement('table');
    N_table.classList.add('table', 'table-dark');

    const N_header_tr = document.createElement('tr');
    for (const headerName in data[0]) {
      const N_th = document.createElement('th');
      N_th.innerHTML = headerName;
      N_header_tr.append(N_th);
    }
    N_table.append(N_header_tr);

    for (const row of data) {
      const N_tr = document.createElement('tr');
      for (const headerName in row) {
        const N_td = document.createElement('td');
        N_td.innerHTML = row[headerName];
        N_tr.append(N_td);
      }
      N_table.append(N_tr);
    }

    this.tableContainer?.nativeElement.append(N_table);
  }
}
