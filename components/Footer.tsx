export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-glow">
              <span className="h-2.5 w-2.5 rounded-sm bg-white" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              Ultra Text
            </span>
          </div>
          <p className="max-w-xs text-center text-sm text-white/35 sm:text-left">
            The context engine for AI. Connect your business once. Power every AI
            forever.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-x-12 gap-y-2 text-sm">
          <div className="flex flex-col gap-2.5">
            <span className="mb-1 text-xs uppercase tracking-widest text-white/30">
              Product
            </span>
            <a href="#demo" className="text-white/55 hover:text-white">
              Overview
            </a>
            <a href="#use-cases" className="text-white/55 hover:text-white">
              Use cases
            </a>
            <a href="#cta" className="text-white/55 hover:text-white">
              Pricing
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="mb-1 text-xs uppercase tracking-widest text-white/30">
              Company
            </span>
            <a href="#vision" className="text-white/55 hover:text-white">
              Vision
            </a>
            <a href="#" className="text-white/55 hover:text-white">
              Careers
            </a>
            <a href="#" className="text-white/55 hover:text-white">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="mb-1 text-xs uppercase tracking-widest text-white/30">
              Legal
            </span>
            <a href="#" className="text-white/55 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-white/55 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-white/55 hover:text-white">
              Security
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/[0.06] pt-6 text-center text-xs text-white/30 sm:text-left">
        © {new Date().getFullYear()} Ultra Text. All rights reserved.
      </div>
    </footer>
  );
}
