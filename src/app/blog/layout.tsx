// app/dashboard/layout.tsx

import CarouselComponent from "../components/CarouselComponent/CarouselComponent";

export default function DashboardLayout({
    children, 
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col bg-gray-50">
            <div className="mb-[100px]">
                {children}
            </div>
            
            <CarouselComponent title="Recommended products"/>            
        </div>
    )}