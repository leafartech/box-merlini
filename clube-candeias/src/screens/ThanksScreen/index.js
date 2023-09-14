import Text from '@/components/Text';
import styles from './ThanksScreen.module.css';
import Section from '@/components/Section';
import { useEffect, useState } from 'react';

export default function ThanksScreen() {
    // const [loaded, setLoaded] = useState(false);
{/* <div class="_form_5"></div><script src="https://lauromts.activehosted.com/f/embed.php?id=5" type="text/javascript" charset="utf-8"></script> */}

    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            // script.src = "https://rafaeltramontin98.activehosted.com/f/embed.php?id=9";
            script.src = "https://lauromts.activehosted.com/f/embed.php?id=5";
            script.type = "text/javascript";
            script.charset = "utf-8";
            document.querySelector('._form_9').appendChild(script);
            cont++
        }
    }, []);

    return (
        <div className={styles['thanks-screen']}>
            <Section className={styles.text}>
                <Text main="Para melhor te atender, responda o formulário abaixo!" />
                <div className="_form_9"></div>
            </Section>
        </div>
    );
}