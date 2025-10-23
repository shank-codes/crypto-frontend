"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import ChatPanel from "./ChatPanel";

export default function ChatToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Panel */}
      {open && <ChatPanel onClose={() => setOpen(false)} />}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </>
  );
}