import Client from "@/app/client";
import {auth} from "@/auth";
import {Session} from "next-auth";

const Page = async () => {
  const session: Session | null = await auth()
  return <Client session={session} />;
}
export default Page;