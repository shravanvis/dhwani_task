import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private httpClient: HttpClient) { }

  pieChartOptions = {
    responsive: true
  }

  pieChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']


  pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
        ]
    }
]


pieChartData:any = [
  { 
      data: []
  }
];


  ngOnInit(): void {
    this.getPieChartData()
  }

  getPieChartData(){
    this.httpClient.get('./assets/sales.json', {responseType: 'json'}).subscribe(
      data => {
          this.pieChartData = data as any [];
      },
      (err: HttpErrorResponse) => {
          console.log (err.message);
      }
  );
  }
}
