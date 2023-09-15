import { positions } from "@/lib/positions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Popover, PopoverContent } from "./ui/popover";
import { Linkedin } from "lucide-react";


export function InfoSide() {

    return (
        <aside className="w-1/5 ml-4">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xs text-foreground md:text-sm xl:text-base">Quem somos?</AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground md:text-sm xl:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sequi aliquid autem dolorum incidunt doloribus totam! Minima doloribus iste, labore numquam, iure perferendis beatae nemo corrupti hic molestias ipsa tenetur.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="mt-6 text-foreground">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xs text-foreground md:text-sm xl:text-base">Objetivo do Trabalho.</AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground md:text-sm xl:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sequi aliquid autem dolorum incidunt doloribus totam! Minima doloribus iste, labore numquam, iure perferendis beatae nemo corrupti hic molestias ipsa tenetur.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="mt-6 text-foreground">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xs text-foreground md:text-sm xl:text-base">Motivo da escolha do tema.</AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground md:text-sm xl:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sequi aliquid autem dolorum incidunt doloribus totam! Minima doloribus iste, labore numquam, iure perferendis beatae nemo corrupti hic molestias ipsa tenetur.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="mt-8">
                <Card className="hidden sm:block">
                    <CardHeader>
                        <CardTitle className="md:text-sm xl:text-xl">Membros da Equipe</CardTitle>
                        <CardDescription className="hidden lg:block">
                            Membros que participaram do projeto
                        </CardDescription>
                    </CardHeader>
                    {positions.map((person) => (
                        <CardContent className="grid gap-2" key={person.id}>
                            <div className="flex">
                                <div className="flex items-center gap-4">
                                    <Avatar className="hidden lg:block">
                                        <AvatarFallback>{person.nameInitials}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">{person.name}</p>
                                        <p className="hidden xl:flex text-sm text-muted-foreground gap-2 items-center"><Linkedin className="w-4 h-4 text-muted-foreground" />{person.linkedin}</p>
                                    </div>
                                </div>
                                <Popover>
                                    <PopoverContent className="p-0" align="end">
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </CardContent>
                    ))}
                </Card>
            </div>
        </aside>
    )
}