import React, { useState } from "react";
import NavigationBar from "../Components/NavigationBar";
import {
    Box,
    Flex,
    Button,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

export default function StudentCourseRegistration() {
    const navigate = useNavigate();

    // Mock course data
    const [courses, setCourses] = useState([
        { id: 1, name: "Course 1", code: "CSE101", credit: 3, selected: false },
        { id: 2, name: "Course 2", code: "MATH201", credit: 4, selected: false },
        { id: 3, name: "Course 2", code: "MATH201", credit: 4, selected: false },

        { id: 4, name: "Course 2", code: "MATH201", credit: 4, selected: false },

        // Add more courses as needed
    ]);

    // Function to toggle course selection
    const toggleCourseSelection = (id) => {
        setCourses(
            courses.map((course) =>
                course.id === id ? { ...course, selected: !course.selected } : course
            )
        );
    };

    // Calculate total credits
    const totalCredits = courses.reduce((total, course) => {
        return course.selected ? total + course.credit : total;
    }, 0);

   
    const handleSubmit = () => {
        // Logic to handle form submission
        console.log("Form submitted!");
    };

    return (
        <div>
            <NavigationBar/>
            <Box px={16} py={8}>
                <Flex justifyContent="space-between" alignItems="center" mb={4}>
                    <Heading size="lg">All Courses</Heading>
                    {/* <Button size="md" colorScheme="teal" mr={4} onClick={handleNewProjectClick}>
                        <NavLink to="/project/new">New Project</NavLink>
                    </Button> */}
                </Flex>
                <Table variant="simple" boxShadow="md">
                    <Thead>
                        <Tr>
                            <Th>S.No.</Th>
                            <Th>Name</Th>
                            <Th>Code</Th>
                            <Th>Credit</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {courses.map((course) => (
                            <Tr key={course.id}>
                                <Td>{course.id}</Td>
                                <Td>{course.name}</Td>
                                <Td>{course.code}</Td>
                                <Td>{course.credit}</Td>
                                <Td>
                                    <Button
                                        size="sm"
                                        onClick={() => toggleCourseSelection(course.id)}
                                        colorScheme={course.selected ? "teal" : "gray"}
                                    >
                                        {course.selected ? "Selected" : "Select"}
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <tfoot>
                        <Tr>
                            <Td></Td>
                            <Td></Td>
                            <Td fontWeight="bold">Total Credits:</Td>
                            <Td fontWeight="bold">{totalCredits}</Td>
                        </Tr>
                        <Tr>
                            <Td colSpan="4" textAlign="center">
                                <Button colorScheme="teal" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Td>
                        </Tr>
                    </tfoot>
                </Table>
            </Box>
        </div>
    );
}
