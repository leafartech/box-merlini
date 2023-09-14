import { useEffect, useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import CardNormal from '../CardNormal'
import Check from '../Check'
import Dropdown from '../Dropdown'
import HeroFlex from '../HeroFlex'
import Section from '../Section'
import Text from '../Text'
import Comparison from '../comparison'
import styles from './Main.module.css'
import Header from '../Header'
import MySwiper from '../MySwiper'
import CountdownTimer from '../Countdown'

export default function Main() {
    const faq = [
        { title: 'Preciso fazer reservas com antecedência?', text: ['A reservas são por ordem de chegada. ', 'Não existe tempo mínimo para fazer reservas.', 'Depende apenas da disponibilidade de vagas no período para a unidade escolhida.', 'A antecipação da reserva e programação da viajem é sempre bem-vinda.'] },
        { title: 'Para quais períodos é importante fazer reservas com antecedência?', text: ['Os períodos de alta temporada, feriados nacionais e eventos programados são sempre bem procurados.', 'A Rede Candeias faz reservas para as unidades por ordem de chegada.', 'Não existe tempo mínimo para fazer reservas.', 'Depende apenas da disponibilidade de vagas. '] },
        { title: 'Para a alta temporada quanto tempo de antecedência eu preciso reservar?', text: ['As reservas são por ordem de chegada.', 'Sugerimos mínimo de 90 dias de antecedência para o mês de janeiro dependendo da unidade.', 'Para o réveillon é necessário reservar no primeiro semestre. (Lembrando que toda a rede hoteleira do país tem 100% de lotação nesse período)', 'O ideal é no mês de março. Dia 15/março é o dia oficial de abertura de reservas para a alta temporada.', 'Desde então é possível reservar e garantir suas férias inclusive o Candeias parcelas as diárias em até 12 vezes sem juros.', 'Não existe tempo mínimo para fazer reservas. Depende apenas da disponibilidade de vagas no período para a unidade escolhida.'] },
        { title: 'Quando faço a reserva já tenho que pagar?', text: [`Sim.`, `No momento da reserva já é feito o pagamento que pode ser parcelado em até 12 vezes. `] },
        {
            title: 'Para feriados preciso reservar com mais antecedências?', text: [`Os períodos de alta temporada, feriados nacionais e eventos programados são sempre bem procurados.`,
                `Sugerimos para mês de janeiro mínimo de 90 dias.`,
                `Feriados mínimo de 30 dias, réveillon logo que abrirem as reservas que acontece no dia 15/março.`, `
        A Rede Candeias faz reservas para as unidades por ordem de chegada.`, `
        Não existe tempo mínimo para fazer reservas. Depende apenas da disponibilidade de vagas. `]
        },
        { title: 'Como pago a reserva?', text: [`As diárias podem ser pagas com cartão de crédito em até 12 vezes sem juros ou pix ou transferência bancária.`] },
        { title: 'Como eu escolho o hotel e faço as reservas?', text: [`Pode ser pelo aplicativo que você baixa no seu celular, ali você tem todas as informações do hotel:`, `fotos, tipos de quartos, tipos de cama, pode entrar nos quartos, no banheiro, localização, o que tem perto, área de lazer, valor por pessoa, o que levar, etc...`, `Pode fazer a reserva direto no app ou pelo 0800 0072252,  ou pelo site www.clubecandeias.com.br ou ainda nas lojas físicas com atendimento pessoal.`] },
        {
            title: 'Quais as datas da alta e da baixa temporada?', text: [`Alta temporada é de 20/12 até 24/01.`, `Baixa temporada de 01/03 até 19/12
        `, `Média temporada de 26/01 até 28/02 e feriados nacionais.`, `Baixíssima temporada de 02/05 até 31/08 pernoites de domingo a quinta feira exceto feriados e mês de julho.`, `Altíssima temporada de 26/12 até 04/01.`]
        },
        {
            title: 'Tem diferença nos preços de baixa e alta temporada?', text: [`Os preços podem variar devido a alta procura.`, `Alta temporada é de 20/12 até 24/01 (duração aproximada de um mês)`, `
        Baixa temporada de 01/03 até 19/12 (quase o ano inteiro)`, `
        Média temporada de 26/01 até 28/02 e feriados nacionais`, `
        Baixíssima temporada de 02/05 até 31/08 pernoites de domingo a quinta feira exceto feriados e mês de julho. (30% mais barato que na baixa temporada)`, `
        Altíssima temporada de 26/12 até 04/01.`]
        },
        {
            title: 'Posso reservar mais de um quarto ou apartamento?', text: [`Cada cota do Clube Candeias dá direito a um aposento, seja quartos de hotel ou apartamento mobilado.`, `
        Por isso o Candeias tem títulos com uma, duas, três e quatro cotas.`, `Tem associado que passa janeiro inteiro na praia, só volta depois do carnaval...
        `]
        },
        {
            title: 'Posso parcelar minhas reservas?', text: [`Sim.`, `As reservas podem ser parceladas no cartão de crédito em até 12 vezes sem juros. Só não reserva fiado...
        `]
        },
        {
            title: 'Quantas vezes por ano posso usar?', text: [`Nas unidades próprias a utilização é livre de 01/março a 19/dezembro e restrita a um pacote de 7 diárias no período de 20/dezembro até o carnaval.`, `
        Nas unidades da rede credenciada a utilização é livre.`, `Vai viajar até enjoar...`]
        },
        {
            title: 'Tem limites de utilização?', text: [`Nas unidades próprias a utilização é livre de 01/março a 19/dezembro e restrita a um pacote de 7 diárias no período de 20/dezembro até o carnaval.
        Nas unidades da rede credenciada a utilização é livre. Vai ser de enjoar...`]
        },
        {
            title: 'Posso levar convidados?', text: [`Sim. Você pode levar quem quiser como convidado até o limite da capacidade do aposento escolhido.`, ` E seu convidado paga o mesmo valor de associado.`, ` Sem taxas extras.
        `]
        },
        {
            title: 'Quantas pessoas posso levar?', text: [`Nós temos aposentos até para 10 pessoas.`, `
        Você pode levar a quantidade de convidados de acordo com a capacidade do aposento escolhido.`, `Não é permitido levar excedentes. (mais do que o aposento acomoda)
        `]
        },
        { title: 'Criança também paga?', text: [`Elas usam, mas só pagam a partir dos 5 anos.`] },
        {
            title: 'Nas Rede credenciada as diárias são o mesmo valor das unidades próprias?', text: [`O preço das diárias variam de hotel para hotel.
        `]
        },
        {
            title: 'Sempre vai ter vaga para mim?', text: [`A Rede Candeias funciona como qualquer hotel as reservas são feitas por ordem de chegada. 
        `, `Sugerimos mínimo de 90 dias de antecedência para o mês de janeiro dependendo da unidade.
        `, `Para o réveillon é necessário reservar no primeiro semestre, como qualquer hotel no Brasil. (Lembrando que toda a rede hoteleira do país tem 100% de lotação nesse período)
        `, `Dia 15/março é o dia oficial de abertura de reservas para a alta temporada.`, `Desde então é possível reservar e garantir suas férias, inclusive o Candeias parcelas as diárias em até 12 vezes sem juros.
        `, `Não existe tempo mínimo para fazer reservas. `, `Depende apenas da disponibilidade de vagas no período para a unidade escolhida.`]
        },
        {
            title: 'Quem são os dependentes?', text: [`Todos os legais. Cônjuge, filhos solteiros até 24 anos e pais do titular. Sogro e sogra não...
        `, `Se for solteiro pode incluir irmãos menores de 18 anos.`, `Pode também incluir a noiva ou namorada, embora eu não aconselhe.
        `]
        },
        {
            title: 'Os dependentes podem viajar sozinhos?', text: [`Sim. Inclusive podem levar convidados.`, `Mas o pai vai ficar sabendo.
        `]
        },
        {
            title: 'Posso alterar minha reserva?', text: [`Claro que sim! O Clube é seu.`, `Conforme Regulamento Geral de Reservas.
        `]
        },
        {
            title: 'Tem café da manhã?', text: [`Em todos os hotéis o café da manhã já está incluso.`, `E são de altíssima qualidade!
        `]
        },
        {
            title: 'Meus convidados pagam mais?', text: [`Não, os convidados pagam o mesmo valor que você associado.
        `]
        },
        { title: 'Posso emprestar meu título?', text: [`Não.`] },
        {
            title: 'Posso levar quem eu quiser?', text: [`Sim, desde que seja uma pessoa legal!!`, `Mas sempre na presença do associado ou dependente.
        `]
        },
        {
            title: 'Posso mandar convidados sozinhos?', text: [`Não, o convidado só pode utilizar na presença do associado ou dependente. 
        `, `Você pode indicar seu amigo para se tornar associado e ganhar um bônus em diárias.
        `]
        },
        {
            title: 'Posso levar pets?', text: [`Sim, quase todas as unidades aceitam nossos amiguinhos.
        `]
        },
    ]

    function buttonClicked(e) {
        setModal(!modal)
    }

    return (
        <>
            <Header buttonClicked={buttonClicked} />
            <main className={styles.main}>
                {/* <Section bg={true} top={true}>
                    <Text secondary={true} start={false} bg={true} main="Hotéis de altíssimo nível nos melhores pontos turísticos com economia EXCLUSIVA! "><p>Alguns dos hotéis que você terá acesso fazendo parte do Candeias</p></Text>
                    <div className={styles['card-group']}>
                        <Card city="Unidade Própria Candeias Ilhas Gregas - Balneário Camboriú/SC" path="1">
                            <p>Apartamentos mobiliados acomodam até 10 pessoas</p> <p style={{ marginTop: '8px' }}>Diárias a partir de R$35,00 por pessoa.</p>
                        </Card>
                        <Card city="Unidade Própria Candeias Hotel Central - Balneário Camboriú/SC" path="9">
                            <p>A uma quadra do calçadão com café da manhã incluso. Com todas as sacadas vista mar.</p> <p style={{ marginTop: '8px' }}>Diárias a partir de R$ 45,00 por pessoa.</p>
                        </Card>
                        <Card city="Unidade Própria Candeias Hotel - Guaratuba/PR" path="5">
                            <p>Hotel com piscina adulto e infantil, playground, sala de jogos e quadras de esporte. </p><p style={{ marginTop: '8px' }}>Com café da manhã incluso.</p><p style={{ marginTop: '8px' }}> Diárias a partir de R$ 40,00 por pessoa.</p>
                        </Card>
                        <Card city="Unidade Própria Candeias Hotel Alineville - Gramado/RS" path="4">
                            <p>Hotel Alineville que proporciona todo o romantismo da cidade de Gramado com um impecável café colonial.</p><p style={{ marginTop: '8px' }}> Diárias a partir de R$ 103,25 por pessoa.</p>
                        </Card>
                        <Card city="Unidade Própria Candeias Hotel Village do Sol - Natal/RN" path="6">
                            <p>Com o candeias você pode contemplar toda a beleza do Nordeste em Natal.</p><p style={{ marginTop: '8px' }}> Um hotel 5 estrelas com um delicioso café da manhã incluso.</p> <p style={{ marginTop: '8px' }}>Diárias a partir de R$ 69,00 por pessoa.</p>
                        </Card>
                        <Card city="Unidade Própria Candeias Hotel Pousada Guarany - Bonito/MS" path="7">
                            <p>A capital ecológica do Brasil é o destino preferido dos europeus!</p><p style={{ marginTop: '8px' }}> Bonito possui aquário natural para mergulho com os peixes, Gruta do Lago Azul, Barra do Rio Sucuri e muito mais.</p><p style={{ marginTop: '8px'}}>Diárias a partir de R$43,00</p>
                        </Card>
                        <Card city="Unidade Própria Candeias - Foz do Iguaçu/PR" path="3">
                            <p>A segunda cidade mais visitada do Brasil! Hotel com piscina adulto e infantil.</p><p style={{ marginTop: '8px' }}> Além das Cataratas, Foz possui o parque das aves, bar de gelo, museu de cera, passeios na Argentina, compras no Paraguai e muito mais.</p>
                            <p style={{ marginTop: '8px' }}>Diárias a partir de R$ 43,00 por pessoa.</p>
                        </Card>
                        <Card
                            city="Unidade Própria Candeias Residencial Candeias - Guarujá/SP"
                            path="8">
                            <p>Hotel com café da manhã incluso. </p><p style={{ marginTop: '8px' }}>A principal praia de São Paulo! O melhor destino para desfrutar as beleza naturais, badalação e cultura.</p>
                        </Card>
                        <Card city="Unidade Própria Candeias Hotel Parador da Cachoeira - Florianópolis/SC" path="10">
                            <p>Hotel com café da manhã incluso e piscina.</p><p style={{ marginTop: '8px' }}> Localizado na Ilha da Magia próximo a praia de Jurerê internacional, Ingleses e Canasvieiras. </p><p style={{ marginTop: '8px' }}>Diárias a partir de R$ 55,00 por pessoa.</p>
                        </Card>
                        <Card city="Unidade Própria Candeias Hotel Costa Verde - Bombinhas/SC" path="12">
                            <p>Hotel em frente a praia com café da manhã incluso.</p><p style={{ marginTop: '8px' }}> Conta com piscina aquecida e climatizada para todas as estações.</p><p style={{ marginTop: '8px' }}> Diárias a partir de R$ 55,00 por pessoa.</p>
                        </Card>
                        <Card city="Unidade Própria Candeias Residencial Piçarras - Balneário Piçarras/SC" path="11">
                            <p>Complexo com parque aquático, área de esportes, bosque com churrasqueiras e redário.</p><p style={{ marginTop: '8px' }}>Apartamentos mobiliados para até 10 pessoas. </p><p style={{ marginTop: '8px' }}>Desconto no passaporte do Beto Carreiro e entrada direto sem pegar fila. Diárias a partir de R$ 35,00 por pessoa.</p>
                        </Card>
                        <Card city="Unidade Própria Candeias - Balneário Camboriú/SC" path="2">
                            <p> Condomínio fechado pé na areia.</p><p style={{ marginTop: '8px' }}> Com chalés mobiliados com cozinha para até 8 pessoas.</p><p style={{ marginTop: '8px' }}> Além de possuir parque aquático.</p><p style={{ marginTop: '8px' }}> Diárias a partir de R$ 35,00 por pessoa.</p>
                        </Card>
                    </div>
                    <Text bg={true} main="São mais de 40 unidades PRÓPRIAS de norte a sul do Brasil">
                    </Text>
                </Section> */}
                <Section>
                    <Text main="Promoção por tempo limitado"></Text>
                    <div style={{ maxWidth: '1020px' }} className={styles.secSect}>
                        <div className={styles.alert}>
                            <h5>Encerra em:</h5>
                            <CountdownTimer />
                        </div>
                        <div className={styles.price_group}>
                            <div className={styles.price_item}>
                                <span>12x de</span>
                                <h2>R$436</h2>
                                <a href="#cadastro" className={styles.btn}>Aproveitar promoção</a>
                            </div>
                            <div className={styles.price_item}>
                                <span>24x de</span>
                                <h2>R$263</h2>
                                <a href="#cadastro" className={styles.btn}>Aproveitar promoção</a>
                            </div>
                            <div className={styles.price_item}>
                                <span>36x de</span>
                                <h2>R$198</h2>
                                <a href="#cadastro" className={styles.btn}>Aproveitar promoção</a>
                            </div>
                        </div>
                        <div className={styles.priceDetails}>
                            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Pagamento uma "única vez na vida".</p>
                            <p style={{ textAlign: 'center' }}>Com opções de parcelamento em até 36x em débito em conta ou cartão recorrente.</p>
                            <p style={{ textAlign: 'center' }}>Sem nenhum custo adicional, taxas de manutenção ou anuidade.</p>
                            <p style={{ textAlign: 'center' }}>35% de desconto para pagamento à vista.</p>
                        </div>
                        {/* <Button link={true} linkForms={true}>Quero participar do Clube Candeias</Button> */}
                    </div>
                    <div style={{ marginTop: '72px' }}>
                    </div>
                    <Text main="Promoções para os principais destinos do Brasil:" bg={false}></Text>
                    <MySwiper second={true} />
                </Section>
                <Section pd={true}>
                    <HeroFlex linkForms={true} link={true} arr={true} main="Como funciona o Clube Candeiras?" subtitle={[`O Candeias é uma Rede de Hospedagem SEM FINS LUCRATIVOS, por isso o valor dos hotéis são tão em conta!`, 'Segurança e qualidade com 55 anos de tradição.  A sua reserva é nossa responsabilidade.', `E você se associa uma única vez e se torna sócio para SEMPRE.`, `Aqui o dinheiro fica no seu bolso para aproveitar cada momento com a sua família.`, `Tornando-se associado, você terá direito a férias vitalícias!`, `Nossos hotéis são exclusivos para os Associados, nos melhores pontos turísticos do Brasil e do mundo.`, `Você viaja quantas vezes quiser durante o ano todo e ainda pode levar seus convidados sem taxas extras.`]}>
                        <div className={styles['div-img']}>
                            <img src="./images/work.png" alt="Como funciona o Clube Candeias?" className={styles.img} />
                            <img src="./images/abs.png" alt="Como funciona o Clube Candeias?" className={styles.abs} />
                        </div>
                    </HeroFlex>
                </Section>
                <Section bottom={true}>
                    {/* <div className={styles.flex}>
                        <Comparison buttonClicked={e => buttonClicked(e)} text={['Preços superfaturados com taxas extras.', 'Pessoas reclamando de hospedagens canceladas em cima da hora sem qualquer responsabilidade com a sua reserva.', 'Aposentos mal cuidados cheirando mofo. Chuveiros que não esquentam e sem nenhuma segurança.', 'Reclamações de quartos com câmeras escondidas que filmam os hóspedes.']}>
                            <img src="./images/comparison.png" alt="outras empresas" />
                        </Comparison>
                        <Comparison buttonClicked={e => buttonClicked(e)} ok={true} text={['Economia de até 60% em hospedagens sem taxas extras.', 'Após a reserva, você é nossa responsabilidade. Só você tem o direito de cancelar a reserva.', 'Segurança das unidades. O candeias é responsável pelo seu aposento.', 'Você poderá viajar para sempre sem mensalidades, sem anuidade, taxas de manutenções, e nenhum custo adicional. Você só irá pagar quando usar as diárias dos hotéis!']}>
                            <img src="./images/logo.png" alt="outras empresas" />
                        </Comparison>
                    </div> */}
                    <div className={`${styles.center}`}>
                        <Text main="Principais benefícios de ser um associado Candeias"></Text>
                    </div>
                    <MySwiper />
                    <Button link={true} linkForms={true}>Venha fazer parte do maior Clube de Férias do Mundo!</Button>
                    {/* <Button link={true} pd={true} path="/">Venha fazer parte do maior Clube de Férias do Mundo!</Button> */}
                </Section>
                <Section bg={true} pd={true}>
                    <Text bg={true} main="Quem é associado Candeias já aprovou!"></Text>
                    <div className={styles.flex}>
                        <img className={styles.wpp} src="./images/testmonials/1.png" alt="Avaliação/Feedback de cliente" />
                        <img className={styles.wpp} src="./images/testmonials/2.png" alt="Avaliação/Feedback de cliente" />
                        <img className={styles.wpp} src="./images/testmonials/3.png" alt="Avaliação/Feedback de cliente" />
                    </div>
                    <div className={styles.checksec}>
                        <Text bg={true} main=" No primeiro ano o investimento do título já se paga!"></Text>
                        <Check second={true} />
                    </div>
                    <div>
                        <Text bg={true} main="Promoção por tempo limitado"></Text>
                    </div>
                    <Button link={true} linkForms={true}>Quero participar do Clube Candeias</Button>
                </Section>
                <Section bottom={true} pd={true}>
                    <Text main="O que a mídia diz sobre o Clube Candeias"></Text>
                    <div className={styles.flex}>
                        <CardNormal text={`"O Clube Candeias revolucionou a forma como as pessoas viajam. Com descontos de até 40% em hotéis de alto padrão, os associados podem explorar os principais destinos do Brasil e do mundo. Uma opção vantajosa e segura para quem busca férias inesquecíveis."`}><img src="./images/uol.png" alt="Notícia UOL" /></CardNormal>
                        <CardNormal text={`"O Clube Candeias oferece aos seus associados uma experiência de hospedagem única. Com uma ampla rede de hotéis próprios, localizados nos melhores pontos turísticos, o Clube garante qualidade, conforto e descontos exclusivos. Uma escolha inteligente para quem quer aproveitar ao máximo suas viagens."`}>
                            <img src="./images/veja.png" alt="Notícia UOL" />
                        </CardNormal>
                        <CardNormal text={`"Se você busca economia, segurança e flexibilidade nas suas viagens, o Clube Candeias é a resposta. Com uma proposta inovadora, os associados têm acesso a hotéis de altíssimo nível a preços imbatíveis. Além disso, a liberdade de viajar quantas vezes quiser durante o ano e levar convidados sem taxas extras é um diferencial que conquista os viajantes mais exigentes."`}>
                            <img src="./images/abril.png" alt="Notícia UOL" />
                        </CardNormal>
                    </div>
                </Section>
                <Section bg={true} pd={true} bottom={true}>
                    <Text bg={true} main="O que nossos clientes dizem"></Text>
                    <div className={styles.flex}>
                        <CardNormal type={true} text={`"O Clube Candeias tornou minhas viagens muito mais acessíveis e prazerosas. Sempre encontro ótimas opções de hospedagem com descontos incríveis. Além disso, a facilidade de reservar pelo aplicativo e a possibilidade de levar meus convidados sem taxas extras são benefícios que valorizo muito. Recomendo a todos os viajantes!"`}>
                            <div>
                                <img src="./images/poeple/1.png" alt="Cliente Candeia" />
                                <div>
                                    <h3>Joana Oliveira</h3>
                                    <p>32 anos</p>
                                </div>
                            </div>
                        </CardNormal>
                        <CardNormal type={true} text={`"Sou associado do Clube Candeias há alguns anos e estou extremamente satisfeito com os benefícios oferecidos. Já visitei diversos destinos incríveis e sempre encontro opções de hotéis com preços muito mais acessíveis. Além disso, o atendimento ao cliente é excelente, sempre dispostos a ajudar."`}>
                            <div>
                                <img src="./images/poeple/2.png" alt="Cliente Candeia" />
                                <div>
                                    <h3>Rafael Santos</h3>
                                    <p>45 anos</p>
                                </div>
                            </div>
                        </CardNormal>
                        <CardNormal type={true} text={`"O Clube Candeias tem sido um diferencial nas minhas viagens em família. A possibilidade de levar meus filhos e convidados sem custos adicionais é fantástica. Recomendo a todos que desejam aproveitar ao máximo suas viagens."`}>
                            <div>
                                <img src="./images/poeple/3.png" alt="Cliente Candeia" />
                                <div>
                                    <h3>Marcela Costa</h3>
                                    <p>38 anos</p>
                                </div>
                            </div>
                        </CardNormal>
                    </div>
                    <div className={`${styles.flex} ${styles['review-div']}`}>
                        <div className={styles.reviews}>
                            <img src="./images/yop.png" alt="Clientes Clube Candeias" />
                            <div>
                                <div className={styles.flex} style={{ alignItems: 'center', gap: '12px' }}>
                                    <h2>Pedro Ferreira</h2>
                                    <img className={styles.stars} src="./images/star.png" alt="Clientes Clube Candeias" />
                                </div>
                                <p>"Ser associado do Clube Candeias foi a melhor decisão que tomei. Já viajei para diversos destinos e sempre encontro opções de hospedagem com descontos exclusivos. A qualidade dos hotéis é excelente, e a tranquilidade de saber que estou sendo bem atendido é muito satisfatória. Estou muito feliz com minha escolha e recomendo a todos."</p>
                            </div>
                        </div>
                        <img src="./images/testmonials/reviews.png" alt="Avaliações dos clientes Candeias" />
                    </div>
                </Section>
                <Section>
                    <img src="./images/logo4.png" alt="Logo Clube Candeiras" className={styles.logoBg} />
                    <HeroFlex link={true} linkForms={true} main="Quem nós somos" arr={true} subtitle={['O Clube Candeias começou em 1968, quando inauguramos nossa primeira unidade em Santa Catarina, na cidade de Piçarras. No verão daquele mesmo ano, inúmeras famílias se associaram e se hospedaram nesta primeira unidade, marcando o início do sucesso e aceitação da nossa proposta.', 'Hoje, o Clube Candeias conta com dezenas de unidades próprias, oferecendo os preços mais competitivos do mercado, concretizando viagens e férias maravilhosas para centenas de milhares de famílias associadas!', 'O Clube Candeias busca inovar sempre, rompendo as barreiras do Brasil e alcançando o mundo inteiro! O portal do associado oferece uma rede com mais de 500 mil opções de hospedagens distribuídas pelos cinco continentes. Além disso, nossos associados contam também com um aplicativo exclusivo que permite realizar reservas e acessar os serviços do clube pelo celular.']}>
                        <div className={`${styles.last} ${styles['div-img']}`}>
                            <img src="./images/logo3.png" alt="Como funciona o Clube Candeias?" />
                        </div>
                    </HeroFlex>
                </Section>
                <Section>
                    <div className={styles['text-bg']}>
                        <h3>FAQ</h3>
                        <Text main="Perguntas Frequentes"></Text>
                    </div>
                    <Dropdown liDrowdown={faq} />
                    <div>
                        <a href="https://wa.me/5542991427876" className={styles.btnLast} id="cadastro" style={{ marginTop: '48px'}}>Entrar em contato</a>
                    </div>
                </Section>
                <Text>
                    <p style={{ textAlign: 'center', fontSize: '.6rem', position: 'absolute', transform: 'translateY(36px)' }}>Valores das diárias sujeito a alteração sem aviso prévio</p>
                </Text>
            </main >
        </>
    )
}