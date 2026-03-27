/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, ChevronDown, ChevronUp, Clock, DollarSign, Gift, MessageCircle, ShieldCheck, Star, Trash2, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-bold text-[#1C1C1C]"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-[#1F7A63]" /> : <ChevronDown className="text-[#1F7A63]" />}
      </button>
      {isOpen && <p className="mt-2 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
};

const CTAButton = ({ text, subtext }: { text: string; subtext?: string }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full max-w-md bg-[#2ECC71] hover:bg-[#27ae60] text-white font-black py-6 px-8 rounded-xl shadow-2xl flex flex-col items-center justify-center transition-all duration-300"
  >
    <span className="text-xl md:text-2xl uppercase tracking-tighter">{text}</span>
    {subtext && <span className="text-xs md:text-sm font-normal opacity-90 mt-1">{subtext}</span>}
  </motion.button>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1C1C] selection:bg-[#2ECC71] selection:text-white">
      {/* Top Bar - Scarcity */}
      <div className="bg-[#1C1C1C] text-white py-2 text-center text-xs md:text-sm font-bold uppercase tracking-widest">
        ⚠️ Atenção: Oferta promocional termina em breve. Aproveite agora!
      </div>

      {/* Hero Section */}
      <header className="px-4 pt-12 pb-20 md:pt-20 md:pb-32 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-[#1C1C1C]">
            Pare de jogar dinheiro no lixo com produtos de supermercado <span className="text-[#1F7A63]">caros que não funcionam.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Descubra como substituir produtos químicos caros por soluções caseiras potentes em até <span className="font-bold text-[#1C1C1C]">2 minutos</span>, economizando até 80% todos os meses.
          </p>
          <div className="flex justify-center mb-6">
            <CTAButton text="Quero economizar agora!" subtext="Acesso imediato por apenas R$ 27,00" />
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <ShieldCheck size={18} className="text-[#1F7A63]" />
            <span>Pagamento 100% seguro e garantia total de 30 dias</span>
          </div>
        </motion.div>
      </header>

      {/* Pain Section */}
      <section className="bg-[#F5F5F5] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Você já sentiu que está sendo <span className="text-red-600 underline">enganado</span> no supermercado?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="text-red-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Preços Abusivos</h3>
              <p className="text-gray-600">Você gasta centenas de reais por mês em frascos que acabam em poucos dias.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Trash2 className="text-red-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Promessas Falsas</h3>
              <p className="text-gray-600">Aquele produto "milagroso" da TV que não tira nem a sujeira básica do dia a dia.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-red-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Armário Lotado</h3>
              <p className="text-gray-600">Um produto pra cada coisa: chão, vidro, banheiro, cozinha... Uma bagunça cara.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-block bg-[#2ECC71]/10 text-[#1F7A63] font-bold px-4 py-1 rounded-full text-sm mb-6 uppercase tracking-wider">
              A Solução Definitiva
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Conheça o <span className="text-[#1F7A63]">Manual da Limpeza</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Não é apenas um guia, é o seu novo aliado. Um aplicativo prático com mais de <span className="font-bold text-[#1C1C1C]">100 fórmulas testadas e aprovadas</span> por especialistas para limpar qualquer superfície com o que você já tem em casa.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Receitas que ficam prontas em menos de 2 minutos",
                "Ingredientes simples e baratos (vinagre, bicarbonato, etc)",
                "Menos química tóxica na sua casa e na sua pele",
                "Funciona melhor que os produtos de marca famosa",
                "Acesso vitalício na palma da sua mão"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#2ECC71] shrink-0 mt-1" />
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <CTAButton text="Quero o Manual agora!" />
          </div>
          <div className="flex-1 relative">
            <div className="bg-[#1F7A63] rounded-3xl p-4 shadow-2xl rotate-3">
              <img 
                src="https://picsum.photos/seed/cleaning-app/600/800" 
                alt="App Manual da Limpeza" 
                className="rounded-2xl w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex text-yellow-400 mb-2">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-xs font-bold">"Economizei R$ 140,00 logo no primeiro mês!"</p>
              <p className="text-[10px] text-gray-400 mt-1">— Maria S., 54 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism Section */}
      <section className="bg-[#1F7A63] py-24 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12">Por que funciona tão bem?</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="flex gap-6">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="text-[#2ECC71]" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fórmulas de 2 Minutos</h3>
                <p className="text-white/70">Nada de processos complexos. Misturou, usou. Simples assim.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                <ShieldCheck className="text-[#2ECC71]" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Testado e Aprovado</h3>
                <p className="text-white/70">Cada receita passou por testes rigorosos de eficiência em diferentes superfícies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">Quem usa, <span className="text-[#1F7A63]">não troca por nada</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Oliveira",
                age: "42 anos",
                text: "Eu não acreditava que vinagre e bicarbonato podiam limpar meu fogão melhor que o desengordurante caro. O Manual me provou o contrário. Sensacional!",
                img: "https://picsum.photos/seed/person1/100/100"
              },
              {
                name: "Ana Paula",
                age: "38 anos",
                text: "O melhor investimento que fiz pra minha casa este ano. O app é super fácil de usar e as receitas são muito práticas. Economia real!",
                img: "https://picsum.photos/seed/person2/100/100"
              },
              {
                name: "Dona Lurdes",
                age: "67 anos",
                text: "Meus filhos que me deram. Agora não preciso mais carregar sacolas pesadas de produtos do mercado. Faço tudo em casa e fica brilhando.",
                img: "https://picsum.photos/seed/person3/100/100"
              }
            ].map((testimony, i) => (
              <div key={i} className="bg-[#F5F5F5] p-8 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimony.img} alt={testimony.name} className="w-14 h-14 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold">{testimony.name}</h4>
                    <p className="text-xs text-gray-500">{testimony.age}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimony.text}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
              </div>
            ))}
          </div>
          
          {/* Before/After Suggestion */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl">
              <img src="https://picsum.photos/seed/dirty/600/400" alt="Antes" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Antes</div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <img src="https://picsum.photos/seed/clean/600/400" alt="Depois" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-[#2ECC71] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Depois</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 px-4 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">E você ainda leva <span className="text-[#1F7A63]">TUDO ISSO</span> de bônus:</h2>
          <div className="space-y-4">
            {[
              { title: "Lista de Ingredientes Baratos", desc: "Onde comprar e como pagar menos em cada item.", value: "R$ 29,90" },
              { title: "Guia de Acessórios Essenciais", desc: "O que você realmente precisa ter para facilitar a limpeza.", value: "R$ 19,90" },
              { title: "Grupo VIP no WhatsApp", desc: "Troque experiências e receba dicas exclusivas diariamente.", value: "R$ 47,00" },
              { title: "Suporte Prioritário", desc: "Tire suas dúvidas diretamente com nossa equipe.", value: "Inestimável" },
              { title: "Certificado de Conclusão", desc: "Para quem quer se profissionalizar na área.", value: "R$ 37,00" }
            ].map((bonus, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl flex items-center justify-between shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-[#2ECC71]/10 p-3 rounded-xl">
                    <Gift className="text-[#1F7A63]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{bonus.title}</h4>
                    <p className="text-sm text-gray-500">{bonus.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <span className="text-xs text-gray-400 line-through">{bonus.value}</span>
                  <p className="text-[#2ECC71] font-bold text-sm uppercase">Grátis</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto bg-[#F5F5F5] p-8 md:p-10 rounded-[3rem] border-4 border-[#1F7A63] shadow-2xl relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1F7A63] text-white px-8 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
            Oferta Exclusiva
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Acesso Vitalício ao Manual da Limpeza</h2>
          <p className="text-gray-500 mb-8">Tudo o que você precisa para economizar e limpar melhor.</p>
          
          <div className="flex flex-col items-center mb-6">
            <span className="text-gray-400 line-through text-sm">De R$ 97,90</span>
            <div className="flex flex-row items-center justify-center gap-3 mt-1">
              <span className="text-base font-bold text-gray-600">Por apenas</span>
              <span className="text-4xl md:text-5xl font-black text-[#1F7A63] tracking-tighter">R$ 27,00</span>
            </div>
            <p className="text-[10px] font-bold text-[#2ECC71] mt-2 uppercase tracking-widest">Pagamento Único • Sem Mensalidades</p>
          </div>

          <div className="flex justify-center mb-8">
            <CTAButton text="Sim! Quero economizar agora" subtext="Clique para garantir sua vaga" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
            <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-2.png" alt="Pix" className="h-6" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-4 bg-[#1C1C1C] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0">
            <img src="https://cdn-icons-png.flaticon.com/512/1041/1041888.png" alt="Garantia" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Risco Zero: <span className="text-[#2ECC71]">Garantia de 30 Dias</span></h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Eu tenho tanta confiança no que você vai receber que te dou 30 dias de garantia incondicional. Se você não economizar, se não gostar das receitas ou se simplesmente achar que não é pra você, eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <p className="font-bold text-[#2ECC71]">O risco é todo meu. O benefício é todo seu.</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F7A63] blur-[120px] opacity-20"></div>
      </section>

      {/* Objections & FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">Dúvidas Frequentes</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Será que realmente funciona?" 
              answer="Sim! Todas as fórmulas foram testadas exaustivamente. Elas utilizam princípios químicos básicos (como acidez e alcalinidade) que são a base de muitos produtos de mercado, mas sem os enchimentos e perfumes caros."
            />
            <FAQItem 
              question="É difícil de fazer?" 
              answer="De jeito nenhum. A maioria das receitas leva menos de 2 minutos e consiste apenas em misturar 2 ou 3 ingredientes que você provavelmente já tem na despensa."
            />
            <FAQItem 
              question="Preciso comprar ingredientes caros?" 
              answer="Pelo contrário! Você vai usar itens como vinagre, bicarbonato de sódio, álcool e detergente neutro. Coisas que custam centavos perto dos produtos de marca."
            />
            <FAQItem 
              question="Como eu recebo o acesso?" 
              answer="Imediatamente após a confirmação do pagamento, você receberá um link exclusivo no seu e-mail para acessar o aplicativo e todos os bônus."
            />
            <FAQItem 
              question="Serve para qualquer tipo de limpeza?" 
              answer="Sim! Temos fórmulas para vidros, estofados, gordura pesada, banheiros, pisos de madeira, porcelanato e muito mais. São mais de 100 opções."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-[#F5F5F5] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            A decisão é sua: continuar <span className="text-red-600">gastando fortunas</span> no mercado ou começar a <span className="text-[#1F7A63]">economizar hoje.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Aproveite o preço promocional de R$ 27,00 antes que a oferta saia do ar.
          </p>
          <div className="flex justify-center mb-12">
            <CTAButton text="Quero acesso imediato!" subtext="Pagamento único de R$ 27,00" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span>Suporte via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} />
              <span>Acesso Instantâneo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-100 text-center text-gray-400 text-xs">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">© 2026 Manual da Limpeza. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-[#1F7A63]">Termos de Uso</a>
            <a href="#" className="hover:text-[#1F7A63]">Política de Privacidade</a>
          </div>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Este site não faz parte do Google ou do Facebook. Além disso, este site NÃO é endossado pelo Google ou Facebook de nenhuma maneira. Google e Facebook são marcas comerciais de suas respectivas empresas.
          </p>
        </div>
      </footer>
    </div>
  );
}
