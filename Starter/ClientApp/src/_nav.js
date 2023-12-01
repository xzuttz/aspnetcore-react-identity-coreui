import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilBell,
    cilCalculator,
    cilChartPie,
    cilCursor,
    cilDescription,
    cilDrop,
    cilNotes,
    cilPencil,
    cilPuzzle,
    cilSpeedometer,
    cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
        badge: {
            color: 'info',
            text: 'NEW',
        },
    },
    {
        component: CNavTitle,
        name: 'Theme',
    },
    {
        component: CNavItem,
        name: 'Colors',
        to: '/dashboard/theme/colors',
        icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Typography',
        to: '/dashboard/theme/typography',
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    },
    {
        component: CNavTitle,
        name: 'Components',
    },
    {
        component: CNavGroup,
        name: 'Base',
        to: '/dashboard/base',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Accordion',
                to: '/dashboard/base/accordion',
            },
            {
                component: CNavItem,
                name: 'Breadcrumb',
                to: '/dashboard/base/breadcrumbs',
            },
            {
                component: CNavItem,
                name: 'Cards',
                to: '/dashboard/base/cards',
            },
            {
                component: CNavItem,
                name: 'Carousel',
                to: '/dashboard/base/carousels',
            },
            {
                component: CNavItem,
                name: 'Collapse',
                to: '/dashboard/base/collapses',
            },
            {
                component: CNavItem,
                name: 'List group',
                to: '/dashboard/base/list-groups',
            },
            {
                component: CNavItem,
                name: 'Navs & Tabs',
                to: '/dashboard/base/navs',
            },
            {
                component: CNavItem,
                name: 'Pagination',
                to: '/dashboard/base/paginations',
            },
            {
                component: CNavItem,
                name: 'Placeholders',
                to: '/dashboard/base/placeholders',
            },
            {
                component: CNavItem,
                name: 'Popovers',
                to: '/dashboard/base/popovers',
            },
            {
                component: CNavItem,
                name: 'Progress',
                to: '/dashboard/base/progress',
            },
            {
                component: CNavItem,
                name: 'Spinners',
                to: '/dashboard/base/spinners',
            },
            {
                component: CNavItem,
                name: 'Tables',
                to: '/dashboard/base/tables',
            },
            {
                component: CNavItem,
                name: 'Tooltips',
                to: '/dashboard/base/tooltips',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Buttons',
        to: '/dashboard/buttons',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Buttons',
                to: '/dashboard/buttons/buttons',
            },
            {
                component: CNavItem,
                name: 'Buttons groups',
                to: '/dashboard/buttons/button-groups',
            },
            {
                component: CNavItem,
                name: 'Dropdowns',
                to: '/dashboard/buttons/dropdowns',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Forms',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Form Control',
                to: '/dashboard/forms/form-control',
            },
            {
                component: CNavItem,
                name: 'Select',
                to: '/dashboard/forms/select',
            },
            {
                component: CNavItem,
                name: 'Checks & Radios',
                to: '/dashboard/forms/checks-radios',
            },
            {
                component: CNavItem,
                name: 'Range',
                to: '/dashboard/forms/range',
            },
            {
                component: CNavItem,
                name: 'Input Group',
                to: '/dashboard/forms/input-group',
            },
            {
                component: CNavItem,
                name: 'Floating Labels',
                to: '/dashboard/forms/floating-labels',
            },
            {
                component: CNavItem,
                name: 'Layout',
                to: '/dashboard/forms/layout',
            },
            {
                component: CNavItem,
                name: 'Validation',
                to: '/forms/validation',
            },
        ],
    },
    {
        component: CNavItem,
        name: 'Charts',
        to: '/dashboard/charts',
        icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    },
    {
        component: CNavGroup,
        name: 'Icons',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'CoreUI Free',
                to: '/dashboard/icons/coreui-icons',
                badge: {
                    color: 'success',
                    text: 'NEW',
                },
            },
            {
                component: CNavItem,
                name: 'CoreUI Flags',
                to: '/dashboard/icons/flags',
            },
            {
                component: CNavItem,
                name: 'CoreUI Brands',
                to: '/dashboard/icons/brands',
            },
        ],
    },
    {
        component: CNavGroup,
        name: 'Notifications',
        icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Alerts',
                to: '/dashboard/notifications/alerts',
            },
            {
                component: CNavItem,
                name: 'Badges',
                to: '/dashboard/notifications/badges',
            },
            {
                component: CNavItem,
                name: 'Modal',
                to: '/dashboard/notifications/modals',
            },
            {
                component: CNavItem,
                name: 'Toasts',
                to: '/dashboard/notifications/toasts',
            },
        ],
    },
    {
        component: CNavItem,
        name: 'Widgets',
        to: '/dashboard/widgets',
        icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
        badge: {
            color: 'info',
            text: 'NEW',
        },
    },
    {
        component: CNavTitle,
        name: 'Extras',
    },
    {
        component: CNavGroup,
        name: 'Pages',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'Login',
                to: '/dashboard/login',
            },
            {
                component: CNavItem,
                name: 'Register',
                to: '/dashboard/register',
            },
            {
                component: CNavItem,
                name: 'Error 404',
                to: '/dashboard/404',
            },
            {
                component: CNavItem,
                name: 'Error 500',
                to: '/dashboard/500',
            },
        ],
    },
    {
        component: CNavItem,
        name: 'Docs',
        href: 'https://coreui.io/react/docs/templates/installation/',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    },
]

export default _nav
