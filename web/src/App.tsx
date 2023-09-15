import { Textarea } from "./components/ui/textarea";
import { ThemeProvider } from "./components/theme-provider";
import { InfoSide } from "./components/info-side";
import { Header } from "./components/header";
import { SheetForm } from "./components/sheet-form";

export function App() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-card">
        <Header />
        <main className="flex-1 py-6 flex gap-6">
          <InfoSide />
          <div className="w-3/5 grid grid-row-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed text-foreground text-xs md:text-sm lg:text-base"
              placeholder="Inclua o prompt para IA..."
              readOnly
            />

            <Textarea
              className="resize-none p-4 leading-relaxed text-foreground text-xs md:text-sm lg:text-base"
              placeholder="Resposta gerada pela IA"
              readOnly
            />
          </div>
          <SheetForm />
        </main>
      </div>
    </ThemeProvider>
  )
}
