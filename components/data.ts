export type Source = { name: string; color: string };

// Connected source systems. The brand dot colors are the only sanctioned
// color accents in the otherwise monochrome scheme — shared between the
// hero app mockup and the product flow diagram so they stay in sync.
export const inputs: Source[] = [
  { name: "Gmail", color: "#EA4335" },
  { name: "Slack", color: "#E01E5A" },
  { name: "Google Drive", color: "#1FA463" },
  { name: "Google Workspace", color: "#4285F4" },
  { name: "Microsoft 365", color: "#D83B01" },
  { name: "Calendar", color: "#34A853" },
  { name: "Zoom", color: "#2D8CFF" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "Stripe", color: "#635BFF" },
  { name: "Notion", color: "#E6E6E6" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Claude", color: "#D97757" },
  { name: "Gemini", color: "#8E7BEF" },
];

export const outputs: string[] = [
  "AI Agents",
  "Chatbots",
  "Automations",
  "Workflows",
  "Executives",
  "Teams",
];
