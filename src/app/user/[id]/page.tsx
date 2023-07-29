import { UserCard } from "@/components/UserCard/UserCard";

export default function User({params}: {params: {id: number}}) {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
    <UserCard id={params.id} />
    </div>
  )
}