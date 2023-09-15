import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Separator } from "./ui/separator"
import { Slider } from "./ui/slider"
import { ChevronLeft, Wand2 } from "lucide-react"
import { Input } from "./ui/input"
import { useState } from "react"

export function SheetForm() {
    const [temperature, setTemperature] = useState(0.5)
    const [place, setPlace] = useState('')

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="mr-4 text-foreground"><ChevronLeft /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>lorem ipsun</SheetTitle>
                    <SheetDescription>
                        lorem ipsom
                    </SheetDescription>
                </SheetHeader>
                <div className="space-y-6 mt-6">
                    <form className="space-y-6">
                        <div>
                            <Label className="text-foreground text-xs md:text-sm">Modelo</Label>
                            <Select disabled defaultValue="gpt3.5">
                                <SelectTrigger className="h-auto text-foreground text-xs md:text-sm">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                                </SelectContent>
                            </Select>
                            <span className="mt-1 block text-xs text-foreground italic">Você poderá customizar essa opção em breve!</span>
                        </div>
                        <div>
                            <Label className="text-foreground text-xs md:text-sm">Vai viajar para:</Label>
                            <Input
                                className="text-foreground text-xs md:text-sm"
                                type="text"
                                placeholder="Digite o nome de um lugar que exista!"
                                onChange={(e) => { setPlace(e.target.value) }}
                                value={place}
                            />
                        </div>
                        <div>
                            <Label className="text-foreground text-xs md:text-sm">Selecione</Label>
                            <Select>
                                <SelectTrigger className="h-auto text-foreground text-xs md:text-sm">
                                    <SelectValue placeholder="Escolha o que você deseja que a IA traga." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="value 1">1</SelectItem>
                                    <SelectItem value="value 2">2</SelectItem>
                                </SelectContent>
                            </Select>
                            <span className="mt-1 block text-xs text-foreground italic">Se você não selecionar nenhum a IA irá trazer de tudo um pouco!</span>
                        </div>
                        <Separator />
                        <div className="space-y-4">
                            <Label className="text-foreground">Criatividade</Label>
                            <Slider
                                className="bg-foreground"
                                min={0}
                                max={1}
                                step={0.1}
                                value={[temperature]}
                                onValueChange={(value => setTemperature(value[0]))}
                            />
                            <span className="block text-xs text-muted-foreground italic leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
                        </div>
                        <Separator />
                        <SheetFooter>
                            <SheetClose className="w-full">
                                <Button type="submit" className="w-full">
                                    Executar
                                    <Wand2 className="hidden md:block w-4 h-4 ml-2" />
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </form>
                </div>

            </SheetContent>
        </Sheet>
    )
}