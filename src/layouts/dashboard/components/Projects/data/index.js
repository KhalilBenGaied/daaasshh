/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (experts) =>
    experts.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "trainings", accessor: "trainings", width: "45%", align: "left" },
      { Header: "experts", accessor: "experts", width: "10%", align: "left" },
      { Header: "availability", accessor: "availability", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        trainings: <Company image={logoXD} name="Formation adobe XD : UX UI DESIGN" />,
        experts: (
          <MDBox display="flex" py={1}>
            {avatars([[team1, "Khalil Ben Gaied"]])}
          </MDBox>
        ),
        availability: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Active
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            1/3
          </MDTypography>
        ),
      },
      {
        trainings: <Company image={logoAtlassian} name="Formation PhotoShop" />,
        experts: (
          <MDBox display="flex" py={1}>
            {avatars([[team2, "Romina Hadid"]])}
          </MDBox>
        ),
        availability: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Active
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            0/2
          </MDTypography>
        ),
      },
      {
        trainings: <Company image={logoSlack} name="Formation Python" />,
        experts: (
          <MDBox display="flex" py={1}>
            {avatars([[team1, "Ryan Tompson"]])}
          </MDBox>
        ),
        availability: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Finished
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            1/3
          </MDTypography>
        ),
      },
      {
        trainings: <Company image={logoSpotify} name="Formation C#" />,
        experts: (
          <MDBox display="flex" py={1}>
            {avatars([[team3, "Jessica Doe"]])}
          </MDBox>
        ),
        availability: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Finished
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            1/5
          </MDTypography>
        ),
      },
      {
        trainings: <Company image={logoJira} name="Formation Unreal Engine " />,
        experts: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        availability: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Active
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            5/7
          </MDTypography>
        ),
      },
      {
        trainings: <Company image={logoInvesion} name="Formation Unity" />,
        experts: (
          <MDBox display="flex" py={1}>
            {avatars([[team1, "Ryan Tompson"]])}
          </MDBox>
        ),
        availability: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Active
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            2/7
          </MDTypography>
        ),
      },
    ],
  };
}
