import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-dashboard-actions',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-actions.component.html',
    styleUrls: ['./dashboard-actions.component.scss'],
})
export class DashboardActionsComponent implements OnInit {
    constructor() {}

    slides = [
        { img: 'assets/img/popust1.png' },
        { img: 'assets/img/popust2.png' },
        { img: 'assets/img/popust3.png' },
        { img: 'assets/img/popust4.png' },
        { img: 'assets/img/popust5.png' },
        { img: 'assets/img/popust6.png' },
        { img: 'assets/img/popust7.png' },
    ];
    slideConfig = { slidesToShow: 3, slidesToScroll: 4 };

    ngOnInit(): void {}

    addSlide() {
        this.slides.push({ img: 'http://placehold.it/350x150/777777' });
    }

    removeSlide() {
        this.slides.length = this.slides.length - 1;
    }

    slickInit() {
        console.log('slick initialized');
    }

    breakpoint() {
        console.log('breakpoint');
    }

    afterChange() {
        console.log('afterChange');
    }

    beforeChange() {
        console.log('beforeChange');
    }
}
