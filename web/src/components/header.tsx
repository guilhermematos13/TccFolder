import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";

export function Header() {
    return (
        <div className="px-6 py-3 flex items-center justify-around border-b">
            <h1 className="text-xl font-bold text-primary">GPTravel</h1>
            <div className="flex items-center gap-2">
                <span className="text-muted-foreground hidden md:block">Desenvolvido por universitarios!</span>
                <Separator orientation="vertical" className="h-8" />
                <a href="https://github.com/guilhermematos13/TccFolder" target="_blank">
                    <Button>
                        <Github />
                        Github
                    </Button>
                </a>
                <ModeToggle />
            </div>
        </div>
    )
}