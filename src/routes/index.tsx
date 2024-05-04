import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute";
// import ConductedInterviews from "../pages/dashboard/Interviews/ConductedInterviews";
// import Root from "./Root";

// lazy load all the views

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm"));
const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));

// landing
const Landing = React.lazy(() => import("../pages/landing/"));

// dashboard
const Dashboard = React.lazy(() => import("../pages/dashboard/Ecommerce/"));
const AnalyticsDashboard = React.lazy(() => import("../pages/dashboard/Analytics/"));

//hiring-dashboard

// const Skills = React.lazy(
//   () => import("../pages/dashboard/Skills/Skills")
// )

// const Qualifications = React.lazy(
//   () => import("../pages/dashboard/Qualifications/Qualifications")
// )

const JobOpenings = React.lazy(
  () => import("../pages/dashboard/JobOpenings/JobOpenings")
);

const Interviews = React.lazy(() => import("../pages/dashboard/Interviews/Interviews"));

const AllCandidates = React.lazy(
  () => import("../pages/dashboard/AllCandidates/AllCandidates")
);

const SingleInterview = React.lazy(
  () => import("../pages/dashboard/Interviews/SingleInterview")
);

const ConductedInterviews = React.lazy(
  () => import("../pages/dashboard/Interviews/ConductedInterviews")
);

const Hired = React.lazy(() => import("../pages/dashboard/Interviews/Hired"));
// const Calendar = React.lazy(
//   () => import("../pages/dashboard/Calendar/Calendar")
// )

// const Calendar = React.lazy(
//   () => import("../pages/dashboard/Calendar/Calendar")
// )

//staff-management
const StaffDashboard = React.lazy(
  () => import("../pages/staff-management/staff-dashboard/StaffDashboard")
);

const Departments = React.lazy(
  () => import("../pages/staff-management/Depatments/Departments")
);

// const Designation = React.lazy(
//   () => import("../pages/staff-management/Designation/Designation")
// )

const AllEmployees = React.lazy(
  () => import("../pages/staff-management/AllEmployees/AllEmpoyees")
);

const Attendance = React.lazy(
  () => import("../pages/staff-management/Attendance/Attendance")
);

const MarkAttendance = React.lazy(
  () => import("../pages/staff-management/Attendance/MarkAttendance")
);

const Leave = React.lazy(() => import("../pages/staff-management/Leave/Leave"));

const Salary = React.lazy(
  () => import("../pages/staff-management/SalaryPayments/SalaryPayments")
);

const ProcessSalary = React.lazy(
  () => import("../pages/staff-management/SalaryPayments/ProcessSalary")
);

const SalarySlip = React.lazy(
  () => import("../pages/staff-management/SalaryPayments/SalarySlip")
);

const DepartmentDetail = React.lazy(
  () => import("../pages/staff-management/Depatments/DepartmentDetail")
);
const AddEmployee = React.lazy(
  () => import("../pages/staff-management/AllEmployees/AddEmployee")
);

const SingleJob = React.lazy(() => import("../pages/dashboard/JobOpenings/SingleJob"));

const SingleSalary = React.lazy(
  () => import("../pages/staff-management/SalaryPayments/SingleSalary")
);

const GenerateSlip = React.lazy(
  () => import("../pages/staff-management/SalaryPayments/GenerateSlip")
);

//company-finances and settings
const Company = React.lazy(() => import("../pages/company-finances/CompanyFinances"));
const Settings = React.lazy(() => import("../pages/settings/Settings"));

// apps
const CalendarApp = React.lazy(() => import("../pages/apps/Calendar/"));
const Projects = React.lazy(() => import("../pages/apps/Projects/"));
const ProjectDetail = React.lazy(() => import("../pages/apps/Projects/Detail/"));
// - chat
const ChatApp = React.lazy(() => import("../pages/apps/Chat/"));
// - email
const Inbox = React.lazy(() => import("../pages/apps/Email/Inbox"));
const EmailDetail = React.lazy(() => import("../pages/apps/Email/Detail"));
const EmailCompose = React.lazy(() => import("../pages/apps/Email/Compose"));
// - tasks
const TaskList = React.lazy(() => import("../pages/apps/Tasks/List/"));
const Kanban = React.lazy(() => import("../pages/apps/Tasks/Board/"));
// - file
const FileManager = React.lazy(() => import("../pages/apps/FileManager"));

