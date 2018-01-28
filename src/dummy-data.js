import slug from 'slug'

const products = [
  {name:'acqua', unitMeasure:'kg', unitPrice:0.0000, vatCode: 0.0000, category: 'liquidi' },
  {name:'burro', unitMeasure:'kg', unitPrice:7.0000, vatCode: 0.0400, category: 'grassi' },
  {name:'cassonade', unitMeasure:'kg', unitPrice:6.0000, vatCode: 0.0400, category: 'zuccheri' },
  {name:'cioccolato fondente', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.1000, category: 'cioccolato' },
  {name:'cioccolato fondente 70%', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.1000, category: 'cioccolato' },
  {name:'farina 00 debole', unitMeasure:'kg', unitPrice:0.8000, vatCode: 0.0400, category: 'farine' },
  {name:'fondente bianco', unitMeasure:'kg', unitPrice:3.0000, vatCode: 0.1000, category: 'zuccheri' },
  {name:'latte', unitMeasure:'kg', unitPrice:1.1000, vatCode: 0.1000, category: 'latte' },
  {name:'panna fresca tigullio 38%', unitMeasure:'kg', unitPrice:3.8900, vatCode: 0.1000, category: 'grassi' },
  {name:'sale', unitMeasure:'kg', unitPrice:1.0000, vatCode: 0.0400, category: 'insaporitori' },
  {name:'tuorlo', unitMeasure:'kg', unitPrice:5.5500, vatCode: 0.1000, category: 'proteine' },
  {name:'uovo intero', unitMeasure:'kg', unitPrice:5.5500, vatCode: 0.1000, category: 'proteine' },
  {name:'zucchero semolato', unitMeasure:'kg', unitPrice:1.0000, vatCode: 0.0400, category: 'zuccheri' },
  {name:'bacca di vaniglia', unitMeasure:'kg', unitPrice:152.0000, vatCode: 0.2200, category: 'spezie circa 3 grammi a baccell'o},
  {name:'amido di mais', unitMeasure:'kg', unitPrice:1.5000, vatCode: 0.1000, category: 'farine' },
  {name:'caffè macinato', unitMeasure:'kg', unitPrice:20.0000, vatCode: 0.1000, category: 'spezie' },
  {name:'zucchero a velo', unitMeasure:'kg', unitPrice:2.0000, vatCode: 0.0400, category: 'zuccheri' },
  {name:'rabarbaro pezzi congelato', unitMeasure:'kg', unitPrice:5.1000, vatCode: 0.1000, category: 'frutta in pezzi' },
  {name:'mango speziato purea congelato', unitMeasure:'kg', unitPrice:10.2000, vatCode: 0.1000, category: 'frutta purea' },
  {name:'fragola purea congelato', unitMeasure:'kg', unitPrice:6.8800, vatCode: 0.1000, category: 'frutta purea' },
  {name:'lampone purea congelato', unitMeasure:'kg', unitPrice:9.9500, vatCode: 0.1000, category: 'frutta purea' },
  {name:'ribes nero purea congelato', unitMeasure:'kg', unitPrice:7.9900, vatCode: 0.1000, category: 'frutta purea' },
  {name:'frutto passione purea congelato', unitMeasure:'kg', unitPrice:10.0300, vatCode: 0.1000, category: 'frutta purea' },
  {name:'lucidante in gel horeca select', unitMeasure:'kg', unitPrice:4.6100, vatCode: 0.1000, category: 'decorazioni' },
  {name:'pasta di mandorle', unitMeasure:'kg', unitPrice:9.5700, vatCode: 0.1000, category: 'paste' },
  {name:'burro Corman verde', unitMeasure:'kg', unitPrice:11.6000, vatCode: 0.0400, category: 'grassi' },
  {name:'albume', unitMeasure:'kg', unitPrice:5.5500, vatCode: 0.2200, category: 'liquidi' },
  {name:'gelatina in polvere', unitMeasure:'kg', unitPrice:33.0000, vatCode: 0.2200, category: 'gelatine' },
  {name:'zucchero invertito', unitMeasure:'kg', unitPrice:1.6700, vatCode: 0.0400, category: 'zuccheri' },
  {name:'succo di limone', unitMeasure:'kg', unitPrice:5.0000, vatCode: 0.2200, category: 'frutta succo' },
  {name:'pectina NH', unitMeasure:'kg', unitPrice:42.0000, vatCode: 0.0400, category: 'addensanti' },
  {name:'farina di mandorle', unitMeasure:'kg', unitPrice:12.0000, vatCode: 0.1000, category: 'farine' },
  {name:'fecola di patate', unitMeasure:'kg', unitPrice:1.3500, vatCode: 0.1000, category: 'farine' },
  {name:'amido di riso', unitMeasure:'kg', unitPrice:3.2600, vatCode: 0.1000, category: 'farine' },
  {name:'agar agar', unitMeasure:'kg', unitPrice:45.0000, vatCode: 0.2200, category: 'gelatine' },
  {name:'bianco uovo in polvere', unitMeasure:'kg', unitPrice:40.0000, vatCode: 0.2200, category: 'addensanti' },
  {name:'farina di farro integrale', unitMeasure:'kg', unitPrice:1.9800, vatCode: 0.1000, category: 'farine' },
  {name:'isomalto', unitMeasure:'kg', unitPrice:16.0000, vatCode: 0.0400, category: 'zuccheri' },
  {name:'pectina gialla', unitMeasure:'kg', unitPrice:35.0000, vatCode: 0.0400, category: 'addensanti' },
  {name:'Burro Corman BLU in placche', unitMeasure:'kg', unitPrice:6.9000, vatCode: 0.0400, category: 'grassi' },
  {name:'zenzero purea congelato', unitMeasure:'kg', unitPrice:11.0000, vatCode: 0.1000, category: 'frutta purea' },
  {name:'albicocca purea congelato', unitMeasure:'kg', unitPrice:5.6100, vatCode: 0.1000, category: 'frutta purea' },
  {name:'bicchiere monouso 350ml',unitMeasure:'pz', unitPrice: 0.2000, vatCode: 0.2200, category: 'imballi' },
  {name:'rosmarino fresco', unitMeasure:'kg', unitPrice:10.0000, vatCode: 0.2200, category: 'erbe aromatiche' },
  {name:'lievito di birra', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.0400, category: 'lieviti' },
  {name:'farina forte (W300)', unitMeasure:'kg', unitPrice:1.0000, vatCode: 0.0400, category: 'farine' },
  {name:'Cioccolato bianco', unitMeasure:'kg', unitPrice:12.0000, vatCode: 0.1000, category: 'cioccolato' },
  {name:'Estratto al caffè', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.2200, category: 'caffè' },
  {name:'Cioccolato Gianduia', unitMeasure:'kg', unitPrice:12.0000, vatCode: 0.1000, category: 'cioccolato' },
  {name:'Nocciole tostate', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.1000, category: 'frutta secca' },
  {name:'Nocciole', unitMeasure:'kg', unitPrice:25.0000, vatCode: 0.0400, category: 'frutta secca' },
  {name:'Burro di cacao', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.1000, category: 'cioccolato' },
  {name:'Cioccolato al latte', unitMeasure:'kg', unitPrice:12.0000, vatCode: 0.1000, category: 'cioccolato' },
  {name:'Pasta al caffè', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.2200, category: 'aromi in pasta' },
  {name:'Pasta di nocciola', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.2200, category: 'aromi in pasta' },
  {name:'Massa di cacao', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.1000, category: 'cioccolato' },
  {name:'Cacao Amaro in polvere', unitMeasure:'kg', unitPrice:13.0000, vatCode: 0.1000, category: 'cioccolato' },
  {name:'Tazzina caffè monouso', unitMeasure:'pz', unitPrice:0.1000, vatCode:0.2200, category:'imballi'},
  {name:'Caffè "gourmet" ', unitMeasure:'kg', unitPrice:55.0000, vatCode: 0.1000, category: 'caffè' },
  {name:'Caffè normale', unitMeasure:'kg', unitPrice:25.0000, vatCode: 0.1000, category: 'caffè' },
  {name:'Acido citrico', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.1000, category: 'acidificanti'},
  {name:'Mora purea congelato', unitMeasure:'kg', unitPrice:10.7100, vatCode: 0.1000, category: 'frutta purea' },
  {name:'Aroma alla lavanda', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.2200, category: 'aromi' },
  {name:'Mirtillo purea congelato', unitMeasure:'kg', unitPrice:10.0000, vatCode: 0.1000, category: 'frutta purea' },
  {name:'Cocco rapee', unitMeasure:'kg', unitPrice:12.0000, vatCode: 0.2200, category: 'farine' },
  {name:'Pistacchio pelato', unitMeasure:'kg', unitPrice:25.0000, vatCode: 0.1000, category: 'frutta secca' },
  {name:'rum bianco agricolo', unitMeasure:'kg', unitPrice:40.0000, vatCode: 0.2200, category: 'superalcoolici' },
  {name:'Cocco purea congelato', unitMeasure:'kg', unitPrice:10.0000, vatCode: 0.1000, category: 'frutta purea' },
  {name:'Zeste di arancia', unitMeasure:'kg', unitPrice:17.0000, vatCode: 0.0400, category: 'frutta' },
  {name:'Zeste di limone', unitMeasure:'kg', unitPrice:17.0000, vatCode: 0.0400, category: 'frutta' },
  {name:'Foglie di menta', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.1000, category: 'erbe aromatiche' },
  {name:'Ananas sgocciolato in bastoncini', unitMeasure:'kg', unitPrice:5.0000, vatCode: 0.1000, category: 'Frutta fresca' },
  {name:'Coriandolo fresco', unitMeasure:'kg', unitPrice:20.0000, vatCode: 0.1000, category: 'erbe aromatiche' },
  {name:'Pepe nero in grani', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.2200, category: 'spezie' },
  {name:'Fior di sale di Guerande', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.0400, category: 'sale' },
  {name:'Basilico fresco in foglie', unitMeasure:'kg', unitPrice:40.0000, vatCode: 0.0400, category: 'erbe aromatiche' },
  {name:'Acido tartarico', unitMeasure:'kg', unitPrice:30.0000, vatCode: 0.1000, category: 'acidificanti' },
  {name:'Letchi in purea', unitMeasure:'kg', unitPrice:12.0000, vatCode: 0.1000, category: 'frutta purea' },
  {name:'Glucosio (sciroppo)', unitMeasure:'kg', unitPrice:6.0000, vatCode: 0.0400, category: 'zuccheri' },
  {name:'Essenza di rosa', unitMeasure:'kg', unitPrice:47.0000, vatCode: 0.2200, category: 'aromi' },
  {name:'Zucchero "neige decor"', unitMeasure:'kg', unitPrice:22.0000, vatCode: 0.0400, category: 'zuccheri' },
  {name:'Fragole fresche', unitMeasure:'kg', unitPrice:12.0000, vatCode: 0.0400, category: 'Frutta fresca' },
  {name:'colorante rosso carminio', unitMeasure:'kg', unitPrice:500.0000, vatCode: 0.2200, category: 'coloranti' },
  {name:'colorante rosso fragola', unitMeasure:'kg', unitPrice:50.0000, vatCode: 0.2200, category: 'coloranti' },
  {name:'Albume in polvere', unitMeasure:'kg', unitPrice:20.0000, vatCode: 0.2200, category: 'uova' },
  {name:'Litchi sciroppati', unitMeasure:'kg', unitPrice:7.0000, vatCode: 0.2200, category: 'frutta sciroppata' },
  {name:'Copertura bianca ivoire Valrhona', unitMeasure:'kg', unitPrice:27.0000, vatCode: 0.2200, category: 'cioccolato' },
  {name:'Nappage neutro', unitMeasure:'kg', unitPrice:10.0000, vatCode: 0.2200, category: 'coperture' },
  {name:'Lamponi freschi', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.0400, category: 'Frutta fresca' },
  {name:'Pasta di pistacchio', unitMeasure:'kg', unitPrice:45.0000, vatCode: 0.2200, category: 'paste' },
  {name:'Burro salato', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.1000, category: 'burro' },
  {name:'Essenza di bergamotto', unitMeasure:'kg', unitPrice:200.0000, vatCode: 0.2200, category: 'aromi' },
  {name:'Essenza di violetta', unitMeasure:'kg', unitPrice:200.0000, vatCode: 0.2200, category: 'aromi' },
  {name:'Confettura ai frutti di bosco', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.1000, category: 'confetture' },
  {name:'Farina per croissant', unitMeasure:'kg', unitPrice:1.5000, vatCode: 0.0400, category: 'farine' },
  {name:'Malto in polvere', unitMeasure:'kg', unitPrice:10.0000, vatCode: 0.1000, category: 'lieviti' },
  {name:'Lievito chimico', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.1000, category: 'lieviti' },
  {name:'Acqua di fiori di arancio', unitMeasure:'kg', unitPrice: 21.7000, vatCode: 0.2200, category: 'aromi'}
  {name:'Noci sgusciate', unitMeasure:'kg', unitPrice:25.0000, vatCode: 0.1000, category: 'frutta secca' },
  {name:'Scorza di arancia candita', unitMeasure:'kg', unitPrice:20.0000, vatCode: 0.0400, category: 'canditi' },
  {name:'Arancia fresca', unitMeasure:'kg', unitPrice:2.5000, vatCode: 0.0400, category: 'Frutta fresca' },
  {name:'Miele millefiori', unitMeasure:'kg', unitPrice:15.0000, vatCode: 0.1000, category: 'Miele' },
  {name:'Mandorle sfilettate', unitMeasure:'kg', unitPrice:20.0000, vatCode: 0.1000, category: 'frutta secca' },
  {name:'Aceto di vino bianco', unitMeasure:'kg', unitPrice:3.0000, vatCode: 0.1000, category: 'Aceto' },
  {name:'rabarbaro purea congelato', unitMeasure:'kg', unitPrice:12.0000, vatCode: 0.1000, category: 'frutta purea' },
  {name:'Uva fresca', unitMeasure:'kg', unitPrice:4.0000, vatCode: 0.0400, category: 'Frutta fresca' },
  {name:'Mirtillo fresco', unitMeasure:'kg', unitPrice:10.0000, vatCode: 0.0400, category: 'Frutta fresca' },
  {name:'Mora fresca', unitMeasure:'kg', unitPrice:12.0000, vatCode: 0.0400, category: 'Frutta fresca' },
  {name:'Zucchero Muscovado', unitMeasure:'kg', unitPrice:4.9300, vatCode: 0.1000, category: 'Zucchero'},
  {name:'Tè alla violetta in foglie', unitMeasure:'kg', unitPrice:40.0000, vatCode: 0.1000, category: 'Te e tisane'}
]

export {
  products,
}