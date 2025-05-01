"use client";

import { useSearchParams } from "next/navigation";
import OtherCourses from "@/components/otherCourses/OtherCourses";

export default function OtherCorsePage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "Default";

  return (
    <div>
      <OtherCourses category={category} />
    </div>
  );
}