// extra pages
const Error404 = React.lazy(() => import("../pages/error/Error404"));
const Error500 = React.lazy(() => import("../pages/error/Error500"));
// -other
const Starter = React.lazy(() => import("../pages/other/Starter"));
const Profile = React.lazy(() => import("../pages/other/Profile"));
const Activity = React.lazy(() => import("../pages/other/Activity"));
const Invoice = React.lazy(() => import("../pages/other/Invoice"));
const Maintenance = React.lazy(() => import("../pages/other/Maintenance"));
const Pricing = React.lazy(() => import("../pages/other/Pricing"));

// uikit
const UIElements = React.lazy(() => import("../pages/uikit"));

// widgets
const Widgets = React.lazy(() => import("../pages/widgets/"));

// icons
const Unicons = React.lazy(() => import("../pages/icons/Unicons"));
const FeatherIcons = React.lazy(() => import("../pages/icons/Feather/"));
const BootstrapIcon = React.lazy(() => import("../pages/icons/Bootstrap/"));

// forms
const BasicForms = React.lazy(() => import("../pages/forms/Basic"));
const FormAdvanced = React.lazy(() => import("../pages/forms/Advanced"));
const FormValidation = React.lazy(() => import("../pages/forms/Validation"));
const FormWizard = React.lazy(() => import("../pages/forms/Wizard"));
const FileUpload = React.lazy(() => import("../pages/forms/FileUpload"));
const Editors = React.lazy(() => import("../pages/forms/Editors"));

// charts
const Charts = React.lazy(() => import("../pages/charts/"));

// tables
const BasicTables = React.lazy(() => import("../pages/tables/Basic"));
const AdvancedTables = React.lazy(() => import("../pages/tables/Advanced"));

// maps
const GoogleMaps = React.lazy(() => import("../pages/maps/GoogleMaps"));
const VectorMaps = React.lazy(() => import("../pages/maps/VectorMaps"));

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

//companyfinances
const CompanyFinances: RoutesProps = {
  path: "/companyfinances",
  name: "Company Finances",
  route: PrivateRoute,
  // roles: ["Admin"],
  icon: "calendar",
  element: <Company />,
  // header: "Apps",
};

//settings
const settings: RoutesProps = {
  path: "/settings",
  name: "Setting",
  route: PrivateRoute,
  // roles: ["Admin"],
  icon: "calendar",
  element: <Settings />,
  // header: "Apps",
};

// dashboards
const dashboardRoutes: RoutesProps = {
  path: "/hiring-management",
  name: "Dashboards",
  icon: "airplay",
  header: "Navigation",
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/hiring-management/dashboard" />,
      route: PrivateRoute,
    },
    {
      path: "/hiring-management/dashboard",
      name: "Ecommerce",
      element: <Dashboard />,
      route: PrivateRoute,
    },
    {
      path: "/hiring-management/job-openings/details/:id",
      name: "Single Job",
      element: <SingleJob />,
      route: PrivateRoute,
    },
    {
      path: "/hiring-management/interviews/details/:id",
      name: "Single Interview",
      element: <SingleInterview />,
      route: PrivateRoute,
    },

    {
      path: "/hiring-management/job-openings/details/:id",
      name: "Single Job",
      element: <SingleJob />,
      route: PrivateRoute,
    },
    // {
    //   path: "/hiring-management/analytics",
    //   name: "Analytics",
    //   element: <AnalyticsDashboard />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/hiring-management/skills",
    //   name: "Skills",
    //   element: <Skills/>,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/hiring-management/qualifications",
    //   name: "Qualifications",
    //   element: <Qualifications/>,
    //   route: PrivateRoute,
    // },
    {
      path: "/hiring-management/job-openings",
      name: "Job Openings",
      element: <JobOpenings />,
      route: PrivateRoute,
    },
    {
      path: "/hiring-management/interviews",
      name: "Interviews",
      element: <Interviews />,
      route: PrivateRoute,
    },
    {
      path: "/hiring-management/interviews/conducted-interviews",
      name: "Conducted Interviews",
      element: <ConductedInterviews />,
      route: PrivateRoute,
    },
    {
      path: "/hiring-management/interviews/hired",
      name: "Hired Candidates",
      element: <Hired />,
      route: PrivateRoute,
    },
    {
      path: "/hiring-management/all-candidates",
      name: "All Candidates",
      element: <AllCandidates />,
      route: PrivateRoute,
    },
    // {
    //   path: "/hiring-management/calendar",
    //   name: "Calendar",
    //   element: <Calendar/>,
    //   route: PrivateRoute,
    // },
  ],
};

