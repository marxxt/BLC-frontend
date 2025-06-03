// components/sections/TeamSection.tsx
import TeamMember from "../ui/TeamMember";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Casey Taylor",
      role: "Senior Finance Advisor",
      image: "/images/team/casey-taylor.jpg",
    },
    {
      name: "Morgan Jordan",
      role: "Real Estate Analyst",
      image: "/images/team/morgan-jordan.jpg",
    },
    {
      name: "Alex Kim",
      role: "Credit Solutions Manager",
    },
    {
      name: "Taylor Reese",
      role: "Investment Strategist",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Team Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 relative">
                {/* Professional headshot simulation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-64 bg-gradient-to-br from-blue-200 to-purple-300 dark:from-blue-800 dark:to-purple-900 rounded-lg opacity-60"></div>
                </div>

                {/* Person silhouette */}
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-gray-700 dark:bg-gray-500 rounded-t-full opacity-70"></div>

                {/* Hair */}
                <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-800 dark:bg-gray-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Team List */}
          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
