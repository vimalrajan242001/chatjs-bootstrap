import { Component,Input } from '@angular/core';
import * as chart from 'chart.js';

@Component({
  selector: 'app-dougnut-chart',
  templateUrl: './dougnut-chart.component.html',
  styleUrls: ['./dougnut-chart.component.scss']
})
export class DougnutChartComponent {
  @Input() public percent;
  @Input() public color;
  @Input() public canvasName;
  constructor() { }

  ngAfterViewInit():void{
    this.createChart()
  }
  createChart(){
    var ref = <HTMLCanvasElement>document.getElementById(this.canvasName)
    var ctx = ref.getContext('2d')
    const mychart = new chart(ctx,{
      type:'doughnut',
      data:{
        datasets:[
          {
            data:[this.percent , 100-this.percent],
            backgroundColor:[this.color],
            corderWidth:0
          }
        ]
      },
      options:{
        cutoutPercentage:80,
        responsive:false,
        tooltips:{
          enabled:false
        }
      }
    })
    var domString = '<div class="chart__value" style="display:grid;position:absolute;top:0;left:40px;height:200px;width:160px"><p style="font-size:20px;margin:auto;padding-left:6px;color:#ff7401">' + this.percent + '%</p></div>'; // String holding markup for above created element
    var chartcontainer= document.getElementById("chartContainer")
    var divelement = document.createElement('div')
    divelement.innerHTML =  domString
    chartcontainer.appendChild(divelement.firstChild)
  }
}