//staff-routes
const staffRoutes: RoutesProps = {
  path: "/staff-management",
  name: "Dashboards",
  icon: "airplay",
  header: "Navigation",
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/staff-management/dashboard" />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/dashboard",
      name: "Dashboard",
      element: <StaffDashboard />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/departments",
      name: "Departments",
      element: <Departments />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/employees",
      name: "All Employees",
      element: <AllEmployees from={""} />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/attendance",
      name: "Attendance",
      element: <Attendance />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/departments/details/:id",
      name: "Department Detail",
      element: <DepartmentDetail />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/salary-payments/single/:id",
      name: "Salary Payment",
      element: <SingleSalary />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/salary-payments/process-salary",
      name: "Process Salary",
      element: <ProcessSalary />,
      route: PrivateRoute,
    },

    {
      path: "/staff-management/salary-payments/salary-slip",
      name: "Salary Slip",
      element: <SalarySlip />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/salary-payments/generate-slip/:id",
      name: "Generate Slip",
      element: <GenerateSlip />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/employees/add",
      name: "Add Employee",
      element: <AddEmployee />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/attendance/mark-attendance",
      name: "Mark Attendance",
      element: <MarkAttendance />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/leave-management",
      name: "Leave Management",
      element: <Leave />,
      route: PrivateRoute,
    },
    {
      path: "/staff-management/salary-payments",
      name: "Salary Payments",
      element: <Salary />,
      route: PrivateRoute,
    },
    // {
    //   path: "/dashboard/calendar",
    //   name: "Calendar",
    //   element: <Calendar/>,
    //   route: PrivateRoute,
    // },
  ],
};

const calendarAppRoutes: RoutesProps = {
  path: "/apps/calendar",
  name: "Calendar",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "calendar",
  element: <CalendarApp />,
  header: "Apps",
};

const chatAppRoutes: RoutesProps = {
  path: "/apps/chat",
  name: "Chat",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "message-square",
  element: <ChatApp />,
};

const emailAppRoutes: RoutesProps = {
  path: "/apps/email",
  name: "Email",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "mail",
  children: [
    {
      path: "/apps/email/inbox",
      name: "Inbox",
      element: <Inbox />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/details",
      name: "Email Details",
      element: <EmailDetail />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/compose",
      name: "Compose Email",
      element: <EmailCompose />,
      route: PrivateRoute,
    },
  ],
};

const projectAppRoutes: RoutesProps = {
  path: "/apps/projects",
  name: "Projects",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "uil-briefcase",

  children: [
    {
      path: "/apps/projects/list",
      name: "List",
      element: <Projects />,
      route: PrivateRoute,
    },
    {
      path: "/apps/projects/details",
      name: "Detail",
      element: <ProjectDetail />,
      route: PrivateRoute,
    },
  ],
};

const taskAppRoutes: RoutesProps = {
  path: "/apps/tasks",
  name: "Tasks",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "clipboard",
  children: [
    {
      path: "/apps/tasks/list",
      name: "Task List",
      element: <TaskList />,
      route: PrivateRoute,
    },
    {
      path: "/apps/tasks/kanban",
      name: "Kanban",
      element: <Kanban />,
      route: PrivateRoute,
    },
  ],
};

const fileAppRoutes: RoutesProps = {
  path: "/apps/file-manager",
  name: "File Manager",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "folder-plus",
  element: <FileManager />,
};

// pages
const extrapagesRoutes: RoutesProps = {
  path: "/pages",
  name: "Pages",
  icon: "package",
  header: "Custom",
  children: [
    {
      path: "/pages/starter",
      name: "Starter",
      element: <Starter />,
      route: PrivateRoute,
    },
    {
      path: "/pages/profile",
      name: "Profile",
      element: <Profile />,
      route: PrivateRoute,
    },
    {
      path: "/pages/activity",
      name: "Activity",
      element: <Activity />,
      route: PrivateRoute,
    },
    {
      path: "/pages/invoice",
      name: "Invoice",
      element: <Invoice />,
      route: PrivateRoute,
    },
    {
      path: "/pages/pricing",
      name: "Pricing",
      element: <Pricing />,
      route: PrivateRoute,
    },
  ],
};

