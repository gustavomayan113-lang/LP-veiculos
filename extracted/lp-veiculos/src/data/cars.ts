import onix from "@/assets/car-onix.jpg";
import strada from "@/assets/car-strada.jpg";
import corolla from "@/assets/car-corolla.jpg";
import hb20 from "@/assets/car-hb20.jpg";
import gol from "@/assets/car-gol.jpg";
import compass from "@/assets/car-compass.jpg";
import tracker from "@/assets/car-tracker.jpg";

// Contato da loja. Troque pelo número real de WhatsApp (DDI + DDD + número).
export const STORE = {
  name: "LP Veículos",
  whatsapp: "5575999999999",
  whatsappLabel: "(75) 99999-9999",
  city: "Castro Alves",
  state: "BA",
  hours: "Seg a Sex: 8h às 18h · Sáb: 8h às 13h",
};

export type Categoria = "Hatch" | "Sedã" | "SUV" | "Picape";

export type Car = {
  id: string;
  nome: string;
  versao: string;
  ano: string;
  preco: number;
  km: number;
  cor: string;
  categoria: Categoria;
  imagem: string;
  destaque?: boolean;
  ficha: { label: string; value: string }[];
  opcionais: string[];
};

export const CARS: Car[] = [
  {
    id: "hatch-turbo-2022",
    nome: "Hatch Turbo",
    versao: "Premier 1.0 Turbo Flex Aut.",
    ano: "2022/2022",
    preco: 89900,
    km: 34500,
    cor: "Branco",
    categoria: "Hatch",
    imagem: onix,
    destaque: true,
    ficha: [
      { label: "Motor", value: "1.0 Turbo 12V" },
      { label: "Potência", value: "116 cv (etanol)" },
      { label: "Combustível", value: "Flex" },
      { label: "Câmbio", value: "Automático 6 marchas" },
      { label: "Portas", value: "4" },
      { label: "Consumo médio", value: "13,5 km/l (cidade)" },
      { label: "Porta-malas", value: "275 litros" },
      { label: "Final da placa", value: "4" },
    ],
    opcionais: ["Ar-condicionado digital", "Central multimídia", "Câmera de ré", "Direção elétrica", "Vidros e travas elétricas", "Rodas de liga leve"],
  },
  {
    id: "picape-cabine-dupla-2023",
    nome: "Picape Cabine Dupla",
    versao: "Volcano 1.3 Turbo Flex Aut.",
    ano: "2023/2023",
    preco: 142900,
    km: 21800,
    cor: "Vermelho",
    categoria: "Picape",
    imagem: strada,
    destaque: true,
    ficha: [
      { label: "Motor", value: "1.3 Turbo 16V" },
      { label: "Potência", value: "185 cv (etanol)" },
      { label: "Combustível", value: "Flex" },
      { label: "Câmbio", value: "Automático CVT" },
      { label: "Portas", value: "4" },
      { label: "Caçamba", value: "844 litros" },
      { label: "Capacidade de carga", value: "650 kg" },
      { label: "Final da placa", value: "7" },
    ],
    opcionais: ["Ar-condicionado", "Central multimídia 10\"", "Câmera de ré", "Controle de estabilidade", "Protetor de caçamba", "Faróis full LED"],
  },
  {
    id: "sedan-executivo-2021",
    nome: "Sedã Executivo",
    versao: "XEi 2.0 Flex Aut.",
    ano: "2021/2021",
    preco: 124500,
    km: 42300,
    cor: "Preto",
    categoria: "Sedã",
    imagem: corolla,
    destaque: true,
    ficha: [
      { label: "Motor", value: "2.0 16V Dynamic Force" },
      { label: "Potência", value: "177 cv (etanol)" },
      { label: "Combustível", value: "Flex" },
      { label: "Câmbio", value: "Automático CVT" },
      { label: "Portas", value: "4" },
      { label: "Consumo médio", value: "11,8 km/l (cidade)" },
      { label: "Porta-malas", value: "470 litros" },
      { label: "Final da placa", value: "2" },
    ],
    opcionais: ["Bancos em couro", "Ar-condicionado digital", "Piloto automático", "Sensor de estacionamento", "Central multimídia", "Controle de tração"],
  },
  {
    id: "hatch-sport-2022",
    nome: "Hatch Sport",
    versao: "Sense 1.6 Flex Aut.",
    ano: "2022/2022",
    preco: 79900,
    km: 38700,
    cor: "Vermelho",
    categoria: "Hatch",
    imagem: hb20,
    ficha: [
      { label: "Motor", value: "1.6 16V" },
      { label: "Potência", value: "128 cv (etanol)" },
      { label: "Combustível", value: "Flex" },
      { label: "Câmbio", value: "Automático 6 marchas" },
      { label: "Portas", value: "4" },
      { label: "Consumo médio", value: "12,1 km/l (cidade)" },
      { label: "Porta-malas", value: "300 litros" },
      { label: "Final da placa", value: "9" },
    ],
    opcionais: ["Ar-condicionado", "Multimídia 8\"", "Câmera de ré", "Direção elétrica", "Vidros e travas elétricas", "Alarme"],
  },
  {
    id: "compacto-economico-2020",
    nome: "Compacto Econômico",
    versao: "Trendline 1.0 Flex",
    ano: "2020/2020",
    preco: 48900,
    km: 56200,
    cor: "Branco",
    categoria: "Hatch",
    imagem: gol,
    ficha: [
      { label: "Motor", value: "1.0 12V" },
      { label: "Potência", value: "84 cv (etanol)" },
      { label: "Combustível", value: "Flex" },
      { label: "Câmbio", value: "Manual 5 marchas" },
      { label: "Portas", value: "4" },
      { label: "Consumo médio", value: "13,9 km/l (cidade)" },
      { label: "Porta-malas", value: "285 litros" },
      { label: "Final da placa", value: "5" },
    ],
    opcionais: ["Ar-condicionado", "Direção elétrica", "Vidros e travas elétricas", "Som com Bluetooth", "Alarme"],
  },
  {
    id: "suv-premium-2021",
    nome: "SUV Premium",
    versao: "Longitude 1.3 Turbo Flex Aut.",
    ano: "2021/2021",
    preco: 149900,
    km: 39800,
    cor: "Preto",
    categoria: "SUV",
    imagem: compass,
    destaque: true,
    ficha: [
      { label: "Motor", value: "1.3 Turbo 16V" },
      { label: "Potência", value: "185 cv (etanol)" },
      { label: "Combustível", value: "Flex" },
      { label: "Câmbio", value: "Automático 6 marchas" },
      { label: "Portas", value: "4" },
      { label: "Consumo médio", value: "10,6 km/l (cidade)" },
      { label: "Porta-malas", value: "410 litros" },
      { label: "Final da placa", value: "1" },
    ],
    opcionais: ["Bancos em couro", "Teto solar", "Multimídia 10,1\"", "Câmera 360°", "Sensor de estacionamento", "Partida sem chave"],
  },
  {
    id: "suv-familia-2022",
    nome: "SUV Família",
    versao: "LTZ 1.2 Turbo Flex Aut.",
    ano: "2022/2022",
    preco: 112900,
    km: 29600,
    cor: "Branco",
    categoria: "SUV",
    imagem: tracker,
    ficha: [
      { label: "Motor", value: "1.2 Turbo 12V" },
      { label: "Potência", value: "133 cv (etanol)" },
      { label: "Combustível", value: "Flex" },
      { label: "Câmbio", value: "Automático 6 marchas" },
      { label: "Portas", value: "4" },
      { label: "Consumo médio", value: "11,4 km/l (cidade)" },
      { label: "Porta-malas", value: "393 litros" },
      { label: "Final da placa", value: "6" },
    ],
    opcionais: ["Ar-condicionado digital", "Multimídia com espelhamento", "Câmera de ré", "Wi-Fi nativo", "Rodas de liga leve", "Barras no teto"],
  },
];

export const CATEGORIAS: ("Todos" | Categoria)[] = ["Todos", "Hatch", "Sedã", "SUV", "Picape"];

export const formatPrice = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export const formatKm = (n: number) => `${n.toLocaleString("pt-BR")} km`;

export const whatsappLink = (message: string) =>
  `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
