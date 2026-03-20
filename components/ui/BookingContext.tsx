"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface BookingOptions {
  service?: string;
  email?: string;
}

interface BookingContextType {
  isOpen: boolean;
  preselectedService: string | null;
  prefillEmail: string | null;
  openBooking: (options?: string | BookingOptions) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | null>(null);
  const [prefillEmail, setPrefillEmail] = useState<string | null>(null);

  const openBooking = useCallback((options?: string | BookingOptions) => {
    if (typeof options === "string") {
      setPreselectedService(options);
      setPrefillEmail(null);
    } else if (options) {
      setPreselectedService(options.service ?? null);
      setPrefillEmail(options.email ?? null);
    } else {
      setPreselectedService(null);
      setPrefillEmail(null);
    }
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setPreselectedService(null);
    setPrefillEmail(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <BookingContext.Provider value={{ isOpen, preselectedService, prefillEmail, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
