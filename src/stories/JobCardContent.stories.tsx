import type { Meta, StoryObj } from '@storybook/react';

import { JobCardContent } from '@/components/JobCardContent';

const meta = {
  title: 'Components/JobCardContent',
  component: JobCardContent,
  args: {
    jobOffer: {
      company: {
        logo: '',
        name: 'MB Labs',
      },
      title: 'Developer Node JS - Senior',
      requirement: "<ul>\n<li>Experi&ecirc;ncia com Javascript ES6 /Typescript, ReactJS;</li>\n<li>Experi&ecirc;ncia com Redux, Context API, NextJS framework;</li>\n<li>Experi&ecirc;ncia com programa&ccedil;&atilde;o ass&iacute;ncrona;</li>\n<li>Conhecimento em Versionamento de c&oacute;digo (Git);</li>\n<li>Experi&ecirc;ncia com ferramentas como Babel e NPM;</li>\n<li>Experi&ecirc;ncia no uso de Fetch/Axios para integra&ccedil;&atilde;o com API;</li>\n<li>Experi&ecirc;ncia com a cria&ccedil;&atilde;o de testes unit&aacute;rios e de integra&ccedil;&atilde;o (Jest, Moch, outros) com coverage de no m&iacute;nimo 90%;</li>\n<li>Experi&ecirc;ncia com a utiliza&ccedil;&atilde;o de bibliotecas para constru&ccedil;&atilde;o de frontend como MaterialUI, Chakra, AntD e outros;</li>\n<li>Experi&ecirc;ncia com Styled-components, Less, Saas e cria&ccedil;&atilde;o de temas a partir de um Wireframe;</li>\n<li>Ter atuado com as metodologias Kanban, Scrum e Incremental;</li>\n<li>Experi&ecirc;ncia com o processo de Git Flow.</li>\n</ul>",
      benefit: "<ul>\n<li>Seguro de vida e contra acidentes</li>\n<li>Descanso remunerado (at&eacute; 15 dias &uacute;teis ap&oacute;s 1 ano de contrato)</li>\n<li>Hor&aacute;rio Flex&iacute;vel, cumprindo 40 horas semanais</li>\n<li>Avalia&ccedil;&atilde;o de PDI semestralmente</li>\n<li>Benef&iacute;cio Paternidade (5 dias) e Maternidade (3 meses)</li>\n<li>Vale Presente em seu anivers&aacute;rio</li>\n<li>Voucher em dias de Happy Hour</li>\n<li>Incentivo a certifica&ccedil;&atilde;o de tecnologia</li>\n<li>Palestras e treinamentos ministrados internamente</li>\n<li>Cursos e eventos pagos pela MB</li>\n<li>Acesso ilimitado ao MB Academy (Universidade Corporativa)</li>\n<li>Equipamento fornecido pela empresa</li>\n<li>B&ocirc;nus indica&ccedil;&atilde;o: Indique seus amigos e receba um b&ocirc;nus de R$1.000,00</li>\n<li>Programa Gympass</li>\n<li>Plano odontol&oacute;gico Uniodonto</li>\n</ul>",
      activity: "<ul>\n<li>Seguir conceitos de programa&ccedil;&atilde;o como alta coes&atilde;o, baixo acoplamento, e componentiza&ccedil;&atilde;o;</li>\n<li>Participar de educa&ccedil;&atilde;o e treinamento cont&iacute;nuos para se manter atualizado;</li>\n<li>Auxiliar o l&iacute;der do time em tomadas de decis&otilde;es t&eacute;cnicas;</li>\n<li>Manter comunica&ccedil;&atilde;o ativa com o time, reportando status de in&iacute;cio, final e impedimento das atividades;</li>\n<li>Participar das reuni&otilde;es de trabalho estabelecidas pelo seu time;</li>\n<li>Documentar a &aacute;rvore Redux e/ou Context API;</li>\n<li>Documentar componentes (utilizando bibliotecas como Storybook).</li>\n</ul>",
      description: "<p dir=\"ltr\">O Bankeiro &eacute; uma consultoria global em tecnologia especializada em desenvolvimento de sistemas e aplica&ccedil;&otilde;es de alta qualidade. Fundada em 2013, a empresa tem crescido rapidamente, passando de uma startup para uma equipe de mais de 300 profissionais espalhados pelo Brasil. Nosso r&aacute;pido crescimento &eacute; um motivador constante, tornando a MB Labs um lugar desafiador e empolgante para trabalhar, onde &eacute; poss&iacute;vel alcan&ccedil;ar suas ambi&ccedil;&otilde;es de carreira.</p>\n<p dir=\"ltr\">Valorizamos a diversidade e inclus&atilde;o em nossa equipe, avaliando todas as candidaturas sem discrimina&ccedil;&atilde;o de ra&ccedil;a, g&ecirc;nero, orienta&ccedil;&atilde;o sexual, defici&ecirc;ncia ou idade. Nosso objetivo &eacute; criar um ambiente de trabalho que proporcione oportunidades necess&aacute;rias para que nossos funcion&aacute;rios possam crescer e alcan&ccedil;ar seus objetivos pessoais e profissionais.</p>",
      jobOfferStatus: {
        applications: 10
      },
      jobOfferTechnology: [
        {
          id: "1",
          title: "Node JS"
        },
        {
          id: "2",
          title: "Prisma"
        },
        {
          id: "3",
          title: "SQL"
        },
        {
          id: "4",
          title: "AWS"
        },
      ],
      views: 189,
      favorite: true,
    },
    isAccordion: false,
    onApply: () => { },
    onLike: () => { },
    onDislike: () => { },
    onFavorite: () => { },
    onShare: () => { },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The `JobCardContent` component needs to be wrapped by `AccordionTrigger`, and the `asChild` prop should be set to `true` in the `AccordionTrigger`.',
      },
    },
  },
} satisfies Meta<typeof JobCardContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className='w-[1024px]'>
      <JobCardContent {...args} />
    </div>
  )
};

