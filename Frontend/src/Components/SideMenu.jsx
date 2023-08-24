import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { BadgeHelp, ChefHat, ChevronRight, Home, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  const links = [
    {
      iconName: "Home",
      name: "Home",
      path: "/admin",
    },
    {
      iconName: "ChefHat",
      name: "Recipes",
      path: "/admin/recipes",
    },
    {
      iconName: "Users",
      name: "Users",
      path: "/admin/users",
    },
    {
      iconName: "BadgeHelp",
      name: "Help",
      path: "/admin/help",
    },
  ];
  const iconComponents = {
    Home: Home,
    ChefHat: ChefHat,
    BadgeHelp: BadgeHelp,
    Users: Users,
  };
  return (
    <Box
      display={"inline-block"}
      w={"15%"}
      bg={"brand.600"}
      minH={"100vh"}
      borderRadius={"1rem 0"}
      p={"1.4rem .4rem"}
    >
      <Heading fontSize={"1.5rem"} pl={".5rem"}>
        Recipe Swap
      </Heading>
      <Stack
        gap={"1rem"}
        m={"2rem 0"}
        fontSize="1.1rem"
        className="animate__animated animate__slideInUp"
      >
        {links.map((item, ind) => {
          const IconComponent = iconComponents[item.iconName];
          return (
            <Link to={item.path} key={ind}>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                mr={".6rem"}
                p={"1rem"}
                borderRadius={".5rem"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
                boxShadow={
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                }
              >
                <Flex gap={".5rem"} alignItems={"center"}>
                  <IconComponent size={24} />
                  {item.name}
                </Flex>
                <ChevronRight strokeWidth={1.5} />
              </Flex>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};