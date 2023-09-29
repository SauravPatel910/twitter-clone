import React from "react";
import "./Sidebar.css";
import Logo from "./logo";
import SiderbarOption from "./SiderbarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <Logo width={36} height={36} />
      </div>

      <SiderbarOption active text="Home" Icon={HomeIcon} />
      <SiderbarOption text="Explore" Icon={SearchIcon} />
      <SiderbarOption text="Notifications" Icon={NotificationsIcon} />
      <SiderbarOption text="Messages" Icon={MailOutlineIcon} />
      <SiderbarOption text="Lists" Icon={ListAltIcon} />
      <SiderbarOption text="Commubities" Icon={PeopleOutlineIcon} />
      <SiderbarOption text="Premium" Icon={Logo} />
      <SiderbarOption text="Profile" Icon={PermIdentityOutlinedIcon} />
      <SiderbarOption text="More" Icon={MoreHorizIcon} />

      <Button className="sidebar__post" variant="contained" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;
