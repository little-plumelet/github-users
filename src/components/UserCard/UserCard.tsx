"use client";

import { IUser } from "@/interfaces/IUser";
import useSWR from "swr";
import Image from "next/image";
import {
  CardWrapper,
  GridWrapper,
  GridItem,
  CardTitle,
  CardLinkStyle,
  StyledButton,
} from "./styles";
import { MouseEventHandler } from "react";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error();
    await res.json().then((data) => (error.message = data.message));
    throw error;
  }

  return res.json();
};

export const UserCard = ({
  id,
  onClose,
}: {
  id: number;
  onClose: MouseEventHandler<HTMLButtonElement>;
}) => {
  const {
    data: user,
    error,
    isLoading,
  } = useSWR<IUser, Error>(`https://api.github.com/user/${id}`, fetcher);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        loading data...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center",
          paddingTop: "20%",
          backgroundColor: "white",
          color: "darkred",
        }}
      >
        <div>Error occured while fetching user data</div>
        <StyledButton onClick={onClose}>Back</StyledButton>
      </div>

    );
  }

  return (
    <CardWrapper>
      {user?.avatar_url && (
        <Image src={user.avatar_url} alt="avatar" width={150} height={150} />
      )}
      <CardTitle>{user?.name ?? "Unknown name"}</CardTitle>
      <CardLinkStyle href={user?.html_url}>GitHub page</CardLinkStyle>
      <GridWrapper>
        <GridItem>
          <span>login: </span>
          <span>{user?.login ?? "unknown login"}</span>
        </GridItem>
        <GridItem>
          <span>public repos: </span>
          <span>{user?.public_repos ?? 0}</span>
        </GridItem>
        <GridItem>
          <span>private repos: </span>
          <span>{user?.private_repos ?? 0}</span>
        </GridItem>
        <GridItem>
          <span>followers: </span>
          <span>{user?.followers ?? 0}</span>
        </GridItem>
        <GridItem>
          <span>following: </span>
          <span>{user?.following ?? 0}</span>
        </GridItem>
      </GridWrapper>
      <StyledButton onClick={onClose}>Back</StyledButton>
    </CardWrapper>
  );
};
