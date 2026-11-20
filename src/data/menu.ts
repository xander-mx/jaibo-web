export type MenuItem = {name:string; price:string; description?:string};
export type MenuGroup = {title:string; emoji:string; items:MenuItem[]};
export const menu: MenuGroup[] = [
  {title:'Mariscos en concha',emoji:'🦪',items:[
    {name:'Ostión Veracruz · orden',price:'$80',description:'Preparada, aproximadamente 1 kg'},
    {name:'Ostión Veracruz · kilo',price:'$60',description:'Producto cerrado'},
    {name:'Ostión Nayarit · orden',price:'$90'},
    {name:'Ostión Nayarit · kilo',price:'$80',description:'Producto cerrado'},
    {name:'Ostión de piedra · orden',price:'$100'},
    {name:'Ostión de piedra · kilo',price:'$100',description:'Producto cerrado'},
    {name:'Pata de mula negra chica · pieza',price:'$4',description:'Cerrada'},
    {name:'Pata de mula negra chica · orden',price:'$80',description:'12 piezas preparadas'},
    {name:'Pata de mula negra mediana · pieza',price:'$5',description:'Cerrada'},
    {name:'Pata de mula negra mediana · orden',price:'$100',description:'12 piezas preparadas'},
    {name:'Pata de mula negra grande · pieza',price:'$7',description:'Cerrada'},
    {name:'Pata de mula negra grande · orden',price:'$120',description:'12 piezas preparadas'},
    {name:'Pata de mula reina chica · pieza',price:'$4',description:'Cerrada · según disponibilidad'},
    {name:'Pata de mula reina chica · orden',price:'$80',description:'12 piezas preparadas · según disponibilidad'},
    {name:'Pata de mula reina mediana · pieza',price:'$5',description:'Cerrada · según disponibilidad'},
    {name:'Pata de mula reina mediana · orden',price:'$100',description:'12 piezas preparadas · según disponibilidad'},
    {name:'Pata de mula reina grande · pieza',price:'$7',description:'Cerrada · según disponibilidad'},
    {name:'Pata de mula reina grande · orden',price:'$120',description:'12 piezas preparadas · según disponibilidad'},
    {name:'Almeja chocolata · kilo',price:'$80',description:'Producto cerrado'},
    {name:'Almeja chocolata · orden',price:'$80',description:'Preparada, aproximadamente 1 kg'},
    {name:'Almeja reina · pieza cerrada',price:'$70',description:'Según disponibilidad'},
    {name:'Almeja reina · preparada',price:'$80',description:'Según disponibilidad'},
    {name:'Almeja melón · pieza cerrada',price:'$90',description:'Según disponibilidad'},
    {name:'Almeja melón · preparada',price:'$100',description:'Según disponibilidad'}
  ]},
  {title:'Cocteles de mariscos',emoji:'🍤',items:[
    {name:'Jaivaso · chico',price:'$80',description:'Ingredientes a elección'},
    {name:'Jaivaso · mediano',price:'$120',description:'Ingredientes a elección'},
    {name:'Jaivaso · grande',price:'$160',description:'Ingredientes a elección'},
    {name:'Coctel Especial · chico',price:'$80',description:'Con base de ceviche y caldo de camarón con Clamato'},
    {name:'Coctel Especial · mediano',price:'$120'},
    {name:'Coctel Especial · grande',price:'$160'}
  ]},
  {title:'Ceviches y aguachiles',emoji:'🍋',items:[
    {name:'Aguachile de camarón · tostada',price:'$50'},
    {name:'Aguachile de camarón · medio kilo',price:'$150'},
    {name:'Aguachile de camarón · kilo',price:'$300'},
    {name:'Ceviche de pescado en trozo · tostada',price:'$45'},
    {name:'Ceviche de pescado en trozo · medio kilo',price:'$100'},
    {name:'Ceviche de pescado en trozo · kilo',price:'$200'},
    {name:'Ceviche de camarón mixto · tostada',price:'$50'},
    {name:'Ceviche de camarón mixto · medio kilo',price:'$150'},
    {name:'Ceviche de camarón mixto · kilo',price:'$300'},
    {name:'Tostada Especial',price:'$90',description:'Ceviche de pescado, camarones, aguacate y mayonesa'}
  ]},
  {title:'Botanas y especialidades',emoji:'🐙',items:[
    {name:'Callo de hacha · 100 g',price:'$200',description:'Por peso; preparado o natural al mismo precio'},
    {name:'Tentáculo de pulpo',price:'$80'},
    {name:'Botana de mariscos al gusto',price:'A cotizar',description:'Precio según ingredientes y cantidades'},
    {name:'Tostitos preparados',price:'$100',description:'Con aguachile o ceviche a elección'}
  ]},
  {title:'Bebidas y preparados',emoji:'🥤',items:[
    {name:'Coca-Cola',price:'$25'},
    {name:'Sprite',price:'$25'},
    {name:'Fanta',price:'$25'},
    {name:'Manzanita Sol',price:'$25'},
    {name:'Preparado para michelada',price:'$35',description:'Sin cerveza; vaso sin escarchado'}
  ]}
];
export const highlights = [
  {name:'Aguachile de camarón',price:'Tostada $50',icon:'🍋',photo:null},
  {name:'Ostiones en concha',price:'Orden desde $80',icon:'🦪',photo:null},
  {name:'Jaivaso',price:'Desde $80',icon:'🍤',photo:null},
  {name:'Pata de mula',price:'Orden desde $80',icon:'🐚',photo:null},
  {name:'Tostada Especial',price:'$90',icon:'🌮',photo:'/images/tostada-especial.jpg'},
  {name:'Callo de hacha',price:'$200 por 100 g',icon:'🐙',photo:null}
];
