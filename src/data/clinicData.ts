import heroClinicImg from '../assets/images/clinica_fisioterapia_hero_1795528296795.jpg';
import rpgPostureImg from '../assets/images/especialidade_rpg_postura_1795528297355.jpg';
import pilatesClinicImg from '../assets/images/especialidade_pilates_clinico_1795528297437.jpg';
import portraitMaizaImg from '../assets/images/sobre_maiza_cunha_1795528298084.jpg';

import type {
  CareStep,
  CredentialItem,
  MetricItem,
  SpecialtyItem,
  TestimonialItem,
} from '../types';

export const CLINIC_INFO = {
  brandName: 'Maiza Cunha Fisioterapia',
  professionalName: 'Maiza Cunha',
  roleTitle: 'Fisioterapeuta · Reabilitação Postural e Funcional',
  address: 'SEU ENDEREÇO AQUI',
  phone: '(00) 00000-0000',
  whatsappDigits: '5500000000000',
  hours: 'Não informado',
  email: 'contato@maizacunhafisioterapia.com.br',
};

export const HERO_MEDIA = {
  image: heroClinicImg,
  imageAlt:
    'Consultório da Maiza Cunha Fisioterapia com iluminação natural, maca clínica e equipamentos de reabilitação funcional',
  caption: 'Consultório equipado para avaliação biomecânica e atendimento individualizado',
};

export const ABOUT_MEDIA = {
  image: portraitMaizaImg,
  imageAlt:
    'Fisioterapeuta Maiza Cunha em consultório clínico com modelo anatômico da coluna vertebral',
  caption: 'Atendimento conduzido integralmente pela fisioterapeuta responsável',
};

export const HERO_METRICS: MetricItem[] = [
  {
    id: 'experiencia',
    value: 12,
    suffix: '+',
    unit: 'anos',
    label: 'Atuação clínica dedicada à reabilitação musculoesquelética e postural',
  },
  {
    id: 'atendimentos',
    value: 3400,
    suffix: '+',
    unit: 'sessões',
    label: 'Atendimentos individuais documentados com acompanhamento evolutivo',
  },
  {
    id: 'adesao',
    value: 94,
    suffix: '%',
    unit: 'em 12 semanas',
    label: 'Índice de recuperação funcional em protocolos completos de reabilitação',
  },
  {
    id: 'sessao',
    value: 60,
    suffix: '',
    unit: 'minutos',
    label: 'Tempo exclusivo reservado por consulta para precisão técnica contínua',
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'rpg',
    index: '01',
    title: 'Reeducação Postural Global (RPG)',
    bookingLabel: 'Reeducação Postural Global (RPG)',
    category: 'Alinhamento Axial e Cadeias Musculares',
    duration: '60 min · Sessão individual',
    summary:
      'Correção estrutural das assimetrias posturais e descompressão articular por meio de posturas ativas e controle respiratório.',
    description:
      'Método fisioterapêutico voltado ao reequilíbrio das cadeias musculares estáticas e dinâmicas. Indicado para tratar a origem mecânica das dores vertebrais, desvios posturais e sobrecargas cervicais e lombares sem compensações.',
    indications: [
      'Hérnias de disco, protusões e ciatalgias recorrentes',
      'Escoliose, hiperlordose e hipercifose torácica',
      'Cervicalgia tensional e disfunções da ATM',
    ],
    methodology:
      'Avaliação postural estática e dinâmica combinada a trações suaves mantidas em expiração profunda para alongamento global progressivo.',
    image: rpgPostureImg,
    imageAlt:
      'Fisioterapeuta realizando avaliação e alinhamento postural cervical-torácico em consultório',
    featured: true,
  },
  {
    id: 'pilates',
    index: '02',
    title: 'Pilates Clínico Terapêutico',
    bookingLabel: 'Pilates Clínico Terapêutico',
    category: 'Estabilização Segmentar e Controle Motor',
    duration: '55 min · Atendimento assistido',
    summary:
      'Fortalecimento profundo da musculatura estabilizadora da coluna com prescrição adaptada ao histórico clínico de cada paciente.',
    description:
      'Diferente da prática convencional em academia, o Pilates Clínico é prescrito e supervisionado após exame cinesiológico. Utiliza aparelhos com resistência calibrada por molas para restaurar estabilidade articular e mobilidade segura.',
    indications: [
      'Instabilidade lombar e prevenção de recidivas de dor',
      'Recuperação funcional após cirurgias ortopédicas',
      'Acompanhamento postural na gestação e pós-parto',
    ],
    methodology:
      'Exercícios em Reformer, Cadillac e solo com progressão gradual de carga, foco em centro de força e coordenação respiratória.',
    image: pilatesClinicImg,
    imageAlt:
      'Sala de Pilates Clínico equipada com Reformer de madeira e acompanhamento fisioterapêutico',
  },
  {
    id: 'reabilitacao',
    index: '03',
    title: 'Reabilitação Ortopédica e Funcional',
    bookingLabel: 'Reabilitação Ortopédica e Funcional',
    category: 'Pós-Operatório, Trauma e Esporte',
    duration: '60 min · Protocolo progressivo',
    summary:
      'Restauração sistemática de amplitude de movimento, força muscular e retorno seguro às atividades cotidianas e esportivas.',
    description:
      'Conduta clínica estruturada em fases objetivas de recuperação tecidual. Integra terapia manual miofascial, mobilização articular e cinesioterapia avançada para acelerar a recuperação sem comprometer a integridade biológica dos tecidos.',
    indications: [
      'Pós-operatório de joelho (LCA, menisco), ombro e coluna',
      'Tendinopatias, bursites, entorses e lesões ligamentares',
      'Rigidez articular e déficits de equilíbrio neuromuscular',
    ],
    methodology:
      'Mensuração periódica de goniometria, força e testes funcionais para orientar cada etapa até a alta definitiva.',
  },
  {
    id: 'ergonomia',
    index: '04',
    title: 'Fisioterapia Preventiva e Ergonomia',
    bookingLabel: 'Avaliação Biomecânica Inicial',
    category: 'Longevidade Corporal e Desempenho',
    duration: '50 min · Mapeamento preventivo',
    summary:
      'Identificação precoce de padrões de sobrecarga mecânica para evitar lesões ocupacionais e preservar a qualidade do movimento.',
    description:
      'Protocolo indicado para profissionais com longas jornadas sentadas, praticantes de atividade física e pacientes em manutenção após a alta clínica. Mapeia encurtamentos, fraquezas assimétricas e hábitos posturais de risco.',
    indications: [
      'Prevenção de LER/DORT e sobrecarga em trabalho remoto',
      'Ajuste biomecânico para corredores e praticantes de musculação',
      'Manutenção da mobilidade articular no envelhecimento ativo',
    ],
    methodology:
      'Rastreio funcional de movimento, orientações ergonômicas práticas e rotina personalizada de mobilidade.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'helena',
    name: 'Helena Vasconcelos',
    context: 'Arquiteta · 42 anos',
    specialty: 'Reeducação Postural Global (RPG)',
    timeframe: 'Alta funcional em 10 semanas',
    quote:
      'Convivi por três anos com crises lombares recorrentes que limitavam minhas visitas a obras. Após a avaliação biomecânica e dez semanas de RPG, a dor irradiada cessou e recuperei a segurança para manter minha rotina integral.',
    outcome: 'Retorno completo à jornada profissional sem episódios de travamento lombar.',
  },
  {
    id: 'ricardo',
    name: 'Ricardo Albuquerque',
    context: 'Engenheiro Civil · 36 anos',
    specialty: 'Reabilitação Ortopédica e Funcional',
    timeframe: 'Pós-operatório de LCA · 16 semanas',
    quote:
      'No pós-operatório de ligamento cruzado anterior, cada etapa foi explicada com critérios claros de evolução. A progressão controlada de carga devolveu estabilidade ao joelho e confiança para retomar minhas corridas.',
    outcome: 'Recuperação integral da amplitude de flexão e simetria muscular entre membros.',
  },
  {
    id: 'camila',
    name: 'Camila Mendonça',
    context: 'Médica Pediatra · 39 anos',
    specialty: 'Pilates Clínico Terapêutico',
    timeframe: 'Acompanhamento contínuo · 6 meses',
    quote:
      'Os plantões intensos geravam contraturas cervicais constantes e cefaleia tensional. O Pilates Clínico individualizado fortaleceu minha estabilização escapular e transformou minha postura no consultório.',
    outcome: 'Redução expressiva das tensões cervicais e melhora objetiva da resistência postural.',
  },
];

