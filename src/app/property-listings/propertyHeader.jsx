import { Navbar } from "@/components/layout/navbarLayout";
import SettingsDropdown from "@/components/ui/SettingsDropdown";
import { useSession } from "next-auth/react";

export default function PropertyHeader(){
    const {data:session,status}=useSession();
    if(!session){
        return <Navbar/>
    }
    return(
      <SettingsDropdown/>  
    );
}