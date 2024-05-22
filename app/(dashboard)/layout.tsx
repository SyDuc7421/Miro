import NavBar from "./_components/navbar";
import OrgSideBar from "./_components/org-sidebar";
import SideBar from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="h-full pl-[60px]">
        <div className="flex h-full gap-x-3">
          <OrgSideBar />
          <div className="h-full flex-1">
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
