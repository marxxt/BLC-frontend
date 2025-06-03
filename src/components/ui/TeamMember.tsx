// components/ui/TeamMember.tsx
interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  linkedIn?: string;
}

export default function TeamMember({
  name,
  role,
  image,
  linkedIn,
}: TeamMemberProps) {
  return (
    <div className="flex items-center justify-between py-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        {image ? (
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <button className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <svg
          className="w-4 h-4 text-gray-600 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </button>
    </div>
  );
}
