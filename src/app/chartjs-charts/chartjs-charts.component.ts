import { Component,Input } from '@angular/core';
import chart from 'chart.js';
@Component({
  selector: 'app-chartjs-charts',
  templateUrl: './chartjs-charts.component.html',
  styleUrls: ['./chartjs-charts.component.scss']
})
export class ChartjsChartsComponent  {
  @Input() public jsonData: any;
  @Input() public chartType: String;
  @Input() public chartCanvas: any;
  private label: any;
  private datas: any;
  constructor() { }
  ngAfterViewInit(): void {
    this.createChart(this.chartType);
  }

  createChart(type) {
    this.label = Object.keys(this.jsonData.data)
    this.datas = Object.values(this.jsonData.data)
    var length = this.datas.length
    var ref = <HTMLCanvasElement>document.getElementById(this.chartCanvas)
    var ctx = ref.getContext('2d')

    const myChart = new chart(ctx, {
      type: type,
      data: {
        labels: [...this.label],
        datasets: [
          {
            label: this.jsonData.description.title,
            data: [...this.datas],
            backgroundColor: "rgba(51,255,102,0.7)",
            borderColor: "rgba(51,255,102,0.7)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: this.jsonData.description.base_period

              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: this.jsonData.description.units

              },
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      },
    });
  }
}
