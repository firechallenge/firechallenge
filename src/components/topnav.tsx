import Link from "next/link";

export const TopNav = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Fire Challenge
        </Link>
      </div>
      <Link href="/new" className="btn btn-primary">
        New Challenge
      </Link>
    </div>
  );
};
