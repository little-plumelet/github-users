"use client";

import { IUser } from "@/interfaces/IUser";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const UserCard = ({ id }: { id: number }) => {
  console.log("id = ", id);
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
    <div>
      {user?.avatar_url && (
        <Image src={user.avatar_url} alt="avatar" width={100} height={100} />
      )}
      <h3>{user?.name ?? ""}</h3>
      <a href={user?.html_url}>GitHub page</a>
      <div>
        <div>
          <div>
            <span>login: </span>
            <span>{user?.login ?? "unknown"}</span>
          </div>
          <div>
            <span>public repos: </span>
            <span>{user?.public_repos ?? 0}</span>
          </div>
          <div>
            <span>private repos: </span>
            <span>{user?.private_repos ?? 0}</span>
          </div>
          <div>
            <span>followers: </span>
            <span>{user?.followers ?? 0}</span>
          </div>
          <div>
            <span>following: </span>
            <span>{user?.following ?? 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
