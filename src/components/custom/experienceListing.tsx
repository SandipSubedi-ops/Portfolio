"use client";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExperienceList from "@/lib/experience";

export default function ExperiencePage() {
  const { theme } = useTheme();

  return (
    <div className="gap-6 flex flex-col w-full">
      {ExperienceList.sort((a, b) => a.id - b.id).map((exp) => (
        <Card
          key={exp.id}
          className="shadow-md border border-gray-200 dark:border-gray-700 dark:bg-gray-900"
        >
          <CardHeader>
            <CardTitle className="text-xl dark:text-white navlink">
              {exp.company}
            </CardTitle>
          </CardHeader>

          <CardContent>
            {/* Left/Right layout */}
            <div className="flex flex-col md:flex-row justify-between md:gap-8">
              {/* Left side */}
              <div className="md:w-1/3">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {exp.title}
                </p>
                <Badge
                  variant="outline"
                  className="dark:border-gray-500 dark:text-gray-300 mt-2"
                >
                  {exp.date}
                </Badge>
              </div>

              {/* Right side */}
              <div className="md:w-2/3 mt-4 md:mt-0">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
