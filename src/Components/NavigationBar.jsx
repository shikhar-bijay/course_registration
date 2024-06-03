import React from "react";
import {
	Box,
	Flex,
	Button,
	IconButton,
	Heading,
	Image,
	Stack,
} from "@chakra-ui/react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavigationBar() {
	const navigate = useNavigate();

	const handleNotificationClick = () => {
		navigate("/notification");
	};
	const handleUserClick = () => {
		navigate("/login");
	};
	const handleLogoClick = () => {
		navigate("/home");
	};
	return (
		<Box px={16} py={0} borderBottom="1px solid rgba(0, 0, 0, 0.1)">
			<Flex p={2} alignItems="center" justifyContent="space-between">
				<Flex align="center" onClick={handleLogoClick} cursor="pointer">
					<Image
						src="src\assets\BMSCE_logo.svg"
						alt="Logo"
						mr={2}
						boxSize="45px"
					/>
					<Stack spacing="0px">
						<Heading size="sm" fontWeight="normal">
							BMSCE
						</Heading>
						<Heading size="md" p={0} mt={0} fontWeight="500">
							Course Registration
						</Heading>
					</Stack>
				</Flex>
				<Flex alignItems="center">
					
					<IconButton
						variant="ghost"
						colorScheme="teal"
						aria-label="Notifications"
						fontSize="40px"
						// bg="red"
						borderRadius="full"
						onClick={handleNotificationClick}
						icon={<IoNotificationsCircleSharp />}
						mr={2}
					/>
					<IconButton
						variant="ghost"
						colorScheme="teal"
						aria-label="Profile"
						fontSize="33px"
						borderRadius="full"
						onClick={handleUserClick}
						icon={<FaCircleUser />}
						ml={2}
					/>
				</Flex>
			</Flex>
		</Box>
	);
}