export const ACADEMIC_CREDENTIALS: CredentialItem[] = [
  {
    id: 'graduacao',
    code: 'Graduação',
    title: 'Bacharelado em Fisioterapia',
    detail: 'Formação generalista com ênfase em anatomia clínica, cinesiologia aplicada e semiologia ortopédica.',
  },
  {
    id: 'rpg-formacao',
    code: 'Especialização',
    title: 'Formação Internacional em RPG',
    detail: 'Capacitação clínica em Reeducação Postural Global para tratamento de desvios axiais e algias vertebrais.',
  },
  {
    id: 'ortopedia',
    code: 'Pós-Graduação',
    title: 'Fisioterapia Ortopédica e Terapia Manual',
    detail: 'Especialização em reabilitação pós-operatória, mobilização articular e controle neuromuscular.',
  },
  {
    id: 'pilates-clinico',
    code: 'Certificação',
    title: 'Pilates Clínico Baseado em Evidências',
    detail: 'Prescrição terapêutica em aparelhos e solo direcionada a patologias da coluna e estabilização central.',
  },
];

export const CARE_STEPS: CareStep[] = [
  {
    index: '01',
    title: 'Avaliação Biomecânica Integral',
    description:
      'Anamnese detalhada, análise postural, testes ortopédicos específicos e definição de metas mensuráveis na primeira consulta.',
  },
  {
    index: '02',
    title: 'Plano Terapêutico Individualizado',
    description:
      'Seleção precisa das técnicas manuais, posturas de RPG ou exercícios de Pilates Clínico adequados à fase do seu quadro.',
  },
  {
    index: '03',
    title: 'Progressão Funcional e Alta Segura',
    description:
      'Reavaliações periódicas de mobilidade, força e dor até o restabelecimento da autonomia corporal e prevenção de recidivas.',
  },
];
