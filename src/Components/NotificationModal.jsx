import React, { userState } from "react";

import {
	Box,
	Flex,
	Button,
	IconButton,
	Heading,
	Image,
	VStack,
	Text,
	Tag,
	HStack,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

export default function NotificationModal(props) {
	const mapTypeToNotification = (type) => {
		switch (type) {
			case "1":
				return "Collaboration Request";
			case "2":
				return "Guide Request";
			case "3":
				return "Approval Request";
			default:
				return "General";
		}
	};
	const navigate = useNavigate();
	const handleProjectTitleClick = () => {
		navigate("/");
	};

	return (
		<Box w="60%" m="auto" p={5}>
			<VStack>
				{props.notificationData.map((notification) => (
					<Box
						key={notification.id}
						borderRadius={5}
						border="2px solid rgba(0, 0, 0, 0.1)"
						p={3}
						h="175px"
						position="relative"
						w="full">
						<HStack justify="space-between" mb={1}>
							<Tag fontSize="10px">
								{mapTypeToNotification(notification.type)}
							</Tag>
							<HStack justify="space-between">
								{notification.tags.map((tag, index) => (
									<Tag key={index} fontSize="10px">
										{tag}
									</Tag>
								))}
							</HStack>
						</HStack>
						<Text fontSize="13px">#Project title</Text>
						<Text mb={3} onClick={handleProjectTitleClick} cursor="pointer">
							{notification.title}
						</Text>
						<Flex
							justify="space-between"
							position="absolute"
							bottom="0"
							left="0"
							right="0"
							p={3}>
							<Button size="sm" p={3} bg="teal" color="white">
								Comment
							</Button>
							{notification.type !== "3" && (
								<Flex>
									<Button size="sm" p={3} bg="#d90429" color="white" mr={5}>
										Deny
									</Button>
									<Button size="sm" p={2} bg="teal" color="white">
										Accept
									</Button>
								</Flex>
							)}
						</Flex>
					</Box>
				))}
			</VStack>
		</Box>
	);
}
