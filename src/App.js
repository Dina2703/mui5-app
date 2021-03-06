import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DrawerMUI from "./components/Drawer";
import MuiAccordion from "./components/MuiAccordion";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiBreadcrumps from "./components/MuiBreadcrumps";
import MuiButton from "./components/MuiButton";
import MuiCard from "./components/MuiCard";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiChip from "./components/MuiChip";
import MuiImageList from "./components/MuiImageList";
import MuiLayout from "./components/MuiLayout";
import MuiLink from "./components/MuiLink";
import MuiList from "./components/MuiList";
import MuiNavbar from "./components/MuiNavbar";
import MuiRadioBtn from "./components/MuiRadioBtn";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MultipleSelect from "./components/MuiSelectMulti";
import MuiSelectMulti2 from "./components/MuiSelectMulti2";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextField from "./components/MuiTextField";
import MuiTypo from "./components/MuiTypo";
import MuiToolTip from "./components/MuiToolTip";
import MuiTabel from "./components/MuiTabel";
import MuiAlert from "./components/MuiAlert";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiDialog from "./components/MuiDialog";
import MuiProgress from "./components/MuiProgress";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiLoadingBtn from "./components/MuiLoadingBtn";
import MuiPicker from "./components/MuiPicker";
import MuiTab from "./components/MuiTab";
import MuiTimeline from "./components/MuiTimeline";
import MuiMasonry from "./components/MuiMasonry";
import MuiResponsivness from "./components/MuiResponsivness";

const theme = createTheme({
  status: {
    danger: "#64dd17",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          <div className="container">
            <h2>MUI 5 Typography variants</h2>
            <MuiTypo />
            <h2>MUI 5 Button variants</h2>
            <MuiButton />
            <h2>MUI 5 TextField variants</h2>
            <MuiTextField />
            <h2>MUI 5 Select</h2>
            <MuiSelect />
            <h2>MUI 5 Multiple select with MUI Select component, Mapping</h2>
            <MultipleSelect />
            <h2>MUI 5 Multiple select with TextField component</h2>
            <MuiSelectMulti2 />
            <h2>MUI 5 Radio Button examples</h2>
            <MuiRadioBtn />
            <h2>MUI 5 Checkbox examples</h2>
            <MuiCheckBox />
            <h2>MUI 5 Switch Component</h2>
            <MuiSwitch />
            <h2>MUI 5 Rating Component</h2>
            <MuiRating />
            <h2>MUI 5 AutoComplete Component</h2>
            <MuiAutoComplete />
            <h2>MUI 5 Box Component</h2>
            <MuiLayout />
            <h2>MUI 5 Card </h2>
            <MuiCard />
            <h2>MUI 5 Accordion </h2>
            <MuiAccordion />
            <h2>MUI 5 ImageList </h2>
            <MuiImageList />

            <h2>MUI 5 Breadcrumb </h2>
            <MuiBreadcrumps />
            <h2>MUI 5 Link </h2>
            <MuiLink />
            <h2>MUI 5 Drawer </h2>
            <DrawerMUI />
            <h2>MUI 5 Avatar MUI </h2>
            <MuiAvatar />
            <h2>MUI 5 Badge MUI </h2>
            <MuiBadge />
            <h2>MUI 5 List MUI </h2>
            <MuiList />
            <h2>MUI 5 Chip MUI </h2>
            <MuiChip />
            <h2>MUI 5 Tooltip MUI </h2>
            <MuiToolTip />
            <h2>MUI 5 Table MUI </h2>
            <MuiTabel />
            <h2>MUI 5 Alert MUI </h2>
            <MuiAlert />
            <h2>MUI 5 Snackbar MUI </h2>
            <MuiSnackbar />
            <h2>MUI 5 Dialog MUI </h2>
            <MuiDialog />
            <h2>MUI 5 Progress MUI </h2>
            <MuiProgress />
            <h2>MUI 5 Skeleton MUI </h2>
            <MuiSkeleton />
            <h2>MUI 5 Loading button MUI/lab </h2>
            <MuiLoadingBtn />
            <h2>MUI 5 date and Time picker MUI/lab </h2>
            <MuiPicker />
            <h2>MUI 5 Tabs MUI </h2>
            <MuiTab />
            <h2>MUI 5 Timeline MUI </h2>
            <MuiTimeline />
            <h2>MUI 5 Masonry MUI </h2>
            <MuiMasonry />
            <h2>MUI 5 Responsivness MUI </h2>
            <MuiResponsivness />
          </div>
          <h2>MUI 5 NavBar </h2>
          <MuiNavbar />
          <h2>
            MUI 5 Speed Dial MUI.
            <span> Blue circle fixed on the left-bottom of the UI</span>
          </h2>
          <MuiSpeedDial />
          <h2>MUI 5 Bottom Navigation</h2>
          <MuiBottomNavigation />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
