import { ChevronDownIcon, Github, Linkedin, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./components/ui/command";
import { positions } from "./lib/positions";

export function App() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-card">
        <div className="px-6 py-3 flex items-center justify-around border-b">
          <h1 className="text-xl font-bold text-primary">GPTravel</h1>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Desenvolvido por universitarios!</span>
            <Separator orientation="vertical" className="h-8" />
            <Button>
              <Github />
              Github
            </Button>
            <ModeToggle />
          </div>
        </div>
        <main className="flex-1 py-6 flex gap-6">
          <aside className="w-1/5 ml-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground">Quem somos?</AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sequi aliquid autem dolorum incidunt doloribus totam! Minima doloribus iste, labore numquam, iure perferendis beatae nemo corrupti hic molestias ipsa tenetur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="mt-6 text-foreground">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground">Objetivo do Trabalho.</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sequi aliquid autem dolorum incidunt doloribus totam! Minima doloribus iste, labore numquam, iure perferendis beatae nemo corrupti hic molestias ipsa tenetur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="mt-6 text-foreground">
              <AccordionItem value="item-1">
                <AccordionTrigger>Motivo da escolha do tema.</AccordionTrigger>
                <AccordionContent className="text-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sequi aliquid autem dolorum incidunt doloribus totam! Minima doloribus iste, labore numquam, iure perferendis beatae nemo corrupti hic molestias ipsa tenetur.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Membros da Equipe</CardTitle>
                  <CardDescription>
                    Membros que participaram do projeto
                  </CardDescription>
                </CardHeader>
                {positions.map((person) => (
                  <CardContent className="grid gap-6" key={person.id}>
                    <div className="flex items-center justify-between space-x-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/avatars/01.png" />
                          <AvatarFallback>{person.nameInitials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">{person.name}</p>
                          <p className="text-sm text-muted-foreground flex gap-2 items-center"><Linkedin className="w-4 h-4 text-muted-foreground" />{person.linkedin}</p>
                        </div>
                      </div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="ml-auto">
                            {person.position}
                            <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0" align="end">
                          <Command>
                            <CommandInput placeholder="Escreva um cargo" />
                            <CommandList>
                              <CommandEmpty>Nenhum cargo encontrada</CommandEmpty>
                              <CommandGroup>
                                <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                  <p>Dev Front</p>
                                  <p className="text-sm text-muted-foreground">
                                    É responsável por projetar e desenvolver a interface de usuário de um site ou aplicativo.
                                  </p>
                                </CommandItem>
                                <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                  <p>Dev Back</p>
                                  <p className="text-sm text-muted-foreground">
                                    É encarregado de criar e gerenciar a infraestrutura do servidor e a lógica de funcionamento por trás de um site.
                                  </p>
                                </CommandItem>
                                <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                  <p>Doc. Geral</p>
                                  <p className="text-sm text-muted-foreground">
                                    Responsável pela documentação geral do trabalho.
                                  </p>
                                </CommandItem>
                                <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                  <p>Tester</p>
                                  <p className="text-sm text-muted-foreground">
                                    Responsável por testar todo o projeto.
                                  </p>
                                </CommandItem>
                                <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                  <p>Modelagem</p>
                                  <p className="text-sm text-muted-foreground">
                                    Responsável pela criação da modelagem do projeto.
                                  </p>
                                </CommandItem>
                                <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                                  <p>Pesquisas</p>
                                  <p className="text-sm text-muted-foreground">
                                    Responsável pela pesquisa sobre IA.
                                  </p>
                                </CommandItem>
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardContent>
                ))}
              </Card>
            </div>
          </aside>
          <div className="w-3/5 grid grid-row-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed text-foreground"
              placeholder="Inclua o prompt para IA..."
            />

            <Textarea
              className="resize-none p-4 leading-relaxed text-foreground"
              placeholder="Resposta gerada pela IA"
              readOnly
            />
          </div>
          <aside className="w-1/5 space-y-6 mr-4">
            <form className="space-y-6">
              <div className="">
                <Label className="text-foreground">Modelo</Label>
                <Select disabled defaultValue="gpt3.5">
                  <SelectTrigger className="text-foreground">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className="block text-xs text-foreground italic">Você poderá customizar essa opção em breve!</span>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label className="text-foreground">Criatividade</Label>
                <Slider
                  className="bg-foreground"
                  min={0}
                  max={1}
                  step={0.1}
                />
                <span className="block text-xs text-muted-foreground italic leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
              </div>
              <Separator />

              <Button type="submit" className="w-full">
                Executar
                <Wand2 className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </aside>
        </main>
      </div>
    </ThemeProvider>
  )
}
