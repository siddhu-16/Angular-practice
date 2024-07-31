import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit, OnDestroy {
  myData: any;
  chart: Highcharts.Chart | undefined;
  private dataSubscription: Subscription | undefined;

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    console.log('ngOnInit - subscribing to data stream');
    this.dataSubscription = this._api.getdata().subscribe(data => {
      console.log('Data received:', data);
      this.myData = data;
      if (this.chart) {
        this.updateChart(data);
      } else {
        this.createChart(data);
      }
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy ');
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
      console.log('Unsubscribed');
    }
  }

  createChart(data: any): void {
    this.chart = Highcharts.chart('container', {
      chart: {
        type: 'bar',
        height: 600
      },
      title: {
        text: 'Server Monitoring Demo'
      },
      legend: {
        enabled: true
      },
      subtitle: {
        text: 'Instance Load'
      },
      plotOptions: {
        bar: {
          colorByPoint: true
        },
        series: {
          zones: [
            { color: '#4CAF50', value: 0 },
            { color: '#8BC34A', value: 1 },
            { color: '#CDDC39', value: 2 },
            { color: '#CDDC39', value: 3 },
            { color: '#FFEB3B', value: 4 },
            { color: '#FFEB3B', value: 5 },
            { color: '#FFC107', value: 6 },
            { color: '#FF9800', value: 7 },
            { color: '#FF5722', value: 8 },
            { color: '#F44336', value: 9 },
            { color: '#F44336', value: Number.MAX_VALUE }
          ],
          dataLabels: {
            enabled: true,
            format: '{point.y:.0f}%'
          }
        }
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '10px'
          }
        }
      },
      yAxis: {
        plotBands: [
          { from: 0, to: 30, color: '#E8F5E9' },
          { from: 30, to: 70, color: '#FFFDE7' },
          { from: 70, to: 100, color: '#FFEBEE' }
        ]
      },
      series: [{
        name: 'Random data',
        data: data
      }] as Highcharts.SeriesOptionsType[]
    });
  }

  updateChart(data: any): void {
    if (this.chart) {
      this.chart.series[0].setData(data, true);
    }
  }
}
