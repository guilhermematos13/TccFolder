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
                        Somos um grupo de seis estudantes apaixonados por tecnologia, unidos pela jornada da
                        faculdade de Sistemas de Informação. Nossa amizade e determinação nasceram nas salas de aula,
                        onde superamos desafios juntos. Este site é nosso espaço para tornar a tecnologia mais amigável,
                        compartilhando conhecimento de forma envolvente.
                        Queremos inspirar e conectar, transformando a aprendizagem em uma experiência cativante.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="mt-6 text-foreground">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xs text-foreground md:text-sm xl:text-base">Objetivo do Trabalho.</AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground md:text-sm xl:text-base">
                        O objetivo deste projeto foi explorar a capacidade da API da OpenAI para gerar roteiros
                        de viagem personalizados e envolventes. Nossa meta era criar uma ferramenta que pudesse
                        gerar itinerários únicos com base em preferências individuais e dados de localização, proporcionando
                        aos viajantes uma experiência de planejamento de viagem mais conveniente e enriquecedora. Combinando a
                        inteligência artificial com informações de destinos turísticos, esperávamos demonstrar como a
                        tecnologia pode melhorar a experiência de viagem, oferecendo sugestões personalizadas que atendam às
                        necessidades e interesses de cada indivíduo, tornando suas viagens memoráveis e únicas.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="mt-6 text-foreground">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xs text-foreground md:text-sm xl:text-base">Motivo da escolha do tema.</AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground md:text-sm xl:text-base">
                        O motivo da escolha deste tema se baseia na importância da tecnologia de geração de texto,
                        como a API da OpenAI. Essa tecnologia tem se destacado recentemente, tornando-se uma
                        escolha atraente para explorar sua aplicação no contexto do planejamento de viagens.
                        A seleção desse tema visa demonstrar como a tecnologia avançada pode ser usada de maneira
                        prática e benéfica, apresentando um exemplo concreto de seu potencial.
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