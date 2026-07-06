import ProfileMenu from "../ButtonProfile/ProfileMenu";

const TopBar = () => {
    return (
        <div className="h-14 md:h-16 bg-blue-100 flex items-center justify-between px-4 md:px-6 gap-4 shrink-0 shadow-sm">
            
            <span className="font-bold text-gray-700">CRM CONTACTS</span>

            <ProfileMenu/>

        </div>
    );
};

export default TopBar;