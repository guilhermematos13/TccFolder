import { DatePicker } from "@/components/DatePicker"
import { InfoSide } from "@/components/info-side"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/lib/axios"
import { Wand2 } from "lucide-react"
import { FormEvent, useEffect, useState } from "react"

interface IOptions {
    title: string
    id: string
}
interface IPrompt {
    id: string
    template: string
}

export function Chat() {
    const [prompt, setPrompt] = useState<IPrompt>()
    const [temperature, setTemperature] = useState(0.5)
    const [place, setPlace] = useState('')
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()
    const [options, setOptions] = useState<IOptions[]>([])
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    const [IAResponse, setIAResponse] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        api.get('/prompts')
            .then(response => (
                setPrompt(response.data[0])
            ))
    }, [])

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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const response = await api.post('ai/complete', {
                selections: selectedOptions,
                localization: place,
                startDate: formatData(startDate!),
                endDate: formatData(endDate!),
                temperature,
                prompt: prompt!.template,
            });
            setIAResponse(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    };

    const getSelectTopic = async () => {
        try {
            const response = await api.get('/selection-topic')

            setOptions(response.data)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getSelectTopic()
    }, [])

    return (
        <div className="flex min-h-screen flex-col bg-card">
            <main className="flex-1 py-6 flex gap-6">
                <InfoSide />
                <div className="w-3/5 grid grid-row-2 gap-4 flex-1">
                    {isLoading ?
                            <div className="w-full flex items-center justify-center gap-2">
                                <div className="flex flex-col gap-2">
                                    <Skeleton className="h-4 w-14" />
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-4 w-40" />
                                </div>
                            </div>
                         :
                            <Textarea
                                className="resize-none p-4 leading-relaxed text-foreground text-xs md:text-sm lg:text-base"
                                placeholder="Resposta gerada pela IA"
                                readOnly
                                value={IAResponse}
                            />
                        }
                </div>
                <aside>
                    <div className="space-y-6 mt-6 mr-4 w-20 sm:w-28 md:w-64 lg:w-80">
                        <form onSubmit={(event) => { handleSubmit(event) }} className="space-y-6">
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
                            <div className="flex items-start justify-start gap-1 flex-col md:gap-2 lg:gap-4">
                                <Label className="text-foreground text-xs md:text-sm" htmlFor="city">Dia da viagem:</Label>
                                <DatePicker placeholder="Qual o dia da viagem?" date={startDate} setDate={setStartDate} />
                            </div>
                            <div className="flex items-start justify-start gap-1 flex-col md:gap-2 lg:gap-4">
                                <Label className="text-foreground text-xs md:text-sm" htmlFor="city">Retorno da Viagem</Label>
                                <DatePicker placeholder="Qual o dia do retorno?" date={endDate} setDate={setEndDate} />
                            </div>
                            <div>
                                <Label className="text-foreground text-xs md:text-sm">Selecione</Label>
                                <Select>
                                    <SelectTrigger className="h-auto text-foreground text-xs md:text-sm">
                                        <Label className="w-60 text-foreground line-clamp-1 text-left">{selectedOptions.length > 0 ? selectedOptions.join(', ') : "Selecione..."}</Label>
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
                            <div className="space-y-4 w-16 sm:w-28 md:w-64 lg:w-80">
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
                            <Button
                                disabled={!temperature || place.length < 2 || !startDate || !endDate || isLoading}
                                type="submit"
                                className="w-auto">
                                Executar
                                <Wand2 className="hidden md:block w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </div>
                </aside>
            </main>
        </div>
    )
}
