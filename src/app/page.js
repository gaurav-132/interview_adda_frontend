import Image from "next/image";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";


export default function Home() {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <SignupModal />
        </div>
    );
}
