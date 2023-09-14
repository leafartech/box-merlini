import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper"
import React from "react";
import styles from './Myswipper.module.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Text from "../Text";

export default function MySwiper({ second }) {
    if (typeof window != 'undefined') {
        var screen = window.screen.width
    }
    if (second) {
        if (screen <= 425) {
            return (
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    modules={[Pagination, Navigation]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1000: {
                            slidesPerView: 3
                        },
                        500: {
                            slidesPerView: 3
                        },
                        300: {
                            slidesPerView: 1
                        }
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    // initialSlide={0}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/1.png" alt="Promoçao do Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Residencial Piçarras - Balneário Piçarras/SC</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                    <p>R$ 3.423,00</p>
                                    <p><strong>Alta temporada</strong></p>
    
                                    <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                    <p>R$ 1.267,00</p>
                                    <p><strong>Dezembro</strong></p>
                                    <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/2.png" alt="Promoçao do Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Hotel Foz do Iguaçu - Foz do Iguaçu/PR</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 5 dias - Para 2 pessoas</p>
                                    <p>R$ 730,00</p>
                                    <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 5 dias - Para 4 pessoas</p>
                                    <p>R$ 1.170,00</p>
                                    <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/4.png" alt="Promoçao Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Residencial Mar Azul - Guaratuba/PR</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 4 pessoas</p>
                                    <p>R$ 2.912,00</p>
                                    <p><strong>Alta temporada</strong></p>
                                    <p style={{ marginTop: '12px'}}>Sobrado mobiliado com cozinha.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/7.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Hotel Central - Balneário Camboriú/SC</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                    <p>R$ 2.401,00</p>
                                    <p><strong>Baixa temporada</strong></p>
                                    <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                    <p>R$ 3.654,00</p>
                                    <p><strong>Alta temporada</strong></p>
                                    <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/9.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Edifício Viviane - Balneário Camboriú/SC</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                    <p>R$ 3.213,00</p>
                                    <p><strong>Alta temporada</strong></p>
                                    <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/3.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Caiobá Residencial - Caiobá/PR</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 4 pessoas</p>
                                    <p>R$ 1.232,00</p>
                                    <p><strong>Dezembro</strong>.</p>
                                    <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/5.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Hotel Candeias - Guaratuba/PR</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 4 pessoas</p>
                                    <p>R$ 2.912,00</p>
                                    <p><strong>Alta temporada</strong></p>
                                    <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/6.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Complexo Turístico - Balneário Camboriú/SC</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                    <p>R$ 3.031,00</p>
                                    <p><strong>Alta temporada</strong></p>
                                    <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                    <p>R$ 1.232,00</p>
                                    <p><strong>Dezembro</strong></p>
                                    <p style={{ marginTop: '12px'}}>Xalés mobiliados com cozinha.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/8.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Hotel Sanfelice - Balneário Camboriú/SC</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                    <p>R$ 2.331,00</p>
                                    <p><strong>Alta temproada</strong></p>
                                    <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 3 pessoas</p>
                                    <p>R$ 1.596,00</p>
                                    <p><strong>Dezembro</strong></p>
                                    <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/11.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Hotel Parador de Cachoeira - Floripa/SC</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                    <p>R$ 2.282,00</p>
                                    <p><strong>Alta temporada</strong></p>
                                    <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/12.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Pousada Guarani - Bonito/MS</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 5 diárias - Para 2 pessoas</p>
                                    <p>R$ 740,00</p>
    
                                    <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 5 diárias - Para 4 pessoas</p>
                                    <p>R$ 1.135,00</p>
                                    <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/14.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Ilhas Gregas - Balneário Camboriú/SC</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                    <p>R$ 3.493,00</p>
                                    <p><strong>Alta temporada</strong></p>
    
                                    <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                    <p>R$ 1.323,00</p>
                                    <p><strong>Dezembro</strong></p>
                                    <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/15.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Hotel Costa Verde - Bombinhas/SC</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                    <p>R$ 2.450,00</p>
                                    <p><strong>Alta temporada</strong></p>
                                    <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                    <p>R$ 1.407,00</p>
                                    <p><strong>Dezembro</strong></p>
                                    <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={styles['second-card']}>
                            <div className={styles.img}>
                                <img src="./images/promocoes/16.png" alt="Promoçao do residencial Candeias" />
                            </div>
                            <div className={styles.text}>
                                <h3>Residencial Tangará - Bombinhas/SC</h3>
                                <Text start={true}>
                                    <p><strong>Pacote</strong> de 7 dias - Para 4 pessoas</p>
                                    <p>R$ 2.653,00</p>
                                    <p><strong>Alta temporada</strong></p>
                                    <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div>
                        <div className="swiper-button-next">
                        </div>
                        <div className="swiper-button-prev">
                        </div>
                    </div>
                </Swiper>
            )
        }
        return (
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1000: {
                        initialSlide: 1,
                        slidesPerView: 3
                    },
                    500: {
                        slidesPerView: 3
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                // initialSlide={0}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/1.png" alt="Promoçao do Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Residencial Piçarras - Balneário Piçarras/SC</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                <p>R$ 3.423,00</p>
                                <p><strong>Alta temporada</strong></p>

                                <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                <p>R$ 1.267,00</p>
                                <p><strong>Dezembro</strong></p>
                                <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/2.png" alt="Promoçao do Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Hotel Foz do Iguaçu - Foz do Iguaçu/PR</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 5 dias - Para 2 pessoas</p>
                                <p>R$ 730,00</p>
                                <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 5 dias - Para 4 pessoas</p>
                                <p>R$ 1.170,00</p>
                                <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/4.png" alt="Promoçao Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Residencial Mar Azul - Guaratuba/PR</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 4 pessoas</p>
                                <p>R$ 2.912,00</p>
                                <p><strong>Alta temporada</strong></p>
                                <p style={{ marginTop: '12px'}}>Sobrado mobiliado com cozinha.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/7.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Hotel Central - Balneário Camboriú/SC</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                <p>R$ 2.401,00</p>
                                <p><strong>Baixa temporada</strong></p>
                                <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                <p>R$ 3.654,00</p>
                                <p><strong>Alta temporada</strong></p>
                                <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/9.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Edifício Viviane - Balneário Camboriú/SC</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                <p>R$ 3.213,00</p>
                                <p><strong>Alta temporada</strong></p>
                                <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/3.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Caiobá Residencial - Caiobá/PR</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 4 pessoas</p>
                                <p>R$ 1.232,00</p>
                                <p><strong>Dezembro</strong>.</p>
                                <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/5.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Hotel Candeias - Guaratuba/PR</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 4 pessoas</p>
                                <p>R$ 2.912,00</p>
                                <p><strong>Alta temporada</strong></p>
                                <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/6.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Complexo Turístico - Balneário Camboriú/SC</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                <p>R$ 3.031,00</p>
                                <p><strong>Alta temporada</strong></p>
                                <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                <p>R$ 1.232,00</p>
                                <p><strong>Dezembro</strong></p>
                                <p style={{ marginTop: '12px'}}>Xalés mobiliados com cozinha.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/8.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Hotel Sanfelice - Balneário Camboriú/SC</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                <p>R$ 2.331,00</p>
                                <p><strong>Alta temproada</strong></p>
                                <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 3 pessoas</p>
                                <p>R$ 1.596,00</p>
                                <p><strong>Dezembro</strong></p>
                                <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/11.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Hotel Parador de Cachoeira - Floripa/SC</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                <p>R$ 2.282,00</p>
                                <p><strong>Alta temporada</strong></p>
                                <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/12.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Pousada Guarani - Bonito/MS</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 5 diárias - Para 2 pessoas</p>
                                <p>R$ 740,00</p>

                                <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 5 diárias - Para 4 pessoas</p>
                                <p>R$ 1.135,00</p>
                                <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/14.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Ilhas Gregas - Balneário Camboriú/SC</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                <p>R$ 3.493,00</p>
                                <p><strong>Alta temporada</strong></p>

                                <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 6 pessoas</p>
                                <p>R$ 1.323,00</p>
                                <p><strong>Dezembro</strong></p>
                                <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/15.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Hotel Costa Verde - Bombinhas/SC</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                <p>R$ 2.450,00</p>
                                <p><strong>Alta temporada</strong></p>
                                <p style={{ marginTop: '12px' }}><strong>Pacote</strong> de 7 dias - Para 2 pessoas</p>
                                <p>R$ 1.407,00</p>
                                <p><strong>Dezembro</strong></p>
                                <p style={{ marginTop: '12px'}}>Café da manhã incluso.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className={styles['second-card']}>
                        <div className={styles.img}>
                            <img src="./images/promocoes/16.png" alt="Promoçao do residencial Candeias" />
                        </div>
                        <div className={styles.text}>
                            <h3>Residencial Tangará - Bombinhas/SC</h3>
                            <Text start={true}>
                                <p><strong>Pacote</strong> de 7 dias - Para 4 pessoas</p>
                                <p>R$ 2.653,00</p>
                                <p><strong>Alta temporada</strong></p>
                                <p style={{ marginTop: '12px'}}>Apartamento mobiliado com cozinha.</p>
                            </Text>
                        </div>
                    </div>
                </SwiperSlide>
                <div>
                    <div className="swiper-button-next">
                    </div>
                    <div className="swiper-button-prev">
                    </div>
                </div>
            </Swiper>
        )
    }
    return (
        <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            modules={[Pagination, Navigation]}
            pagination={{
                clickable: true,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
                1000: {
                    initialSlide: 2,
                    slidesPerView: 3
                },
                500: {
                    slidesPerView: 3
                },
                300: {
                    slidesPerView: 1
                }
            }}
            initialSlide={1}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="369" height="480" viewBox="0 0 369 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M24.275 1.64376C18.248 3.77776 10.728 10.9208 7.886 17.2108L5.5 22.4898V232.49V442.49L75.75 442.747L146 443.004V398.997V354.99H184H222V398.99V442.99H291H360V232.65V22.3088L356.942 16.1898C353.5 9.30077 349.799 5.75276 342.5 2.34476L337.5 0.00976562L183 0.0787659C48.512 0.138766 27.953 0.341764 24.275 1.64376ZM117 101.99V129.99H89H61V101.99V73.9898H89H117V101.99ZM211 101.99V129.99H183H155V101.99V73.9898H183H211V101.99ZM304 101.99V129.99H276.5H249V101.99V73.9898H276.5H304V101.99ZM117 185.99V213.99H89H61V185.99V157.99H89H117V185.99ZM211 185.99V213.99H183H155V185.99V157.99H183H211V185.99ZM304 185.99V213.99H276.5H249V185.99V157.99H276.5H304V185.99ZM117 269.99V297.99H89H61V269.99V241.99H89H117V269.99ZM211 269.99V297.99H183H155V269.99V241.99H183H211V269.99ZM304 269.99V297.99H276.5H249V269.99V241.99H276.5H304V269.99ZM5.329 461.448C1.437 463.141 0 465.659 0 470.788C0 473.7 0.682002 475.4 2.636 477.354L5.273 479.99H184H362.727L365.364 477.354C368.233 474.484 368.959 468.65 366.92 464.84C364.215 459.786 371.877 459.987 183.782 460.029C37.045 460.062 7.984 460.293 5.329 461.448Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Como se você fosse dono de uma casa ou apartamento em cada ponto turístico do Brasil</h3>
                    <p>Pois ser um sócio Candeias é exatamente assim... melhor ainda, sem nenhum custo com impostos, cuidados ou manutenção de imóveis...</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="281" height="512" viewBox="0 0 281 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M101.233 28.39V56.781L92.983 59C48.648 70.927 17.713 98.353 6.69503 135.5C3.42303 146.533 2.19303 169.13 4.17803 181.757C8.41203 208.693 21.543 231.111 42.587 247.333C63.053 263.111 81.456 271.239 132.239 286.933C183.039 302.633 199.533 311.732 207.308 328.346C210.845 335.906 212.506 347.678 211.182 355.811C208.322 373.388 189.414 385.664 158.588 389.959C148.448 391.371 128.452 391.39 119.635 389.995C94.434 386.008 70.005 374.84 53.696 359.849L49.66 356.139L34.196 370.746C25.692 378.781 14.537 389.377 9.40704 394.294L0.0820312 403.233L2.90704 406.213C11.467 415.242 29.394 428.295 44.308 436.357C59.245 444.431 84.404 453.565 97.463 455.653L101.233 456.256V484.128V512H135.717H170.201L170.467 484.866L170.733 457.732L181.733 455.5C211.283 449.503 235.359 437.035 252.978 418.606C270.757 400.008 278.787 380.977 279.957 354.659C281.87 311.631 263.987 276.404 228.233 252.768C211.583 241.762 192.727 233.925 152.733 221.39C120.242 211.207 110.503 207.689 98.598 201.834C79.235 192.311 72.193 182.907 71.891 166.168C71.699 155.493 73.751 148.965 79.271 142.694C91.43 128.881 116.363 120.955 147.696 120.941C172.564 120.93 192.741 125.428 214.035 135.729C219.151 138.204 223.486 140.065 223.667 139.864C223.848 139.664 232.124 126.915 242.057 111.533C255.002 91.489 259.833 83.224 259.113 82.355C256.891 79.678 230.907 67.76 218.196 63.587C206.708 59.816 188.993 55.767 173.983 53.481L170.233 52.909V26.455V0H135.733H101.233V28.39Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Preço imbatível: até 60% de economia</h3>
                    <p>O Clube Candeias não tem fins lucrativos, por isso os preços das nossas diárias ficam bem abaixo dos preços particulares.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="513" height="512" viewBox="0 0 513 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M161.868 8.82874C135.037 17.9107 132.096 19.4407 129.424 25.7117C128.67 27.4817 128.053 32.1387 128.053 36.0607C128.053 44.7057 126.133 49.2737 121.147 52.4917C115.956 55.8417 112.095 56.3677 106.953 54.4257C90.2274 48.1077 88.7234 47.7467 81.6094 48.3357C68.3894 49.4287 56.9973 57.4807 51.2133 69.8187C48.6093 75.3737 48.5473 75.9807 48.2543 98.4937L47.9553 121.494L25.1103 144.494C12.5454 157.144 1.76735 168.477 1.15935 169.678C-0.24065 172.443 -0.26165 178.029 1.11435 181.679C2.47435 185.288 52.4323 235.471 56.6643 237.48C62.9483 240.462 65.8164 239.622 89.0534 227.994C101.143 221.944 111.265 216.994 111.544 216.994C111.824 216.994 112.053 222.702 112.053 229.678C112.053 244.131 113.603 249.116 119.111 252.369C120.816 253.376 130.613 257.004 140.882 260.43L159.553 266.661L160.087 279.577C160.381 286.682 161.13 293.394 161.751 294.494C164.047 298.56 168.853 301.941 180.803 307.901L193.053 314.009L193.06 335.752C193.065 354.971 193.274 357.809 194.859 360.212C195.845 361.708 204.279 368.63 213.602 375.595C233.482 390.448 236.818 393.39 238.672 397.712C242.383 406.361 239.906 411.43 224.141 427.444C217.075 434.621 210.789 441.477 210.173 442.678C208.738 445.477 208.73 452.487 210.159 455.31C211.734 458.423 262.005 508.835 265.253 510.56C268.717 512.399 275.389 512.399 278.853 510.56C282.272 508.745 332.398 458.356 334.129 454.994C334.916 453.466 335.681 446.272 336.097 436.494C336.552 425.811 337.307 419.085 338.368 416.253C341.978 406.622 348.714 398.075 357.41 392.092C363.122 388.162 375.587 384 381.729 383.972C384.382 383.96 388.353 383.106 390.553 382.075C395.483 379.763 461.459 313.839 463.006 309.679C463.65 307.948 464.053 295.237 464.053 276.669V246.474L482.597 227.984C492.797 217.814 502.662 207.22 504.521 204.44C513.65 190.785 514.542 172.703 506.832 157.567C504.151 152.303 495.606 143.402 490.182 140.223C487.762 138.805 450.856 121.78 408.168 102.388L330.553 67.1317L314.769 43.5267C304.154 27.6527 297.932 19.2807 295.769 17.9617C292.212 15.7937 286.686 15.4227 282.371 17.0627C280.825 17.6507 272.777 24.8627 264.488 33.0897L249.418 48.0477L234.068 47.7707L218.718 47.4937L212.135 27.8987C208.515 17.1207 204.799 7.17574 203.878 5.79774C201.671 2.49674 196.187 -0.0232642 191.402 0.0647358C189.285 0.102736 175.995 4.04674 161.868 8.82874Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Mais de 40 unidades próprias de norte a sul do Brasil</h3>
                    <p>Escolha seu destino entre hotéis, apartamentos mobiliados e condomínios de casas e chalés.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="474" height="410" viewBox="0 0 474 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M102.547 2.14879C101.447 2.74179 96.9449 7.00279 92.5429 11.6188C83.0609 21.5598 82.6269 21.6528 67.4889 16.9928C52.3689 12.3388 49.7279 14.0468 46.5769 30.5158C44.0239 43.8598 42.5469 45.2038 26.7909 48.5188C17.4839 50.4758 13.0469 53.6068 13.0469 58.2138C13.0469 59.8778 14.4509 65.6678 16.1669 71.0808C18.3089 77.8398 19.0689 81.7968 18.5939 83.7158C18.1789 85.3888 14.3179 89.9438 8.97388 95.0638C0.702875 102.989 0.046875 103.906 0.046875 107.548C0.046875 111.186 0.705875 112.111 8.91488 119.994C14.8629 125.707 18.0009 129.508 18.4459 131.539C18.8999 133.616 18.1569 137.656 16.0779 144.412C14.4109 149.827 13.0469 155.573 13.0469 157.182C13.0469 161.775 17.0109 164.659 25.8919 166.526C42.6239 170.043 43.6729 170.949 46.4009 184.22C50.1549 202.482 51.5979 203.199 72.1279 196.999C77.1739 195.475 80.6669 194.95 82.5699 195.428C84.3119 195.865 88.7869 199.641 94.0059 205.078C105.889 217.458 107.124 217.353 121.126 202.761C129.862 193.657 130.013 193.625 143.706 198.011C148.856 199.661 153.995 201.011 155.125 201.011C160.599 201.011 163.836 195.891 166.05 183.733C168.209 171.877 170.652 169.795 186.26 166.513C190.503 165.621 194.977 164.078 196.203 163.085L198.433 161.28L194.234 158.629C191.924 157.171 185.684 153.653 180.367 150.812L170.699 145.647L168.181 149.079C163.51 155.445 149.579 168.487 143.877 171.832C131.639 179.01 115.606 182.683 100.98 181.659C71.1129 179.567 45.1509 159.296 35.4729 130.511C31.6079 119.018 30.9929 102.979 33.9429 90.6478C40.3569 63.8378 61.1789 42.5778 88.0469 35.4078C97.7859 32.8088 115.316 33.0078 125.338 35.8318C134.914 38.5298 144.951 43.4958 151.847 48.9468L157.055 53.0638L163.535 47.8708C168.231 44.1078 169.74 42.3458 169.015 41.4718C168.464 40.8088 167.095 36.0458 165.971 30.8888C162.225 13.6878 159.975 12.1808 145.084 16.9018C134.484 20.2618 131.1 20.6448 127.766 18.8608C126.584 18.2278 122.001 13.9508 117.582 9.35479C109.282 0.723793 107.118 -0.313208 102.547 2.14879ZM267.385 25.1048C236.9 28.6578 205.776 40.7028 180.001 58.9228C160.027 73.0428 133.25 102.417 134.217 109.148C134.621 111.96 136.457 112.866 151.047 117.456C163.877 121.492 187.642 132.666 201.941 141.387C213.496 148.434 215.34 148.463 219.547 141.661C254.365 85.3698 286.175 51.0158 320.872 32.2308C329.385 27.6218 329.791 27.9188 311.746 25.5558C299.25 23.9198 279.295 23.7168 267.385 25.1048ZM341.433 43.8048C324.118 49.9548 309.515 60.2548 289.547 80.4028C281.847 88.1718 271.547 99.6998 266.657 106.02C252.54 124.268 232.047 155.763 232.047 159.212C232.047 161.824 235.516 163.971 243.639 166.384C257.445 170.486 286.444 182.557 285.832 183.947C285.675 184.304 269.667 215.896 250.258 254.153L214.97 323.711L188.758 324.309C119.77 325.885 76.8269 338.052 20.1659 372.076C5.43387 380.923 3.04688 383.714 3.04688 392.095C3.04688 399.145 5.77687 403.609 12.0169 406.761L16.4709 409.011H236.602H456.732L461.087 406.708C471.462 401.222 472.985 387.185 464.022 379.644C456.228 373.085 429.615 362.059 402.547 354.175C353.794 339.973 305.493 331.463 239.49 325.445L233.433 324.893L267.111 258.414C285.634 221.851 300.985 191.739 301.225 191.5C302.712 190.012 349.692 218.604 354.452 223.894C356.764 226.463 361.198 226.649 363.216 224.261C365.903 221.082 374.699 198.996 380.942 179.75C391.967 145.764 396.735 115.149 394.918 90.0058C393.217 66.4708 386.056 51.7018 372.851 44.4908C368.333 42.0248 366.213 41.5458 358.547 41.2598C350.662 40.9648 348.542 41.2808 341.433 43.8048ZM97.0469 52.7008C85.6439 54.6078 73.5489 61.3688 65.2379 70.4798C55.4709 81.1888 51.0389 92.8988 51.0599 107.943C51.0709 115.809 51.5699 118.936 53.8629 125.524C57.1509 134.968 60.0289 139.484 67.6879 147.214C78.5719 158.199 92.9199 163.578 109.047 162.72C120.294 162.122 127.768 159.731 136.812 153.838C143.158 149.704 152.047 140.644 152.047 138.31C152.047 137.624 148.163 135.916 143.297 134.463C128.449 130.03 125.918 128.88 121.908 124.748C114.984 117.613 113.335 106.241 117.923 97.2578C119.978 93.2328 129.495 80.7138 137.435 71.5898C142.114 66.2128 142.249 65.8918 140.603 64.0728C137.815 60.9918 125.843 55.1748 118.944 53.5478C112.962 52.1378 102.771 51.7438 97.0469 52.7008ZM412.766 76.5108C413.195 79.8108 413.513 91.7358 413.47 103.011C413.409 119.568 412.965 125.915 411.163 136.011C406.171 163.98 397.039 194.129 384.779 223.113L380.295 233.714L391.421 238.001C410.538 245.366 436.14 259.424 449.547 269.919C457.555 276.187 457.51 276.166 460.401 275.067C462.477 274.277 463.45 272.461 465.915 264.764C472.107 245.433 473.548 234.941 473.501 209.511C473.462 188.469 473.231 185.447 470.788 174.011C462.812 136.67 446.69 106.067 421.276 80.0298L411.984 70.5108L412.766 76.5108Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Remido para férias vitalícias</h3>
                    <p>Com um único investimento você garante férias para a vida toda.</p>
                    <p>Sem mensalidades, anuidades ou taxas de manutenção. Além disso, você pode incluir todos os seus Dependentes.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="420" height="512" viewBox="0 0 420 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M105.497 49.3421C29.5161 86.3931 4.05508 99.2451 2.49708 101.332C0.510081 103.993 0.431081 105.257 0.531081 132.781C0.672081 171.794 3.78208 201.797 11.5751 239.314C34.9241 351.72 90.8551 438.593 175.064 493.251C192.546 504.597 206.262 511.957 209.927 511.957C215.634 511.957 247.048 492.981 268.219 476.744C339.103 422.383 387.86 339.523 408.434 238.457C416.265 199.988 419.19 171.615 419.326 132.781C419.423 105.129 419.352 104.004 417.328 101.292C414.473 97.4681 214.295 -0.0858605 209.562 0.0411395C207.58 0.0941395 169.318 18.2201 105.497 49.3421ZM229.546 125.483C291.251 136.084 334.171 193.067 326.988 254.852C323.176 287.64 305.125 318.448 278.666 337.322C258.137 351.967 235.294 359.255 209.927 359.255C177.765 359.255 149.045 347.3 126.427 324.497C75.5021 273.156 82.0061 190.445 140.427 146.459C153.04 136.963 172.816 128.53 189.427 125.565C200.156 123.649 218.655 123.612 229.546 125.483ZM261.427 187.984C259.777 188.335 257.077 189.343 255.427 190.224C253.777 191.105 238.264 206.02 220.954 223.37L189.482 254.914L177.454 243.073C170.839 236.56 164.324 230.655 162.976 229.951C159.57 228.173 150.999 228.351 147.273 230.278C141.544 233.241 136.953 240.772 136.933 247.239C136.917 252.254 140.902 257.365 159.214 275.811C182.51 299.278 186.594 301.63 196.709 297.404C201.781 295.284 278.205 219.075 280.958 213.391C284.342 206.404 283.289 199.085 278.113 193.621C273.51 188.761 267.43 186.707 261.427 187.984Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Comodidade desde reserva até o check out</h3>
                    <p>Desde o momento de escolher o seu destino até o final de sua viagem nossa equipe vai lhe acompanhar.</p>
                    <p> Tudo no Candeias é muito fácil E SEGURO.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="439" height="442" viewBox="0 0 439 442" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M215.618 1.86649C215.032 2.58249 210.314 11.9425 205.134 22.6675C199.954 33.3925 195.064 42.6985 194.266 43.3475C193.469 43.9975 182.711 46.0115 170.359 47.8245C147.598 51.1645 144.354 52.1945 144.354 56.0825C144.354 56.8605 152.004 65.0385 161.354 74.2555C172.404 85.1475 178.361 91.7395 178.374 93.0905C178.385 94.2325 176.708 105.123 174.647 117.291C170.628 141.015 170.699 142.667 175.735 142.667C176.909 142.667 186.867 137.953 197.862 132.193C208.858 126.432 218.529 121.714 219.354 121.71C220.179 121.705 229.812 126.418 240.761 132.184C251.71 137.95 261.667 142.667 262.889 142.667C268.019 142.667 268.092 141.085 264.061 117.291C262 105.123 260.323 94.2185 260.334 93.0585C260.347 91.6695 265.736 85.6715 276.104 75.5025C284.767 67.0075 292.454 59.3165 293.187 58.4105C294.777 56.4445 293.916 53.0385 291.501 51.7465C290.556 51.2405 279.899 49.4105 267.819 47.6785C253.892 45.6835 245.305 44.0065 244.354 43.0985C243.529 42.3115 238.354 32.5545 232.854 21.4175C223.292 2.05349 222.719 1.15449 219.769 0.866491C218.072 0.700491 216.204 1.15049 215.618 1.86649ZM72.7246 39.4325C72.1036 39.8365 66.8136 49.7305 60.9696 61.4175C55.1256 73.1055 50.0086 82.6775 49.5986 82.6905C49.1886 82.7025 38.5096 84.2615 25.8676 86.1525C2.27456 89.6835 0.356563 90.3185 0.351563 94.6085C0.350563 95.4665 8.00056 103.534 17.3516 112.537C28.7566 123.518 34.3626 129.608 34.3816 131.037C34.3966 132.209 32.7306 143.135 30.6776 155.319C26.6306 179.339 26.7056 180.667 32.1146 180.667C33.4976 180.667 43.5686 175.942 54.4936 170.167C65.4186 164.392 74.8046 159.667 75.3516 159.667C75.8976 159.667 85.3066 164.392 96.2606 170.167C125.76 185.721 125.249 186.04 120.047 155.3C117.987 143.127 116.302 132.267 116.302 131.167C116.302 129.891 122.471 123.195 133.344 112.667C142.718 103.592 150.379 95.4665 150.37 94.6085C150.324 90.1865 148.445 89.5595 124.789 86.0825C112.175 84.2275 101.519 82.7005 101.109 82.6885C100.699 82.6775 95.5816 73.1055 89.7376 61.4175C83.8936 49.7305 78.6036 39.8365 77.9826 39.4325C77.3616 39.0285 76.1786 38.6985 75.3536 38.6985C74.5286 38.6985 73.3456 39.0285 72.7246 39.4325ZM360.725 39.4325C360.104 39.8365 354.814 49.7305 348.97 61.4175C343.126 73.1055 338.009 82.6755 337.599 82.6855C337.189 82.6945 326.514 84.2475 313.877 86.1355C290.273 89.6615 288.357 90.2975 288.352 94.6085C288.351 95.4665 296.001 103.534 305.352 112.537C316.757 123.518 322.363 129.608 322.382 131.037C322.397 132.209 320.731 143.135 318.678 155.319C314.631 179.339 314.706 180.667 320.115 180.667C321.498 180.667 331.569 175.942 342.494 170.167C353.419 164.392 362.805 159.667 363.352 159.667C363.898 159.667 373.307 164.392 384.261 170.167C413.76 185.721 413.249 186.04 408.047 155.3C405.987 143.127 404.302 132.267 404.302 131.167C404.302 129.891 410.471 123.195 421.344 112.667C430.718 103.592 438.379 95.4665 438.37 94.6085C438.324 90.1865 436.445 89.5595 412.789 86.0825C400.175 84.2275 389.519 82.7005 389.109 82.6885C388.699 82.6775 383.582 73.1055 377.738 61.4175C371.894 49.7305 366.604 39.8365 365.983 39.4325C365.362 39.0285 364.179 38.6985 363.354 38.6985C362.529 38.6985 361.346 39.0285 360.725 39.4325ZM209.673 171.738C204.374 174.361 203.073 176.404 198.712 188.952C185.758 226.217 166.685 254.357 140.381 275.013L131.907 281.667H123.631H115.354V345.667V409.667H126.972H138.589L146.222 416.493C161.344 430.018 169.49 434.975 183.045 438.904C190.739 441.134 191.669 441.167 246.354 441.167H301.854L306.777 438.744C313.263 435.552 319.015 429.673 321.871 423.315C324.496 417.472 347.384 312.406 347.366 306.283C347.359 304.147 346.807 300.547 346.138 298.283C344.515 292.79 336.231 284.506 330.738 282.883C327.786 282.011 314.446 281.667 283.558 281.667H240.493L245.291 271.417C253.804 253.231 262.354 224.191 262.354 213.462C262.354 197.18 252.779 181.913 238.049 174.708C227.323 169.461 216.551 168.334 209.673 171.738ZM29.8086 268.122L27.3536 270.576V345.667V420.758L29.8086 423.212L32.2626 425.667H59.3536H86.4446L88.8986 423.212L91.3536 420.758V345.667V270.576L88.8986 268.122L86.4446 265.667H59.3536H32.2626L29.8086 268.122Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Não é um simples aluguel... é um Candeias!</h3>
                    <p>Talvez você já ouviu ou até passou pela frustração de alugar uma hospedagem que não correspondia com o combinado...</p>
                    <p>No Candeias você e sua família só terão alegria!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="385" height="492" viewBox="0 0 385 492" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M142.444 3.85109C137.974 6.06509 133.234 9.80509 126.702 16.2741C121.562 21.3651 115.773 26.2811 113.838 27.1991C111.903 28.1171 106.162 29.3211 101.08 29.8731C89.9404 31.0851 85.4854 32.1851 78.6264 35.4191C69.6834 39.6341 61.8214 50.5531 57.8774 64.2351C54.3874 76.3431 51.4874 79.8191 37.0184 89.2421C26.7094 95.9541 20.0644 103.628 17.7504 111.491C15.9114 117.74 15.6524 125.455 16.7814 140.303C17.5574 150.493 17.4554 151.718 15.4514 156.248C14.2574 158.947 12.2324 162.53 10.9524 164.21C7.5144 168.721 3.7454 176.563 1.8014 183.249C-1.2166 193.634 1.5924 206.981 9.1044 217.937C15.3664 227.071 17.3414 232.242 17.3324 239.482C17.3284 243.213 16.8564 249.156 16.2834 252.69C15.0704 260.16 16.3524 270.78 19.2414 277.21C22.1764 283.74 29.1124 290.649 39.4454 297.333C44.7514 300.765 50.2824 305.134 51.7384 307.042C53.1934 308.95 56.1154 315.491 58.2324 321.579C66.1704 344.409 75.7404 352.218 98.8404 354.714C113.257 356.272 114.408 356.829 125.76 367.735C136.658 378.204 144.513 383.075 152.377 384.239C158.602 385.161 168.846 383.307 178.044 379.594C189.106 375.129 194.756 375.249 208.84 380.244C218.027 383.502 221.159 384.153 227.84 384.191C235.008 384.232 236.508 383.89 242.268 380.897C246.431 378.734 252.299 374.095 258.92 367.735C270.272 356.829 271.423 356.272 285.84 354.714C309.073 352.204 318.474 344.513 326.49 321.458C328.584 315.437 331.487 308.95 332.942 307.042C334.398 305.134 339.929 300.765 345.235 297.333C355.568 290.649 362.504 283.74 365.439 277.21C368.328 270.78 369.61 260.16 368.397 252.69C367.824 249.156 367.352 243.213 367.348 239.482C367.339 232.242 369.314 227.071 375.576 217.937C383.088 206.981 385.897 193.634 382.879 183.249C380.935 176.563 377.166 168.721 373.728 164.21C372.448 162.53 370.423 158.947 369.229 156.248C367.225 151.718 367.123 150.493 367.899 140.303C369.028 125.455 368.769 117.74 366.93 111.491C364.616 103.628 357.971 95.9541 347.662 89.2421C333.193 79.8191 330.293 76.3431 326.803 64.2351C322.859 50.5531 314.997 39.6341 306.054 35.4191C299.195 32.1851 294.74 31.0851 283.6 29.8731C278.518 29.3211 272.84 28.1471 270.982 27.2651C269.124 26.3841 263.312 21.4541 258.068 16.3101C251.013 9.39209 246.774 6.12009 241.779 3.73609C235.28 0.634088 234.664 0.531088 225.433 1.01009C217.546 1.41809 214.417 2.09809 207.84 4.83209C196.577 9.51509 188.094 9.51309 176.84 4.82609C170.028 1.98909 167.355 1.43409 158.84 1.08909C149.234 0.700089 148.588 0.809089 142.444 3.85109ZM219.34 67.6301C245.686 73.6911 266.682 85.7331 285.34 105.484C333.127 156.07 331.203 235.337 281.006 284.092C262.82 301.755 238.969 313.855 213.63 318.274C202.549 320.206 181.986 320.18 170.721 318.219C121.189 309.599 81.0794 272.612 68.8094 224.242C65.0904 209.581 63.8334 194.31 65.2404 180.872C68.3434 151.239 79.5674 126.423 99.3404 105.478C120.835 82.7081 144.95 70.3921 177.84 65.3861C184.926 64.3071 211.035 65.7191 219.34 67.6301ZM178.34 86.4311C148.891 91.0691 124.288 105.485 107.154 128.143C74.4274 171.422 79.4884 232.255 118.943 269.834C161.324 310.199 228.569 308.673 269.055 266.427C300.767 233.337 308.1 186.206 287.907 145.265C269.698 108.348 232.718 85.4151 192.183 85.9011C185.944 85.9761 179.715 86.2151 178.34 86.4311ZM240.115 151.769C243.515 153.842 245.34 157.17 245.34 161.299C245.34 162.766 236.439 177.07 222.503 197.999C199.657 232.309 197.635 234.765 192.243 234.765C188.347 234.765 184.655 231.735 167.59 214.528C151.085 197.886 150.34 196.964 150.34 193.173C150.34 188.395 152.519 185.006 156.721 183.25C162.478 180.845 165 182.26 178.428 195.436L191.016 207.788L209.428 180.126C230.581 148.346 232.139 146.906 240.115 151.769ZM39.0014 354.015C20.7004 385.336 2.8794 416.624 1.6104 419.662C-0.709602 425.213 0.315401 433.832 3.9104 439.02C7.2374 443.82 15.8224 448.774 20.7694 448.75C22.4584 448.742 32.3694 447.409 42.7944 445.788C53.2194 444.166 61.8204 442.936 61.9074 443.053C61.9944 443.169 65.3034 451.558 69.2614 461.693C73.2194 471.829 77.3614 481.39 78.4644 482.939C85.6094 492.973 102.447 493.812 111.074 484.565C112.303 483.248 123.199 465.092 135.289 444.218L157.27 406.265L152.055 405.42C136.864 402.957 125.61 396.922 113.322 384.649L104.695 376.033L96.7684 375.325C74.9814 373.379 57.6074 364.206 48.3324 349.753C46.5724 347.009 44.9684 344.765 44.7684 344.765C44.5694 344.765 41.9734 348.928 39.0014 354.015ZM336.385 349.694C327.072 364.208 309.734 373.376 287.912 375.325L279.985 376.033L271.358 384.649C259.08 396.912 247.837 402.945 232.652 405.42L227.463 406.265L248.745 443.265C272.765 485.025 275.672 488.883 284.446 490.649C290.664 491.901 295.511 491.059 300.762 487.813C306.029 484.558 307.544 481.859 315.419 461.693C319.377 451.558 322.686 443.169 322.773 443.053C322.86 442.936 331.461 444.166 341.886 445.788C352.311 447.409 362.222 448.742 363.911 448.75C368.801 448.774 377.444 443.819 380.694 439.128C383.758 434.706 385.027 428.239 383.953 422.517C383.423 419.693 342.884 347.915 340.43 345.457C339.986 345.012 338.166 346.919 336.385 349.694Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Excelência em hospedagem com unidades de alta qualidade e opções de lazer</h3>
                    <p>As unidades Candeias são de excelente qualidade oferecem opções de lazer como:</p>
                    <p>Piscinas adulto e infantil, sauna, sala de jogos e muito mais!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="440" height="476" viewBox="0 0 440 476" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M170.315 0.597418C128.946 5.76042 93.67 34.1164 79.484 73.6114C71.462 95.9474 71.602 124.58 79.844 147.164C89.749 174.305 108.991 195.586 135.315 208.513C178.309 229.627 228.738 220.704 262.021 186.094C276.061 171.494 285.242 155.214 289.956 136.558C292.894 124.928 293.598 102.398 291.39 90.6484C282.684 44.3194 246.694 8.91242 200.731 1.45842C192.138 0.0644183 177.829 -0.340582 170.315 0.597418ZM359.96 128.993C355.537 130.764 351.771 134.089 349.792 137.967C348.013 141.456 347.815 143.895 347.815 162.383V182.923L327.565 182.945C310.018 182.964 306.771 183.214 303.236 184.819C289.63 190.999 289.525 211.247 303.065 217.802C307.086 219.749 309.106 219.923 327.631 219.923H347.815V240.585C347.815 260.801 347.869 261.339 350.306 265.498C357.948 278.538 376.617 277.375 382.935 263.464C384.515 259.987 384.774 256.669 384.793 239.673L384.815 219.923L404.565 219.901C426.615 219.877 429.94 219.128 435.068 213.034C437.409 210.252 439.804 204.381 439.804 201.423C439.804 198.207 437.279 192.383 434.526 189.247C429.369 183.373 427.257 182.923 404.847 182.923H384.815L384.793 163.173C384.774 146.086 384.521 142.884 382.919 139.423C378.601 130.095 368.577 125.542 359.96 128.993ZM113.315 257.038C71.028 262.593 32.244 290.605 13.526 329.114C-1.68703 360.409 -3.93003 396.681 7.75397 422.449C19.835 449.093 43.642 468.121 72.297 474.035C80.741 475.778 87.755 475.898 182.434 475.91C293.415 475.924 293.067 475.941 308.648 469.922C320.213 465.455 328.245 460.297 337.931 451.116C356.965 433.076 365.993 411.931 365.98 385.423C365.961 348.676 350.577 314.517 322.659 289.235C306.648 274.735 287.326 264.682 264.815 259.139L254.315 256.553L187.315 256.336C150.465 256.216 117.165 256.532 113.315 257.038Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Leve seus convidados sem taxas extras</h3>
                    <p>O associado Candeias pode levar quem quiser como convidado em qualquer de nossas unidades, quantas vezes quiser sem taxas extras.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="513" height="357" viewBox="0 0 513 357" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M242.54 1.34079C228.336 4.82203 213.655 15.6486 207.444 27.2236C204.069 33.514 201.322 43.5121 201.322 49.5043C201.322 55.7865 204.12 65.6163 207.896 72.5988C217.204 89.8077 239.93 101.475 260.663 99.6884C282.356 97.8205 301.165 84.8132 308.446 66.6449C311.429 59.205 312.087 44.0278 309.749 36.6561C304.362 19.6791 288.833 5.62867 270.709 1.33351C263.48 -0.379824 249.546 -0.376184 242.54 1.34079ZM155.81 12.7521C139.123 14.9838 122.676 27.6083 116.837 42.6664L115.541 46.0085L122.036 50.3818C132.98 57.7517 140.772 68.9748 144.013 82.034C145.428 87.7315 145.764 88.2535 147.691 87.7378C161.141 84.1338 166.168 83.3927 173.817 83.8837C178.89 84.2093 184.419 85.2861 188.82 86.8057C199.446 90.4743 199.504 90.4752 202.19 87.1685C204.278 84.5994 204.408 84.0001 203.242 82.3305C191.447 65.4472 188.761 47.5854 195.345 29.8045L197.473 24.0561L194.132 21.4798C184.993 14.4291 169.556 10.9133 155.81 12.7521ZM344.712 12.3647C336.203 13.4906 325.19 18.1458 318.41 23.4832L315.096 26.0923L317.378 32.7965C319.142 37.982 319.643 41.5605 319.59 48.5948C319.511 59.2614 317.559 66.8431 312.605 75.7354L309.137 81.9594L311.854 85.2842C313.349 87.1131 314.679 88.7436 314.811 88.9073C314.943 89.0719 318.348 88.1243 322.378 86.802C332.382 83.5182 343.259 82.8879 354.245 84.9568C365.762 87.124 365.66 87.1285 365.974 84.5167C367.691 70.2707 378.728 54.4678 392.708 46.2413L399.1 42.4799L396.066 37.0107C390.384 26.7689 379.537 18.2468 367.588 14.6355C361.536 12.8067 350.016 11.6626 344.712 12.3647ZM414.176 47.7573C395.605 52.2043 381.529 65.1507 376.724 82.2068C374.385 90.5079 374.579 91.1954 380.444 95.3933C391.832 103.546 399.781 114.935 402.956 127.647L404.677 134.536L411.129 136.49C428.263 141.678 448.284 137.109 461.63 124.966C481.796 106.616 481.619 78.0826 461.225 59.9625C448.148 48.3438 430.667 43.8086 414.176 47.7573ZM71.3539 50.21C49.5262 57.006 36.0782 73.7165 36.0612 94.0655C36.0402 120.499 60.6714 141.477 89.7024 139.752C94.1781 139.485 100.056 138.508 102.766 137.579L107.69 135.89L109.509 129.074C113.064 115.753 122.362 102.795 133.324 95.8834C137.454 93.2789 137.523 93.1497 136.918 89.1001C134.701 74.2285 125.051 61.1111 110.863 53.6803C99.7702 47.8719 83.4646 46.4395 71.3539 50.21ZM156.579 94.513C125.359 102.9 110.821 135.028 126.402 161.204C137.339 179.575 163.278 189.041 185.44 182.749C195.746 179.822 197.579 178.409 199.134 172.195C201.224 163.841 207.716 153.368 214.942 146.696C222.156 140.034 222.496 138.707 219.663 128.227C212.764 102.691 183.786 87.2049 156.579 94.513ZM330.495 94.101C317.774 97.2185 304.933 106.057 298.933 115.825C295.542 121.346 292.24 130.975 292.24 135.344C292.24 138.057 292.777 138.979 295.085 140.218C296.65 141.059 300.865 144.579 304.453 148.039C312.138 155.452 317.382 164.375 319.754 174.082L321.421 180.896L327.925 182.724C339.959 186.106 354.622 184.883 366.246 179.528C376.967 174.589 387.47 163.007 391.203 152.011C395.011 140.791 393.127 126.027 386.576 115.751C375.575 98.4971 351.104 89.0501 330.495 94.101ZM222.526 103.327C220.74 103.548 219.277 103.861 219.277 104.022C219.277 104.182 221.032 107.532 223.177 111.466C226.738 117.999 228.186 122.501 229.789 132.034C230.104 133.91 230.643 135.444 230.988 135.444C231.332 135.444 234.348 134.453 237.69 133.242C249.751 128.871 266.446 128.45 278.153 132.225C280.575 133.006 282.656 133.538 282.776 133.408C282.897 133.277 283.71 129.896 284.582 125.895C285.534 121.524 287.773 115.741 290.189 111.407C292.4 107.439 293.954 103.961 293.642 103.677C292.97 103.064 227.248 102.741 222.526 103.327ZM247.263 141.44C220.518 147.904 203.434 172.744 209.795 195.92C212.41 205.449 216.712 212.446 223.895 218.859C234.053 227.927 245.274 232.142 259.257 232.142C287.079 232.142 309.664 211.634 309.662 186.371C309.661 173.486 304.664 162.831 294.312 153.632C281.227 142.007 263.703 137.465 247.263 141.44ZM404.931 141.402C404.518 141.793 404.182 143.52 404.182 145.24C404.182 153.569 398.863 165.804 391.297 174.883C388.435 178.318 386.228 181.215 386.392 181.319C386.556 181.424 388.265 182.051 390.189 182.713C405.608 188.018 421.659 200.345 429.477 212.889C437.281 225.409 439.361 232.598 439.929 249.01L440.413 262.995L450.033 262.357C469.828 261.048 496.606 255.331 508.378 249.903L512.126 248.174V220.601C512.126 196.135 511.904 192.238 510.155 186.015C504.349 165.359 485.535 148.233 463.037 143.126C456.07 141.544 406.338 140.069 404.931 141.402ZM56.3617 143.318C49.861 144.233 41.2345 146.837 34.8728 149.805C24.824 154.493 12.1006 166.293 7.08416 175.575C1.08627 186.676 0.427606 191.294 0.407616 222.396L0.390625 249.782L6.13765 252.077C21.5137 258.218 42.3119 262.45 65.1071 264.077L72.3534 264.593V253.754C72.3534 235.803 76.1884 223.196 85.4056 210.846C93.5974 199.869 107.871 189.28 120.329 184.938C122.802 184.075 125.226 183.046 125.715 182.652C126.204 182.258 124.703 179.971 122.378 177.569C116.407 171.395 110.665 160.133 109.247 151.813C108.609 148.062 107.931 144.482 107.742 143.856C107.477 142.982 101.788 142.747 83.1288 142.843C69.7817 142.911 57.7359 143.125 56.3617 143.318ZM140.479 188.259C125.938 189.975 114.184 195.392 103.326 205.382C94.6099 213.403 89.2756 221.875 86.3182 232.396C84.5661 238.63 84.3472 242.517 84.3472 267.429V295.45L90.0942 296.919C93.2546 297.728 98.7647 299.145 102.338 300.068C105.911 300.991 114.457 302.767 121.328 304.016C132.288 306.006 137.87 306.734 157.06 308.677L161.307 309.107V298.746C161.307 273.486 170.293 255.216 190.129 240.141C195.421 236.121 211.132 228.204 213.821 228.204C216.235 228.204 215.495 226.433 211.248 222.042C204.268 214.828 197.289 199.447 197.289 191.279C197.289 189.479 196.691 188.176 195.708 187.832C193.405 187.029 147.93 187.38 140.479 188.259ZM321.21 190.131C321.165 199.493 314.41 214.579 306.708 222.521C302.684 226.671 302.317 227.37 303.905 227.855C304.91 228.161 309.413 230.032 313.91 232.011C328.904 238.609 341.799 250.362 349.075 264.06C354.637 274.531 356.276 281.242 356.922 296.183C357.421 307.742 357.671 309.142 359.237 309.142C360.202 309.142 365.65 308.722 371.343 308.209C390.862 306.45 411.896 301.819 423.937 296.632L429.314 294.316L428.95 265.125C428.589 236.144 428.567 235.88 425.846 228.463C420.527 213.958 408.991 201.611 394.258 194.653C381.406 188.584 377.965 188.055 347.961 187.534L321.225 187.069L321.21 190.131ZM221.788 236.947C210.627 239.403 201.596 244.228 192.255 252.726C183.086 261.069 178.075 268.768 174.771 279.586C172.403 287.345 171.314 340.912 173.491 342.557C175.456 344.04 203.293 350.484 217.278 352.693C237.361 355.865 250.082 356.687 271.472 356.196C285.601 355.87 295.221 355.16 303.234 353.851C316.828 351.629 333.522 347.24 340.34 344.097L345.212 341.85V314.274C345.212 289.805 344.99 285.907 343.241 279.685C338.499 262.812 326.121 248.972 309.142 241.559C303.969 239.3 297.352 237.008 294.439 236.465C286.162 234.925 229.269 235.302 221.788 236.947Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Acomodações grandes que acomodam até 10 pessoas</h3>
                    <p>Nas unidades Candeias temos aposentos para até 10 pessoas em apartamentos com 3 quartos e dois banheiros para você levar amigos e familiares para compartilhar os bons momentos.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="489" height="512" viewBox="0 0 489 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M200.967 1.97563C195.765 5.14663 194.668 8.46362 194.668 21.0156C194.668 39.7376 197.127 42.0066 217.418 42.0116L230.668 42.0156V58.0156V74.0156L227.918 74.0236C222.398 74.0396 201.273 79.0466 187.969 83.4916C165.82 90.8936 141.288 103.614 131.49 112.779C122.21 121.46 120.143 134.716 126.294 146.117C131.303 155.402 139.408 159.999 150.792 160.01C157.952 160.018 162.788 158.286 173.241 151.972C233.576 115.528 310.742 121.714 363.823 167.25C392.477 191.831 410.679 222.577 418.836 260.172C420.75 268.995 421.087 273.604 421.124 291.516C421.172 314.323 419.632 325.538 414.158 342.27C403.229 375.675 381.73 405.128 353.587 425.25C342.805 432.96 321.906 443.631 310.168 447.421C289.005 454.255 264.802 457.117 244.844 455.147C197.315 450.456 159.412 429.964 129.002 392.516C114.645 374.836 102.25 347.774 97.7418 324.266L95.9678 315.016H106.753C118.584 315.016 121.734 314.23 126.041 310.202C131.884 304.739 133.208 296.965 129.528 289.726C123.93 278.715 81.0408 205.175 78.7598 202.677C75.0668 198.631 71.4548 197.016 66.1038 197.016C61.0078 197.016 55.2238 199.715 52.5638 203.334C51.6818 204.534 39.7838 224.864 26.1258 248.512C4.08784 286.668 1.24284 292.09 0.863839 296.67C0.336839 303.026 3.30284 309.002 8.62984 312.315C11.6788 314.212 14.0288 314.585 25.6168 315.016L39.0648 315.516L40.3538 324.516C43.4418 346.092 51.3458 370.691 61.7438 391.085C73.0438 413.249 84.3178 428.691 102.642 447.102C144.95 489.614 198.291 511.861 258.21 511.985C317.174 512.107 371.468 489.434 413.668 447.066C455.936 404.63 478.001 351.474 478.031 292.016C478.06 235.173 457.402 183.161 418.153 141.253C386.369 107.317 339.618 82.1216 295.108 74.9416L287.668 73.7416V57.8786V42.0156H302.02C315.277 42.0156 316.632 41.8426 319.77 39.7456C325.138 36.1596 326.665 32.0106 326.665 21.0156C326.665 10.0206 325.138 5.87162 319.77 2.28562L316.372 0.015625L260.27 0.019625C206.391 0.022625 204.041 0.100625 200.967 1.97563ZM427.134 61.4156C423.966 62.7956 412.746 74.3346 409.535 79.5156C407.309 83.1056 407.122 89.0596 409.113 92.9106C410.391 95.3816 436.148 119.936 451.935 133.733C461.996 142.527 466.957 142.02 477.562 131.118C481.629 126.937 485.79 122.166 486.809 120.516C489.177 116.68 489.179 110.367 486.814 106.489C484.387 102.508 441.492 62.8666 437.928 61.3106C434.338 59.7436 430.896 59.7766 427.134 61.4156ZM257.668 224.529V293.016H325.168H392.668L392.65 286.766C392.629 279.452 390.574 265.249 388.201 256.016C373.588 199.156 326.561 161.083 265.418 156.609L257.668 156.042V224.529Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Não existe carência, aproveite os benefícios imediatamente</h3>
                    <p>Você não precisa esperar para aproveitar todas essas vantagens, assim que você se torna um sócio já está liberado para usufruir de qualquer hospedagem ou benefícios.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="513" height="480" viewBox="0 0 513 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M151.256 0.969284C137.416 3.29928 125.76 9.44828 115.481 19.8413C101.972 33.4993 95.867 49.6693 96.756 69.4363C97.28 81.0953 100.498 91.8893 106.291 101.426C110.24 107.928 119.764 117.852 127.122 123.134L131.721 126.436L78.857 126.972C37.242 127.394 25.248 127.802 22.493 128.889C13.002 132.635 5.87 139.639 2.572 148.453C0.505995 153.976 0.422995 155.552 0.701995 184.013C0.977995 212.288 1.097 213.933 3.055 216.553C4.189 218.071 6.359 220.24 7.878 221.374C10.621 223.423 11.336 223.438 117.566 223.699L224.493 223.963V191.949V159.936H256.493H288.493V191.949V223.963L395.42 223.699C501.65 223.438 502.365 223.423 505.108 221.374C506.627 220.24 508.797 218.071 509.931 216.553C511.889 213.933 512.008 212.288 512.284 184.013C512.563 155.552 512.48 153.976 510.414 148.453C507.116 139.639 499.984 132.635 490.493 128.889C487.738 127.802 475.744 127.394 434.129 126.972L381.265 126.436L385.864 123.134C393.222 117.852 402.746 107.928 406.695 101.426C415.259 87.3283 418.511 68.2073 415.113 51.9363C410.387 29.3093 392.43 9.82428 369.993 2.97728C345.966 -4.35572 319.403 2.38928 302.266 20.1733C290.021 32.8803 270.079 67.4543 263.098 88.0783C259.936 97.4173 257.493 108.719 257.493 114.001C257.493 116.165 257.043 117.936 256.493 117.936C255.943 117.936 255.493 116.165 255.493 114.001C255.493 108.719 253.05 97.4173 249.888 88.0783C242.958 67.6033 222.886 32.7983 210.738 20.1913C195.645 4.52828 173.198 -2.72572 151.256 0.969284ZM176.843 35.2393C186.867 39.8283 197.569 53.0453 207.977 73.6903C219.416 96.3813 225.678 118.079 222.886 125.354C222.075 127.468 212.451 127.484 204.137 125.384C183.335 120.131 152.239 103.587 139.814 91.1613C133.861 85.2093 130.777 79.3283 129.503 71.4973C125.174 44.8973 152.397 24.0473 176.843 35.2393ZM356.059 33.0233C378.459 37.1243 390.088 59.9783 380.642 81.3333C374.435 95.3653 337.163 118.234 308.849 125.384C300.535 127.484 290.911 127.468 290.1 125.354C286.391 115.688 299.844 78.5613 315.343 55.6903C324.997 41.4433 332.895 35.1353 343.763 32.9903C349.697 31.8193 349.483 31.8183 356.059 33.0233ZM257.493 124.436C257.493 125.811 257.043 126.936 256.493 126.936C255.943 126.936 255.493 125.811 255.493 124.436C255.493 123.061 255.943 121.936 256.493 121.936C257.043 121.936 257.493 123.061 257.493 124.436ZM32.729 355.686L32.993 456.436L35.484 461.314C38.934 468.069 44.655 473.652 51.338 476.785L56.993 479.436L140.743 479.708L224.493 479.98V367.458V254.936H128.479H32.465L32.729 355.686ZM288.493 367.458V479.98L372.243 479.708L455.993 479.436L461.648 476.785C468.331 473.652 474.052 468.069 477.502 461.314L479.993 456.436L480.257 355.686L480.521 254.936H384.507H288.493V367.458Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Programa de recompensas</h3>
                    <p>Todas as vezes que você ou seus dependentes utilizarem um dos mais de 500 mil hotéis da rede credenciada, o valor retorna em pontos para pagar diárias nas unidades próprias do Clube.</p>
                    <p>Cada R$1,00 = 1 ponto.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="405" height="486" viewBox="0 0 405 486" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M197.639 1.57779C196.331 2.10079 189.337 7.63579 182.097 13.8768C164.305 29.2118 152.123 38.6168 139.007 47.1408C103.04 70.5168 64.0694 85.8438 21.0274 93.5418C7.46039 95.9678 6.74739 96.2488 3.06739 100.624L0.400391 103.793L0.79739 175.896L1.19539 247.999L3.79539 261.999C11.7304 304.725 27.9204 341.196 54.4014 375.999C64.2414 388.93 86.2154 410.873 99.3154 420.847C104.978 425.159 129.491 441.47 153.787 457.093C195.276 483.772 198.241 485.499 202.557 485.499C206.873 485.499 209.831 483.777 251.089 457.249C275.254 441.711 299.749 425.401 305.522 421.003C318.805 410.884 340.745 388.997 350.635 375.999C377.964 340.081 393.248 305.115 401.776 258.999C403.672 248.744 403.838 243.099 404.224 175.691L404.637 103.383L400.828 99.5938C397.315 96.0998 396.238 95.6698 387.018 94.0778C342.07 86.3208 301.297 70.3408 264.518 46.0668C250.659 36.9198 241.839 30.1038 223.668 14.4988C207.285 0.429791 204.26 -1.07221 197.639 1.57779ZM216.018 110.856C233.251 115.451 247.14 128.404 253.224 145.555C255.749 152.673 255.884 154.099 256.309 178.122L256.754 203.244L263.19 203.761C276.002 204.789 287.497 213.059 293.406 225.499L296.018 230.999V276.999V322.999L293.338 328.717C289.87 336.116 282.61 343.821 276.143 346.967C273.324 348.338 267.868 349.91 264.018 350.46C254.831 351.772 150.198 351.775 141.126 350.463C137.335 349.915 132.272 348.599 129.875 347.539C123.238 344.603 115.229 336.445 111.892 329.221L109.018 322.999V276.999V230.999L111.706 225.263C117.244 213.447 129.49 204.753 142.011 203.748L148.282 203.244L148.74 178.122C149.154 155.382 149.41 152.386 151.44 146.537C159.368 123.691 178.667 109.572 202.018 109.536C206.968 109.529 213.268 110.123 216.018 110.856ZM190.714 138.559C187.159 140.335 183.313 143.233 181.542 145.468C176.036 152.42 175.518 155.445 175.518 180.625V203.499H202.518H229.518V180.625C229.518 155.445 229 152.42 223.494 145.468C219.107 139.93 209.785 135.499 202.518 135.499C198.182 135.499 195.388 136.223 190.714 138.559ZM140.939 230.918C134.725 233.624 134.518 235.109 134.518 276.932C134.518 317.304 134.757 319.452 139.635 322.868C141.725 324.332 148.153 324.499 202.518 324.499C269.681 324.499 266.223 324.842 269.124 317.9C271.218 312.888 271.157 240.964 269.054 235.931C266.325 229.4 267.309 229.494 202.3 229.538C155.837 229.569 143.394 229.849 140.939 230.918Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Segurança e privacidade</h3>
                    <p>Imagina sua intimidade exposta, sendo vigiado por câmeras escondidas?</p>
                    <p>Num Candeias você e sua família estarão seguros!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="462" height="450" viewBox="0 0 462 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M115.877 3.254C109.392 7.667 108.422 9.999 108.049 22.074L107.71 33.004H80.0087C48.8947 33.004 45.4197 33.502 32.9517 39.744C23.2657 44.593 13.6477 54.024 8.7187 63.504C2.2567 75.934 1.7077 78.962 1.1457 105.254L0.637695 129.004H230.887H461.136L460.628 105.254C460.066 78.962 459.517 75.934 453.055 63.504C448.091 53.956 438.165 44.226 428.65 39.58C416.187 33.495 412.685 33.004 381.765 33.004H354.064L353.725 22.172C353.411 12.107 353.189 11.081 350.585 7.671C349.044 5.653 346.383 3.278 344.672 2.393C340.407 0.187004 332.202 0.931003 328.03 3.902C322.914 7.545 321.539 11.273 321.074 22.754L320.66 33.004H230.887H141.114L140.731 22.651C140.392 13.491 140.043 11.838 137.706 8.30701C132.919 1.07401 122.593 -1.317 115.877 3.254ZM139.683 59.933C139.346 90.638 139.397 90.44 130.613 94.847C124.937 97.694 119.401 97.149 114.816 93.291C109.048 88.437 108.887 87.509 108.887 59.054V33.004H124.433H139.979L139.683 59.933ZM352.887 59.054C352.887 87.509 352.726 88.437 346.958 93.291C342.373 97.149 336.837 97.694 331.161 94.847C322.377 90.44 322.428 90.638 322.091 59.933L321.795 33.004H337.341H352.887V59.054ZM1.1007 275.254L1.3867 389.504L4.1147 397.504C10.5257 416.308 24.1787 429.742 43.3867 436.146L50.3867 438.48L148.637 438.783C202.674 438.95 246.887 438.9 246.887 438.671C246.887 438.443 242.792 434.262 237.788 429.38C210.815 403.068 195.827 369.595 194.188 332.004C191.124 261.739 239.598 200.047 309.387 185.394C322.15 182.714 353.701 182.697 365.887 185.364C394.23 191.566 418.578 204.689 438.462 224.477C444.003 229.992 451.128 238.216 454.295 242.754C457.462 247.292 460.241 251.004 460.47 251.004C460.699 251.004 460.887 230.754 460.887 206.004V161.004H230.851H0.814695L1.1007 275.254ZM325.145 204.074C277.731 208.659 236.256 241.97 220.903 287.797C210.766 318.053 213.377 353.005 227.906 381.541C234.362 394.223 240.777 402.972 251.35 413.519C307.866 469.893 402.602 457.542 443.436 388.475C476.294 332.897 459.697 260.278 405.96 224.504C388.057 212.585 369.622 206.062 348.06 204.018C336.463 202.918 337.11 202.916 325.145 204.074ZM335.711 270.673C337.183 271.744 339.399 274.603 340.637 277.024C342.746 281.152 342.887 282.666 342.887 301.216V321.004H362.675C381.225 321.004 382.739 321.145 386.867 323.254C393.29 326.536 395.387 329.92 395.387 337.004C395.387 344.093 393.297 347.46 386.828 350.792C382.45 353.047 381.961 353.075 352.387 352.792C309.176 352.377 311.532 354.675 311.067 312.504C310.861 293.884 311.13 282.21 311.817 279.889C313.221 275.142 316.48 271.103 320.302 269.37C324.37 267.526 332.312 268.197 335.711 270.673Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Plataforma de reservas online</h3>
                    <p>O associado Candeias tem uma plataforma própria para fazer suas reservas e programação de férias ou ainda pelo APP ou 0800 e Lojas de Atendimento Presencial.</p>
                    <p>Aqui você é VIP</p>
                    <p></p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="384" height="512" viewBox="0 0 384 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M146.511 1.53657C133.444 3.53657 124.929 5.71157 112.511 10.2206C88.2035 19.0486 68.5515 31.5866 50.0925 50.0456C23.0705 77.0676 7.12245 109.168 1.44245 147.965C0.135455 156.889 -0.109547 163.272 0.348453 176.465C1.24645 202.374 5.72945 221.062 16.4205 243.465C25.2885 262.047 86.0424 371.293 89.1334 374.215C92.5064 377.403 98.1805 377.936 101.794 375.404C106.989 371.766 106.869 373.522 107.084 297.8L107.284 227.29L101.641 219.237C91.2585 204.42 87.1025 192.274 86.2985 174.399C85.4845 156.3 89.0925 141.647 98.1785 126.152C102.473 118.828 118.874 102.427 126.198 98.1316C141.69 89.0476 156.344 85.4386 174.445 86.2496C197.938 87.3026 215.619 95.3386 231.702 112.275C243.591 124.794 250.846 139.347 254.002 157.009C256.178 169.186 258.34 170.522 277.011 171.231C295.903 171.948 303.684 174.919 316.825 186.433C322.819 191.685 323.412 191.965 328.559 191.965C333.081 191.965 334.498 191.502 337.108 189.17C339.92 186.657 340.314 185.588 340.997 178.609C341.415 174.338 341.39 165.553 340.94 159.087C335.319 78.1916 274.361 12.9166 193.732 1.45457C181.11 -0.340435 158.511 -0.301435 146.511 1.53657ZM221.145 194.13C217.599 195.492 213.359 198.451 208.645 202.852C204.721 206.515 200.656 210.176 199.61 210.988C198.111 212.153 192.939 212.571 175.11 212.965C153.266 213.448 152.322 213.554 146.856 216.116C140.173 219.249 134.452 224.832 131.002 231.587L128.511 236.465L128.242 307.626C127.973 378.48 127.982 378.811 130.138 384.575C134.177 395.371 143.791 403.051 155.708 405.003C163.409 406.264 348.613 406.264 356.314 405.003C368.231 403.051 377.845 395.371 381.884 384.575C384.04 378.811 384.049 378.48 383.78 307.626L383.511 236.465L381.02 231.587C377.57 224.832 371.849 219.249 365.166 216.116C359.7 213.554 358.756 213.448 336.912 212.965C319.083 212.571 313.911 212.153 312.412 210.988C311.366 210.176 307.302 206.516 303.381 202.855C291.954 192.187 290.932 191.954 255.723 192.017C228.697 192.065 226.109 192.223 221.145 194.13ZM271.011 247.522C288.599 251.655 305.108 264.893 312.786 281.021C318.066 292.111 319.452 298.364 319.312 310.465C318.996 337.692 302.541 360.134 275.846 369.748C269.395 372.071 267.005 372.389 256.011 372.389C245.017 372.389 242.627 372.071 236.176 369.748C221.797 364.57 211.107 356.377 203.093 344.395C196.055 333.873 192.861 323.434 192.71 310.465C192.57 298.364 193.956 292.111 199.236 281.021C206.807 265.119 223.33 251.736 240.523 247.579C248.475 245.657 262.958 245.63 271.011 247.522ZM249.591 267.125C231.588 269.589 216.956 284.375 213.825 303.267C210.844 321.259 221.08 340.014 238.281 348.076C245.06 351.254 246.166 351.465 256.011 351.465C265.856 351.465 266.962 351.254 273.741 348.076C290.942 340.014 301.178 321.259 298.197 303.267C294.228 279.317 273.442 263.861 249.591 267.125ZM127.389 420.402C123.2 422.225 121.011 425.605 121.011 430.247C121.011 433.355 124.744 440.872 140.644 469.775C152.817 491.905 161.599 506.744 163.757 508.832C166.911 511.883 167.66 512.152 171.736 511.692C174.25 511.409 177.028 510.365 178.032 509.325C181.033 506.22 216.17 441.762 216.724 438.347C217.305 434.768 215.067 430.157 211.645 427.883C209.969 426.769 202.97 426.35 179.011 425.927L148.511 425.389L140.193 422.177C130.691 418.508 131.487 418.618 127.389 420.402Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Parcerias de lazer com bônus nas atrações turísticas</h3>
                    <p>O Candeias possui convênio de parcerias com várias atrações turísticas das cidades: parques, museus, passeios, eventos e muito mais...</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles['border']} ${styles.card}`}>
                    <div><svg width="446" height="448" viewBox="0 0 446 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M213.847 1.26347C209.191 2.99947 216.345 -2.89553 150.99 53.0595C91.9751 103.585 91.9991 103.561 93.7201 110.543C95.8611 119.231 99.4501 120.894 116.056 120.894H129.106V162.758C129.106 186.574 129.539 206.943 130.111 210.008C132.983 225.392 144.539 238.418 159.445 243.071C164.812 244.747 169.961 244.894 223.106 244.894C276.251 244.894 281.4 244.747 286.767 243.071C301.768 238.388 313.211 225.491 316.101 210.008C316.673 206.943 317.106 186.574 317.106 162.758V120.894H330.156C346.904 120.894 350.574 119.145 352.532 110.233C353.83 104.321 351.344 101.114 333.782 86.0455L317.196 71.8145L316.901 44.3805C316.526 9.46647 318.607 12.5155 294.854 12.0755C285.392 11.9005 276.177 12.0335 274.375 12.3715C269.258 13.3315 267.106 16.3555 267.106 22.5835C267.106 25.5045 266.831 27.8945 266.495 27.8945C266.159 27.8945 259.871 22.7115 252.521 16.3765C245.172 10.0415 237.528 3.89547 235.534 2.71947C230.921 -0.00252509 219.327 -0.780526 213.847 1.26347ZM145.421 261.835C138.311 262.966 126.588 266.614 121.131 269.392C115.467 272.276 1.86113 337.779 0.906133 338.711C0.379133 339.226 43.7291 415.799 45.6721 417.785C46.1251 418.248 40.8621 417.428 152.283 434.392C250.615 449.364 253.657 449.654 272.406 445.833C277.968 444.699 285.689 442.532 289.563 441.017C300.083 436.901 435.156 366.197 438.448 363.083C442.582 359.171 445.257 353.324 445.836 346.93C447.077 333.253 435.563 320.933 421.49 320.879C419.354 320.871 396.004 327.232 369.602 335.014L321.598 349.165L318.395 355.877C312.124 369.024 299.366 378.492 284.513 381.024C278.393 382.067 273.449 381.782 241.106 378.513C193.656 373.719 196.179 374.121 192.882 370.824C188.008 365.95 190.138 357.107 196.575 355.491C197.95 355.146 217.148 356.683 239.237 358.907C278.039 362.814 279.589 362.896 285.003 361.336C292.797 359.09 300.316 351.418 302.676 343.302C304.652 336.503 304.059 328.682 301.13 322.942C296.8 314.454 293.913 312.918 235.687 288.122C205.63 275.323 178.466 264.181 175.322 263.362C168.302 261.532 152.417 260.721 145.421 261.835Z" fill="#12447D" />
                    </svg>
                    </div>
                    <h3>Patrimônio vitalício e hereditário</h3>
                    <p>Sim, o Candeias é um investimento, um patrimônio de qualidade de vida passado dos pais para os filhos.</p>
                </div>
            </SwiperSlide>
            <div>
                <div className="swiper-button-next">
                </div>
                <div className="swiper-button-prev">
                </div>
            </div>
        </Swiper>
    )
}