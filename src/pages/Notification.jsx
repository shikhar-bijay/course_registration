import React from "react";
import NavigationBar from "../Components/NavigationBar"; 
import NotificationModal from "../Components/NotificationModal";
/*
	1=collaboration
	2= guide invitation
	3=approval
*/
let notificationData = [
	{
		id: 1,
		title:
			"Machine Learning-based Predictive Maintenance System for Industrial Applications",
		tags: ["AAT", "6th Sem"],

		guide: "Rekha G S",
		type: "1",
	},
	{
		id: 2,
		title:
			"A comparative study to the 2011/2013 water quality assessments in the Pasquotank Watershed in Northeastern North Carolina with a sea level rise component ",
		tags: ["MP1", "4th sem"],

		guide: "Sonika Sharma",
		type: "2",
	},
	{
		id: 3,
		title:
			"Non-Orthogonal Multiple Access in Multi-Cell Networks: Theory, Performance, and Practical Challenges",
		tags: ["MP1", "6th Sem"],

		guide: "Namratha",
		type: "1",
	},
	{
		id: 4,
		title:
			"Non-Coherent Massive MIMO-OFDM Down-Link Based on Differential Modulation",
		tags: ["AAT", "6th Sem"],

		guide: "Rajeshwari",
		type: "3",
	},
	{
		id: 5,
		title:
			"Comparative Study of Forecasting Global Mean Sea Level Rising using Machine Learning",
		tags: ["MP2", "5th Sem"],

		guide: "Vikranth",
		type: "2",
	},
	{
		id: 6,
		title:
			"GIS analysis for defining sea level rise effects on Sicily coasts for the end of the 21st century",
		tags: ["MAP", "8th Sem"],

		guide: "John Doe",
		type: "3",
	},
	{
		id: 7,
		title:
			"An Explore of Virtual Reality for Awareness of the Climate Change Crisis: A Simulation of Sea Level Rise",
		tags: ["MAP", "8th Sem"],

		guide: "John Doe",
		type: "1",
	},
];

export default function Notification() {
	return (
		<div>
			<NavigationBar />
			<NotificationModal notificationData={notificationData} />
		</div>
	);
}
