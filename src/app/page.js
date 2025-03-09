import Image from "next/image";
import LoginModal from "@/components/LoginModal";


export default function Home() {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <LoginModal />
        </div>
    );
}
