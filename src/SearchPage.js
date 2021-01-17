import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />
			<ChannelRow
				image="https://www.rbsdirect.com.br/imagesrc/25395292.jpg?w=800&h=535&a=c%201x"
				channel="Estagiario Senior"
				verified
				subs="999K"
				noOfVideos={483}
				description="Um Estagiario, te ensinando a fazer coisas que você não sabe!"
			/>
			<hr />
			<VideoRow
				views="1.5M"
				subs="777K"
				description="I dont know"
				timestamp="1 hour ago"
				channel="Estagiario Senior"
				title="Lets build a Youtube clone"
				image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
			/>
			<VideoRow
				views="1.5M"
				subs="777K"
				description="I dont know"
				timestamp="1 hour ago"
				channel="Estagiario Senior"
				title="Lets build a Youtube clone"
				image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
			/>
			<VideoRow
				views="1.5M"
				subs="777K"
				description="I dont know"
				timestamp="1 hour ago"
				channel="Estagiario Senior"
				title="Lets build a Youtube clone"
				image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
			/>
			<VideoRow
				views="1.5M"
				subs="777K"
				description="I dont know"
				timestamp="1 hour ago"
				channel="Estagiario Senior"
				title="Lets build a Youtube clone"
				image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
			/>
		</div>
	);
}

export default SearchPage;
