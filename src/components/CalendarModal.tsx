"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

const CALENDAR_URL = "https://calendar.app.google/ac8ZrVyRbGCw87yh7";

type CalendarModalContextType = {
  openCalendar: () => void;
};

const CalendarModalContext = createContext<CalendarModalContextType>({
  openCalendar: () => {},
});

export function useCalendarModal() {
  return useContext(CalendarModalContext);
}

export function CalendarModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendar = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches
    ) {
      window.open(CALENDAR_URL, "_blank");
      return;
    }
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <CalendarModalContext.Provider value={{ openCalendar }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            {/* Modal */}
            <motion.div
              className="relative w-full max-w-[680px] h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500 text-sm cursor-pointer"
              >
                &#10005;
              </button>
              <iframe
                src={CALENDAR_URL}
                className="w-full h-full border-0"
                title="Schedule a call"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CalendarModalContext.Provider>
  );
}
