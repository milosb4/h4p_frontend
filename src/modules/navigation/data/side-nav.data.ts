import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard', 'layouts', 'pages'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Početna',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Sniženja',
        link: '/discounts',
    },
    pages: {
        icon: 'book-open',
        text: 'Budžet',
        link: '/budget',
    },
};
