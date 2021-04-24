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
        { img: 'https://via.placeholder.com/600.png/09f/fff' },
        { img: 'https://via.placeholder.com/600.png/021/fff' },
        { img: 'https://via.placeholder.com/600.png/321/fff' },
        { img: 'https://via.placeholder.com/600.png/422/fff' },
        { img: 'https://via.placeholder.com/600.png/654/fff' },
    ];
    slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

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
