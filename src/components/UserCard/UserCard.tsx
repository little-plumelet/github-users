"use client";

import { IUser } from "@/interfaces/IUser";
import useSWR from "swr";
import Image from "next/image";
import { CardWrapper, GridWrapper, GridItem, CardTitle, CardLinkStyle } from "./styles";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const UserCard = ({ id }: { id: number }) => {

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
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          color: "darkred",
        }}
      >
        Error occured while fetching user data
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
    </CardWrapper>
  );
};
