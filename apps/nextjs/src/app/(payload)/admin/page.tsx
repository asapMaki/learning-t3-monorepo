"use client";

import React from "react";
import Root from "payload/dist/admin/Root";

const PayloadAdmin = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="
    bg-orange-400-100 flex
    min-h-screen
    flex-col
    text-gray-900
  "
    />
  );
  return <Root />;
};

export default PayloadAdmin;
