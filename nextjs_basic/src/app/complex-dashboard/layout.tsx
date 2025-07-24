export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  users,
  login
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <>
      <div className="complex-dashboard-layout flex flex-col">{children}</div>
      <div className="flex">
        <div className="sidebar flex flex-col">
          {revenue}
          {users}
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      {login}
    </div>
  );
}
