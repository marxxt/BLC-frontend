// components/chatbot/MessageBubble.tsx
interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isBot = message.type === "bot";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isBot
            ? "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            : "bg-blue-600 text-white"
        }`}
      >
        {isBot && (
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">BL</span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Blue Ledger Assistant
            </span>
          </div>
        )}
        <div className="whitespace-pre-line text-sm">{message.content}</div>
        <div
          className={`text-xs mt-1 ${
            isBot ? "text-gray-500 dark:text-gray-400" : "text-blue-100"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
