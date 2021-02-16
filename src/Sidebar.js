import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { ExpandMoreOutlines } from "@material-ui/icons";

function Sidebar() {
	return (
		<div className="sidebar">
			<SidebarRow
				src="https://avatars.githubusercontent.com/u/62380060?s=460&u=b7173e4ca87a7d76dbce2ceb00f3d45b75a5ab16&v=4"
				title="Jony Kps"
			/>
			<SidebarRow
				Icon={LocalHospitalIcon}
				title="COVID-19 Information center"
			/>
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={PeopleIcon} title="Friends" />
			<SidebarRow Icon={ChatIcon} title="Messenger" />
			<SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
			<SidebarRow Icon={VideoLibraryIcon} title="Videos" />
			<SidebarRow Icon={ExpandMoreIcon} title="More" />
		</div>
	);
}

export default Sidebar;
