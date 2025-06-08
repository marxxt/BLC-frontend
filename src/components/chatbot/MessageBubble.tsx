// components/chatbot/MessageBubble.tsx
import { useState } from "react";
import HelenAvatar from "./HelenAvatar";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const isBot = message.type === "bot";
  const isLongMessage = message.content.length > 300;

  const displayContent =
    isLongMessage && !isExpanded
      ? message.content.slice(0, 300) + "..."
      : message.content;

  if (isBot) {
    return (
      <div className="flex items-start space-x-3">
        <HelenAvatar
          size="sm"
          imageURL="/images/avatars/helen-chat-bubble.png"
          className="border-blue-400/30 dark:border-purple-400/30 mt-1"
        />
        <div className="flex-1 max-w-lg">
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-gray-200/30 dark:border-white/20 rounded-2xl rounded-tl-sm p-4 shadow-lg">
            <div className="text-gray-900 dark:text-white text-sm leading-relaxed whitespace-pre-line">
              {displayContent}
            </div>

            {isLongMessage && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs mt-2 text-blue-600 dark:text-purple-300 hover:text-blue-700 dark:hover:text-purple-200 underline hover:no-underline transition-colors"
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1 ml-4">
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    );
  }

  // User message
  return (
    <div className="flex justify-end">
      <div className="max-w-lg">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-purple-500 dark:to-pink-500 rounded-2xl rounded-br-sm p-4 shadow-lg">
          <div className="text-white text-sm leading-relaxed whitespace-pre-line">
            {displayContent}
          </div>

          {isLongMessage && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs mt-2 text-blue-100 dark:text-purple-100 hover:text-white transition-colors underline hover:no-underline"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-500 mt-1 text-right mr-4">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
