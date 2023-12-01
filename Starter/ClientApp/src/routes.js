import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
    import("./views/theme/typography/Typography")
);

// Base
const Accordion = React.lazy(() => import("./views/base/accordion/Accordion"));
const Breadcrumbs = React.lazy(() =>
    import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const ListGroups = React.lazy(() =>
    import("./views/base/list-groups/ListGroups")
);
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
    import("./views/base/paginations/Paginations")
);
const Placeholders = React.lazy(() =>
    import("./views/base/placeholders/Placeholders")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const Progress = React.lazy(() => import("./views/base/progress/Progress"));
const Spinners = React.lazy(() => import("./views/base/spinners/Spinners"));
const Tables = React.lazy(() => import("./views/base/tables/Tables"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

// Buttons
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const ButtonGroups = React.lazy(() =>
    import("./views/buttons/button-groups/ButtonGroups")
);
const Dropdowns = React.lazy(() =>
    import("./views/buttons/dropdowns/Dropdowns")
);

//Forms
const ChecksRadios = React.lazy(() =>
    import("./views/forms/checks-radios/ChecksRadios")
);
const FloatingLabels = React.lazy(() =>
    import("./views/forms/floating-labels/FloatingLabels")
);
const FormControl = React.lazy(() =>
    import("./views/forms/form-control/FormControl")
);
const InputGroup = React.lazy(() =>
    import("./views/forms/input-group/InputGroup")
);
const Layout = React.lazy(() => import("./views/forms/layout/Layout"));
const Range = React.lazy(() => import("./views/forms/range/Range"));
const Select = React.lazy(() => import("./views/forms/select/Select"));
const Validation = React.lazy(() =>
    import("./views/forms/validation/Validation")
);

const Charts = React.lazy(() => import("./views/charts/Charts"));

// Icons
const CoreUIIcons = React.lazy(() =>
    import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));

// Notifications
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Toasts = React.lazy(() => import("./views/notifications/toasts/Toasts"));

const Widgets = React.lazy(() => import("./views/widgets/Widgets"));

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        element: Dashboard,
    },
    { path: "/dashboard/theme", name: "Theme", element: Colors, exact: true },
    { path: "/dashboard/theme/colors", name: "Colors", element: Colors },
    { path: "/dashboard/theme/typography", name: "Typography", element: Typography },
    { path: "/dashboard/base", name: "Base", element: Cards, exact: true },
    { path: "/dashboard/base/accordion", name: "Accordion", element: Accordion },
    { path: "/dashboard/base/breadcrumbs", name: "Breadcrumbs", element: Breadcrumbs },
    { path: "/dashboard/base/cards", name: "Cards", element: Cards },
    { path: "/dashboard/base/carousels", name: "Carousel", element: Carousels },
    { path: "/dashboard/base/collapses", name: "Collapse", element: Collapses },
    { path: "/dashboard/base/list-groups", name: "List Groups", element: ListGroups },
    { path: "/dashboard/base/navs", name: "Navs", element: Navs },
    { path: "/dashboard/base/paginations", name: "Paginations", element: Paginations },
    { path: "/dashboard/base/placeholders", name: "Placeholders", element: Placeholders },
    { path: "/dashboard/base/popovers", name: "Popovers", element: Popovers },
    { path: "/dashboard/base/progress", name: "Progress", element: Progress },
    { path: "/dashboard/base/spinners", name: "Spinners", element: Spinners },
    { path: "/dashboard/base/tables", name: "Tables", element: Tables },
    { path: "/dashboard/base/tooltips", name: "Tooltips", element: Tooltips },
    { path: "/dashboard/buttons", name: "Buttons", element: Buttons, exact: true },
    { path: "/dashboard/buttons/buttons", name: "Buttons", element: Buttons },
    { path: "/dashboard/buttons/dropdowns", name: "Dropdowns", element: Dropdowns },
    {
        path: "/dashboard/buttons/button-groups",
        name: "Button Groups",
        element: ButtonGroups,
    },
    { path: "/dashboard/charts", name: "Charts", element: Charts },
    { path: "/dashboard/forms", name: "Forms", element: FormControl, exact: true },
    { path: "/dashboard/forms/form-control", name: "Form Control", element: FormControl },
    { path: "/dashboard/forms/select", name: "Select", element: Select },
    {
        path: "/dashboard/forms/checks-radios",
        name: "Checks & Radios",
        element: ChecksRadios,
    },
    { path: "/dashboard/forms/range", name: "Range", element: Range },
    { path: "/dashboard/forms/input-group", name: "Input Group", element: InputGroup },
    {
        path: "/dashboard/forms/floating-labels",
        name: "Floating Labels",
        element: FloatingLabels,
    },
    { path: "/dashboard/forms/layout", name: "Layout", element: Layout },
    { path: "/dashboard/forms/validation", name: "Validation", element: Validation },
    { path: "/dashboard/icons", exact: true, name: "Icons", element: CoreUIIcons },
    { path: "/dashboard/icons/coreui-icons", name: "CoreUI Icons", element: CoreUIIcons },
    { path: "/dashboard/icons/flags", name: "Flags", element: Flags },
    { path: "/dashboard/icons/brands", name: "Brands", element: Brands },
    {
        path: "/dashboard/notifications",
        name: "Notifications",
        element: Alerts,
        exact: true,
    },
    { path: "/dashboard/notifications/alerts", name: "Alerts", element: Alerts },
    { path: "/dashboard/notifications/badges", name: "Badges", element: Badges },
    { path: "/dashboard/notifications/modals", name: "Modals", element: Modals },
    { path: "/dashboard/notifications/toasts", name: "Toasts", element: Toasts },
    { path: "/dashboard/widgets", name: "Widgets", element: Widgets },
    { path: "/dashboard/login", name: "Login", element: Login },
    { path: "/dashboard/register", name: "Register", element: Register },
    { path: "/dashboard/404", name: "Error 404", element: Page404 },
    { path: "/dashboard/500", name: "Error 500", element: Page500 },
    { path: "dashboard/*", name: "Error 404", element: Page404 },
];

export default routes;
