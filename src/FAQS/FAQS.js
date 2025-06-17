import React, { useState } from 'react'
import style from './faqs.modules.css'
import { faqsData } from './data'
import { object } from 'yup'
import FAQ from './FAQ';

 function FAQS() {

    const [faqs, setFaqa] = useState(faqsData);

  return (
    <main className={style.container}>
        <section className={style.faqs}>
            <h1>FAQS</h1>
            {faqs.map(faq => <FAQ key={faq.id} {...faq}/>)}
        </section>
    </main>
  )
}
export default FAQS