// ui
const uiRoutes: RoutesProps = {
  path: "/components",
  name: "Components",
  icon: "package",
  header: "UI Elements",
  children: [
    {
      path: "/components/ui-elements",
      name: "UIElements",
      element: <UIElements />,
      route: PrivateRoute,
    },
    {
      path: "/components/widgets",
      name: "Widgets",
      element: <Widgets />,
      route: PrivateRoute,
    },
    {
      path: "/icons",
      name: "Icons",
      children: [
        {
          path: "/icons/unicons",
          name: "Unicons",
          element: <Unicons />,
          route: PrivateRoute,
        },
        {
          path: "/icons/feather",
          name: "Feather",
          element: <FeatherIcons />,
          route: PrivateRoute,
        },
        {
          path: "/icons/bootstrap",
          name: "Bootstrap Icon",
          element: <BootstrapIcon />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/forms",
      name: "Forms",
      children: [
        {
          path: "/forms/basic",
          name: "Basic Elements",
          element: <BasicForms />,
          route: PrivateRoute,
        },
        {
          path: "/forms/advanced",
          name: "Form Advanced",
          element: <FormAdvanced />,
          route: PrivateRoute,
        },
        {
          path: "/forms/validation",
          name: "Form Validation",
          element: <FormValidation />,
          route: PrivateRoute,
        },
        {
          path: "/forms/wizard",
          name: "Form Wizard",
          element: <FormWizard />,
          route: PrivateRoute,
        },
        {
          path: "/forms/upload",
          name: "File Upload",
          element: <FileUpload />,
          route: PrivateRoute,
        },
        {
          path: "/forms/editors",
          name: "Editors",
          element: <Editors />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/components/charts",
      name: "Charts",
      element: <Charts />,
      route: PrivateRoute,
    },
    {
      path: "/tables",
      name: "Tables",
      children: [
        {
          path: "/tables/basic",
          name: "Basic",
          element: <BasicTables />,
          route: PrivateRoute,
        },
        {
          path: "/tables/advanced",
          name: "Advanced",
          element: <AdvancedTables />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/maps",
      name: "Maps",
      children: [
        {
          path: "/maps/googlemaps",
          name: "Google Maps",
          element: <GoogleMaps />,
          route: PrivateRoute,
        },
        {
          path: "/maps/vectorMaps",
          name: "Google Maps",
          element: <VectorMaps />,
          route: PrivateRoute,
        },
      ],
    },
  ],
};

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "/auth/login",
    name: "Login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
  {
    path: "/auth/confirm",
    name: "Confirm",
    element: <Confirm />,
    route: Route,
  },
  {
    path: "/auth/forget-password",
    name: "Forget Password",
    element: <ForgetPassword />,
    route: Route,
  },
  {
    path: "/auth/lock-screen",
    name: "Lock Screen",
    element: <LockScreen />,
    route: Route,
  },
  {
    path: "/auth/logout",
    name: "Logout",
    element: <Logout />,
    route: Route,
  },
];

// public routes
const otherPublicRoutes: RoutesProps[] = [
  {
    path: "/landing",
    name: "landing",
    element: <Landing />,
    route: Route,
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    element: <Maintenance />,
    route: Route,
  },
  {
    path: "/error-404",
    name: "Error - 404",
    element: <Error404 />,
    route: Route,
  },
  {
    path: "/error-500",
    name: "Error - 500",
    element: <Error500 />,
    route: Route,
  },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

const appRoutes = [
  settings,
  CompanyFinances,
  calendarAppRoutes,
  chatAppRoutes,
  emailAppRoutes,
  projectAppRoutes,
  taskAppRoutes,
  fileAppRoutes,
];

// All routes
const authProtectedRoutes = [
  dashboardRoutes,
  staffRoutes,
  ...appRoutes,
  extrapagesRoutes,
  uiRoutes,
];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);

export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
};
