import { UserCard } from "@/components/UserCard/UserCard";

export default function User({params}: {params: {id: number}}) {
  return (
    <UserCard id={params.id} />
  )
}