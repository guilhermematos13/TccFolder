import { Countries } from "@/utils/countries";
import { Bot } from "lucide-react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Home() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
        nextArrow: <></>,
        prevArrow: <></>
    };

    return (
        <div className="flex flex-col h-screen bg-card">
            <div className="flex w-full justify-center items-center p-8 gap-8 md:p-16 md:gap-16 lg:p-48 lg:gap-48">
                <div className="flex flex-col gap-2 w-1/2">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary p-2 rounded">
                            <Bot className="text-foreground" />
                        </div>
                        <div className="flex gap-1">
                            <p className="text-primary text-sm">GPTravel</p>
                            <p className="text-foreground text-sm">/</p>
                            <p className="text-foreground text-sm">Inteligência Artificial</p>
                        </div>
                    </div>
                    <p className="font-bold text-foreground md:text-2xl xl:text-5xl">
                        Prepare-se para <strong className="text-primary">criar</strong>
                    </p>
                    <p className="font-bold text-foreground md:text-2xl xl:text-5xl">
                        roteiros de viagens
                    </p>
                    <p className="font-bold text-foreground md:text-2xl xl:text-5xl">
                        com o <strong className="text-primary">GPTravel</strong>
                    </p>
                    <p className="text-foreground text-xs md:text-base">
                        Bem-vindo ao nosso site de Trabalho de Conclusão de Curso.
                        Este projeto faz parte de um trabalho acadêmico desenvolvido como requisito para a
                        obtenção de um diploma universitário. Aqui, você encontrará um site de criação de roteiro
                        de viagem utilizando a IA da Openai. Esperamos
                        que este site seja uma fonte valiosa de conhecimento e uma demonstração do nosso empenho e dedicação
                        ao longo da jornada acadêmica.
                    </p>
                    <Link to={"/chat"}>
                        <Button className="mt-4 w-1/2">Experimente GPTravel</Button>
                    </Link>
                </div>
                <div className="hidden md:block md:w-2/5 xl:w-1/5">
                    <Slider {...settings} >
                        {Countries.map((country) => (
                            <div key={country.country} className="relative overflow-hidden cursor-grab">
                                <img src={country.image_url} alt="#" className="h-96 w-80" />
                                <div className="w-full pt-16 pb-4 px-4 bg-card-gradient left-0 right-0 absolute bottom-0">
                                    <strong className="font-bold text-white block">{country.country}</strong>
                                    <span className="text-zinc-300 text-sm block">
                                        {country.local}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>
    )
}
