import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data = {
    "description": {
      "title": "Global Land and Ocean Temperature Anomalies, January-December",
      "units": "Degrees Celsius",
      "base_period": "1901-2000",
      "missing": -999
    },
    "data": {
      "1979": "0.23",
      "1980": "0.28",
      "1981": "0.32",
      "1982": "0.19",
      "1983": "0.36",
      "1984": "0.17",
      "1985": "0.16",
      "1986": "0.23",
      "1987": "0.38",
      "1988": "0.39",
      "1989": "0.29",
      "1990": "0.45",
      "1991": "0.39",
      "1992": "0.24",
      "1993": "0.28",
      "1994": "0.34",
      "1995": "0.47",
      "1996": "0.32",
      "1997": "0.51",
      "1998": "0.65",
      "1999": "0.44",
      "2000": "0.42",
      "2001": "0.57",
      "2002": "0.62",
      "2003": "0.64",
      "2004": "0.58",
      "2005": "0.67",
      "2006": "0.64",
      "2007": "0.62",
      "2008": "0.54",
      "2009": "0.64",
      "2010": "0.72",
      "2011": "0.58",
      "2012": "0.64",
      "2013": "0.68",
      "2014": "0.74",
      "2015": "0.93",
      "2016": "1.00"
    }
  }
  public piedata = {
    "description": {
      "title": "Global Land and Ocean Temperature Anomalies, January-December",
      "units": "Degrees Celsius",
      "base_period": "1901-2000",
      "missing": -999
    },
    "data": {
      "2010": "0.72",
      "2011": "0.58",
      "2012": "0.64",
      "2013": "0.68",
      "2014": "0.74",
      "2015": "0.93",
      "2016": "1.00"
    }
  }
  //bar chart inputs
  public barChart = "bar"
  public barcanvas = "barchart"
  public barchartcolor = "rgba(51,255,102,0.7)"
  //line chart inputs
  public linecanvas = "linechart"
  public lineChart = "line"
  public linechartcolor = "rgba(255, 102, 102,0.7)"
  //pie chart inputs
  public pieChart = "pie"
  public piecanvas = "piechart"
  public piechartcolor = "rgba(153, 230, 255,0.7)"
  //doughnut chart inputs
  public doughnutcanvas="doughnutchart"
  public doughnutcolor = "#ff7401"
  public doughnutpercent = 60
}
