import styles from './Check.module.css'

export default function Check({ second }) {
    if (second) {
        return (
            <div className={ `${ second && styles.second } ${styles.check}`}>
                {/* <img src="./images/logo2.png" alt="Logo Clube Candeias" /> */}
                <div>
                    <h2>Olha só:</h2>
                    <ul style={{ marginTop: '24px'}}>
                        <li>
                            <img src="./images/check.png" alt="check icon" />
                            <span><strong style={{ textDecoration: 'line-through', fontWeight: 'normal'}}>Sem o Candeias</strong>: viajando em família irá gastar <strong style={{ color: 'rgb(255, 0, 0)'}}>R$ 4500,00</strong></span>
                        </li>
                        <li>
                            <img src="./images/check.png" alt="check icon" />
                            <span><strong> Com o candeias</strong>: o valor investido será de <strong style={{ color: 'rgb(0, 196, 1)'}}>R$ 1800,00</strong></span>
                        </li>
                    </ul>
                </div>
                <div className={ styles.border }></div>
                <div>
                    <h2>Viajando 2 vezes no ano, o título já se pagou!</h2>
                    <p style={{ marginTop: '12px'}}>E essa economia você terá para sempre!</p>
                </div>
            </div>
        )
    }
    return (
        <div className={ styles.check } style={{ marginBottom: '72px'}}>
            <img src="./images/logo2.png" alt="Logo Clube Candeias" />
            <div className={ styles.divCheck }>
                <h2 style={{ textAlign: 'center'}}>Qual o valor para se tornar associado?</h2>
                <div className={ styles.aq }>
                    <div>
                        <h3>Pagamento uma "única vez na vida"</h3>
                        <div>
                            <h3>R$</h3>
                            <span>36x de</span>
                        </div>
                        <h4>198,00</h4>
                    </div>
                </div>
                <div className={ styles.last }>
                    <p style={{ textAlign: 'center'}}>35% de desconto para pagamento à vista.</p>
                    <p style={{ textAlign: 'center'}}>Sem nenhum custo adicional, taxas de manutenção ou anuidade.</p>
                    <p style={{ textAlign: 'center'}}>Com opções de parcelamento em até 36x em débito em conta ou cartão recorrente.</p>
                </div>
            </div>
            <div className={ styles.highlighted }>
                <p>Compre agora e ganhe um final de semana gratuito para um casal! Oferta válida durante feriados municipais até Outubro de 2023</p>
            </div>
        </div>
    )
}