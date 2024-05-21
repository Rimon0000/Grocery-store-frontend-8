import Sidebar from "@/components/shared/Sidebar";

const layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-12">
            <Sidebar/>
            <div className='col-span-10 h-full p-5'>
                {children}
            </div>
        </div>
    );
};

export default layout;