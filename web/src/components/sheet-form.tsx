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
import { useEffect, useState } from "react"
import { DatePicker } from "./DatePicker"
import { api } from "@/lib/axios"
import { Checkbox } from "./ui/checkbox"
interface IOptions {
    title: string
    id: string
}

export function SheetForm() {
    const [temperature, setTemperature] = useState(0.5)
    const [place, setPlace] = useState('')
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [options, setOptions] = useState<IOptions[]>([])
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    
    function formatData(data: Date) {
        if (data) {
            const day = String(data.getDate()).padStart(2, '0');
            const month = String(data.getMonth() + 1).padStart(2, '0');
            const year = data.getFullYear();

            return `${day}/${month}/${year}`
        }
    }

    const handleOptionToggle = (title: string) => {
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(title)) {
                return prevSelectedOptions.filter((item) => item !== title);
            } else {
                return [...prevSelectedOptions, title];
            }
        });
    };

    const handleSubmit = async () => {
        try {
            api.post('ai/complete', {
                body: {
                    temperature,
                    location: place,
                    selections: selectedOptions,
                    startDate: formatData(startDate!),
                    endDate: formatData(endDate!),
                }
            }).then(response => {
                console.log(response.data)
            })
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        api.get('/selection-topic')
            .then(response => {
                setOptions(response.data)
            })
    }, [])

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="mr-4 text-foreground"><ChevronLeft /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>GPTravel</SheetTitle>
                    <SheetDescription>
                        Bem-vindo ao GPTravel, uma IA focada em criação de roteiro de viagem, para iniciar insira os dados abaixo:
                    </SheetDescription>
                </SheetHeader>
                <div className="space-y-6 mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            <Label className="text-foreground text-xs md:text-sm" htmlFor="city">Vai viajar para:</Label>
                            <Input
                                id="city"
                                className="text-foreground text-xs md:text-sm"
                                type="text"
                                placeholder="Digite o nome de um lugar que exista!"
                                onChange={(e) => { setPlace(e.target.value) }}
                                value={place}
                            />
                        </div>
                        <div>
                            <Label className="text-foreground text-xs md:text-sm" htmlFor="city">Dia da viagem:</Label>
                            <DatePicker date={startDate} setDate={setStartDate} />
                        </div>
                        <div>
                            <Label className="text-foreground text-xs md:text-sm" htmlFor="city">Retorno da Viagem</Label>
                            <DatePicker date={endDate} setDate={setEndDate} />
                        </div>
                        <div>
                            <Label className="text-foreground text-xs md:text-sm">Selecione</Label>
                            <Select>
                                <SelectTrigger className="h-auto text-foreground text-xs md:text-sm">
                                    <SelectValue placeholder="Escolha o que você deseja que a IA traga." />
                                </SelectTrigger>
                                <SelectContent>
                                    {options.map((option) => (
                                        <Label key={option.id} className="flex gap-2 mb-1 text-foreground text-xs md:text-sm">
                                            <Checkbox className="flex flex-col" checked={selectedOptions.includes(option.title)} onCheckedChange={() => handleOptionToggle(option.title)} />
                                            {option.title}
                                        </Label>
                                    ))}
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
                                <Button
                                    disabled={!temperature || !place || !startDate || !endDate}
                                    type="submit"
                                    className="w-full">
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