import { create } from 'zustand';
import { ApplicationData } from "@/types/application";

// Counter store (existing)
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// Chatbot store
export type Message = {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
};

interface ChatbotStore {
  messages: Message[];
  applicationData: Partial<ApplicationData>;
  currentStep: string;
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  setApplicationData: (data: Partial<ApplicationData>) => void;
  updateApplicationData: (updater: (prev: Partial<ApplicationData>) => Partial<ApplicationData>) => void;
  setCurrentStep: (step: string) => void;
  resetChatbot: () => void;
}

const initialStep = "loan_type";

export const useChatbotStore = create<ChatbotStore>((set) => ({
  messages: [],
  applicationData: {},
  currentStep: initialStep,
  setMessages: (messages) => set({ messages }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  setApplicationData: (data) => set({ applicationData: data }),
  updateApplicationData: (updater) =>
    set((state) => ({ applicationData: updater(state.applicationData) })),
  setCurrentStep: (step) => set({ currentStep: step }),
  resetChatbot: () =>
    set({
      messages: [],
      applicationData: {},
      currentStep: initialStep,
    }),
}));