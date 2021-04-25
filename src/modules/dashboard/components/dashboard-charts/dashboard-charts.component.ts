import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'sb-dashboard-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-charts.component.html',
    styleUrls: ['dashboard-charts.component.scss'],
})
export class DashboardChartsComponent implements OnInit, AfterViewInit {
    @ViewChild('myAreaChart') myAreaChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;

    @ViewChild('myBarChart') myBarChart!: ElementRef<HTMLCanvasElement>;
    chart2!: Chart;

    constructor() {}
    ngOnInit() {}

    ngAfterViewInit() {
        this.chart = new Chart(this.myAreaChart.nativeElement, {
            type: 'line',
            data: {
                labels: [
                    'Mar 1',
                    'Mar 2',
                    'Mar 3',
                    'Mar 4',
                    'Mar 5',
                    'Mar 6',
                    'Mar 7',
                    'Mar 8',
                    'Mar 9',
                    'Mar 10',
                    'Mar 11',
                    'Mar 12',
                    'Mar 13',
                ],
                datasets: [
                    {
                        label: 'Sessions',
                        lineTension: 0.3,
                        backgroundColor: 'rgba(225, 20, 20, 0.2)',
                        borderColor: 'rgba(184, 0, 0, 1)',
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(184, 0, 0, 1)',
                        pointBorderColor: 'rgba(255,255,255,0.8)',
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(184, 0, 0, 1)',
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: [
                            10000,
                            30162,
                            26263,
                            18394,
                            18287,
                            28682,
                            31274,
                            33259,
                            25849,
                            24159,
                            32651,
                            31984,
                            38451,
                        ],
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            time: {
                                unit: 'day',
                            },
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                maxTicksLimit: 7,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 40000,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                color: 'rgba(0, 0, 0, .125)',
                            },
                        },
                    ],
                },
                legend: {
                    display: false,
                },
            },
        });
        this.chart2 = new Chart(this.myBarChart.nativeElement, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Revenue',
                        backgroundColor: 'rgba(225, 20, 20, 1)',
                        borderColor: 'rgba(184, 0, 0, 1)',
                        data: [4215, 5312, 6251, 7841, 9821, 14984],
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            time: {
                                unit: 'month',
                            },
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                maxTicksLimit: 6,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 15000,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                display: true,
                            },
                        },
                    ],
                },
                legend: {
                    display: false,
                },
            },
        });
    }
}
