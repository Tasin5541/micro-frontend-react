import React from "react";
import clsx from "clsx";
import { Stack, Step, StepIconProps, StepLabel, Stepper } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

import "./index.scss";

const steps = [
  {
    name: "Trip Details",
  },
  {
    name: "Choose A Plan",
  },
  {
    name: "Your Details",
  },
  {
    name: "Review Details",
  },
  {
    name: "Payment",
  },
];

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <FlightIcon />,
    2: <AirplaneTicketOutlinedIcon />,
    3: <AccountCircleOutlinedIcon />,
    4: <RemoveRedEyeOutlinedIcon />,
    5: <PaidOutlinedIcon />,
  };

  return (
    <div
      className={clsx("arrow-pointer-body arrow-pointer", {
        ["completed"]: completed,
        ["active"]: active,
        ["not-completed"]: !completed && !active,
      })}
    >
      {icons[String(props.icon)]}
      <span className="step-label">
        {steps[parseInt(String(props.icon)) - 1].name}
      </span>
    </div>
  );
}

export default function HorizontalTimeline() {
  return (
    <Stack sx={{ width: "100%", flexWrap: "wrap" }} spacing={4}>
      <Stepper
        sx={{ flexWrap: "wrap" }}
        alternativeLabel
        activeStep={2}
        connector={null}
      >
        {steps.map((step, index) => (
          <Step key={step.name}>
            <StepLabel
              className={clsx({
                ["first-step"]: index == 0,
                ["last-step"]: index + 1 == steps.length,
                ["middle-step"]: steps.length > index + 1 && index > 0,
              })}
              StepIconComponent={ColorlibStepIcon}
            ></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
