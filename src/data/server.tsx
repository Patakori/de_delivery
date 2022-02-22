
import { createServer } from 'miragejs';

export function Data(){

  createServer({
    routes(){
      this.namespace = 'api';
  
      this.get('/products', () => (
        {
          data: [ {
          category: 'popular',
          products: [
            {
              id: 'pop1',
              image: "https://courier-images-prod.imgix.net/produc_variant/00008502_ebec6579-f3d3-43c3-a9b3-96d7b5aacfe9.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,39",
              name: 'Skill 269ml',
            },
            {
              id: 'pop2',
              image: "https://courier-images-prod.imgix.net/produc_variant/00010266_b1667e4c-5cb1-4d0c-a35f-b9264c30dc46.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,99",
              name: 'Brahma Duplo Malte 350ml',
            },
            {
              id: 'pop3',
              image: "https://courier-images-prod.imgix.net/produc_variant/00008577_06286b79-24d0-41bd-8800-5589089a7982.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "3,29",
              name: 'Budweiser 269ml',
            },
            {
              id: 'pop4',
              image: "https://courier-images-prod.imgix.net/produc_variant/00008725_ff1b1271-83d6-4953-9c23-dc0403a1f629.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,09",
              name: 'Skol 300ml | Apenas o Líquido',
            },
            {
              id: 'pop5',
              image: "https://courier-images-prod.imgix.net/produc_variant/00008511_6bf6e23b-d7dd-4741-8edf-d60d6f03ae5d.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,49",
              name: 'Brahma Chopp 269ml',
            },
            {
              id: 'pop6',
              image: "https://courier-images-prod.imgix.net/produc_variant/00008583_ed3d126a-4dd4-45a8-aa08-43856bdb06d4.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "3,09",
              name: 'Stella Artois 269ml',
            },
            {
              id: 'pop7',
              image: "https://courier-images-prod.imgix.net/produc_variant/00008527_92132f76-a5c9-4039-a425-00493a5bed7f.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "1,99",
              name: 'Antarctica Subzero 269ml',
            },
            {
              id: 'pop8',
              image: "https://courier-images-prod.imgix.net/produc_variant/00009746_a473285e-0edf-4073-842f-2930cb35a570.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "3,39",
              name: 'Original 350ml',
            },
            {
              id: 'pop9',
              image: "https://courier-images-prod.imgix.net/produc_variant/00009746_a473285e-0edf-4073-842f-2930cb35a570.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,79",
              name: 'Skol 350ml',
            },
            {
              id: 'pop10',
              image: "https://courier-images-prod.imgix.net/produc_variant/00009466_d3d6a24d-190f-461a-8ebb-31517669e92b.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,49",
              name: 'Skol Puro Malte 269ml - Unidade',
            },
          ]},

        
          {
            category: 'beats',
            products: [
              {
                id: 'be1',
                image: "https://courier-images-prod.imgix.net/produc_variant/00008599_de388ae5-6bbe-4eea-97fb-5847a6519859.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "5,29",
                name: 'Beats Senses 269ml',
              },
              {
                id: 'be2',
                image: "https://courier-images-prod.imgix.net/produc_variant/00016825_90d08ad5-12a6-49d2-a94c-2a63086a192f.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "46,80",
                name: 'Beats GT 269ml - Pack de 8 unidades',
              },
              {
                id: 'be3',
                image: "https://courier-images-prod.imgix.net/produc_variant/00016824_44fd904d-650e-4985-922b-c0d5038b321d.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "39,36",
                name: 'Beats Senses 269ml - Pack de 8 unidades',
              },
              {
                id: 'be4',
                image: 'https://courier-images-prod.imgix.net/produc_variant/00016874_debf95a1-6221-49f1-ae06-bc844c05f423.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                price: "88,56",
                name: 'Beats GT 269ml - Pack de 16 unidades',
              },
              {
                id: 'be5',
                image: 'https://courier-images-prod.imgix.net/produc_variant/00016827_aadd86ad-e80a-4730-8d2c-e611b74a5e78.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                price: "40,85",
                name: 'Beats Ginger 269ml - Pack de 8 unidades',
              },
            ]},


            {
              category: 'returnable',
              products: [
                {
                  id: 'ret1',
                  image: "https://courier-images-prod.imgix.net/produc_variant/00008725_ff1b1271-83d6-4953-9c23-dc0403a1f629.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                  price: "2,09",
                  name: 'Skol 300ml | Apenas o Líquido',
                },
                {
                  id: 'ret2',
                  image: "https://courier-images-prod.imgix.net/produc_variant/00008729_cda51fd4-0a6d-4f49-bece-0f147ad657b4.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                  price: "2,19",
                  name: 'Brahma Chopp 300ml | Apenas o Líquido',
                },
                {
                  id: 'ret3',
                  image: "https://courier-images-prod.imgix.net/produc_variant/00010267_0d4dff2e-74d6-4ec7-a0cc-5dd966e5492f.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                  price: "6,49",
                  name: 'Brahma Duplo Malte 600ml | Apenas o Líquido',
                },
                {
                  id: 'ret4',
                  image: 'https://courier-images-prod.imgix.net/produc_variant/00008771_bf015f8c-f1f4-4259-b74c-1c98ab57319b.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                  price: "6,79",
                  name: 'Original 600ml | Apenas o Líquido - Unidade',
                },
                {
                  id: 'ret5',
                  image: 'https://courier-images-prod.imgix.net/produc_variant/00008772_4493d801-f578-41dc-84f1-3d0da3b04c4b.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                  price: "7,79",
                  name: 'Original 600ml | Vasilhame Incluso - Unidade',
                },
              ]},


              {
                category: 'beer',
                products: [
                  {
                    id: 'beer1',
                    image: "https://courier-images-prod.imgix.net/produc_variant/00010266_b1667e4c-5cb1-4d0c-a35f-b9264c30dc46.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                    price: "2,99",
                    name: 'Brahma Duplo Malte 350ml',
                  },
                  {
                    id: 'beer2',
                    image: "https://courier-images-prod.imgix.net/produc_variant/00008502_ebec6579-f3d3-43c3-a9b3-96d7b5aacfe9.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                    price: "2,39",
                    name: 'Skol 269ml',
                  },
                  {
                    id: 'beer3',
                    image: "https://courier-images-prod.imgix.net/produc_variant/00008517_8dc4e32b-2f9e-4724-b5ec-1bbb63a829be.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                    price: "3,99",
                    name: 'Brahma Chopp 473ml',
                  },
                  {
                    id: 'beer4',
                    image: 'https://courier-images-prod.imgix.net/produc_variant/00008610_f6aacaef-99ee-447a-a6b7-c16bc0e3cdfa.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                    price: "2,99",
                    name: 'Bohemia 350ml',
                  },
                  {
                    id: 'beer5',
                    image: 'https://courier-images-prod.imgix.net/produc_variant/00008577_06286b79-24d0-41bd-8800-5589089a7982.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                    price: "2,99",
                    name: 'Budweiser 269ml',
                  },
                ]},


                {
                  category: 'spirits',
                  products: [
                    {
                      id: 'spi1',
                      image: "https://courier-images-prod.imgix.net/produc_variant/00008599_de388ae5-6bbe-4eea-97fb-5847a6519859.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                      price: "5,08",
                      name: 'Beats Senses 269ml',
                    },
                    {
                      id: 'spi2',
                      image: "https://courier-images-prod.imgix.net/produc_variant/00016825_90d08ad5-12a6-49d2-a94c-2a63086a192f.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                      price: "46,80",
                      name: 'Beats GT 269ml - Pack de 8 unidades',
                    },
                    {
                      id: 'spi3',
                      image: "https://courier-images-prod.imgix.net/produc_variant/00009144_f3cd3a62-d83c-4f72-8e9e-19eab99d3ac9.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                      price: "99,90",
                      name: 'Whisky Johnnie Walker Red Label 1L',
                    },
                    {
                      id: 'spi4',
                      image: 'https://courier-images-prod.imgix.net/produc_variant/00009152_b5053143-1d52-47c7-82af-8ebd48a916e9.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                      price: "39,90",
                      name: 'Vodka Smirnoff 998ml',
                    },
                    {
                      id: 'spi5',
                      image: 'https://courier-images-prod.imgix.net/produc_variant/9196_36e92bd6-66e5-443c-823b-d759ec0b47b3.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                      price: "134,90",
                      name: 'Gin Tanqueray 750ml',
                    },
                  ]},

                  {
                    category: 'wine',
                    products: [
                      {
                        id: 'win1',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00012752_54593dbc-9a9b-40bd-9643-7a5d2563adc0.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "39,11",
                        name: 'Vinho Tinto Alecrim 750ml',
                      },
                      {
                        id: 'win2',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00012715_228be0d2-534c-4e96-be34-de934a30491c.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "46,57",
                        name: 'Vinho Tinto Malbec Cava Negra 750ml',
                      },
                      {
                        id: 'win3',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00012747_2329882e-e96c-4a24-9c0e-396c368f01ab.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "42,73",
                        name: 'Vinho Branco Reserva Sauvignon Foye 750ml',
                      },
                      {
                        id: 'win4',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00012718_7be04c61-d74b-4312-bab0-597b44bfa349.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: "46,57",
                        name: 'Vinho Branco Torrontés Cava Negra 750ml',
                      },
                      {
                        id: 'win5',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00014172_6979bc59-e594-4fdc-9bbe-6f5c08de6a02.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: "38,87",
                        name: 'Vinho Rosé Alecrim 750ml',
                      },
                    ]},
                  {
                    category: 'noAlcohol',
                    products: [
                      {
                        id: 'no1',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00009995_7e412bb3-8bac-4823-aaac-d1c0c96cf8a3.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "8,49",
                        name: 'Red Bull Energy Drink 250ml',
                      },
                      {
                        id: 'no2',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00008885_6fe54b0f-9922-4ed5-a797-632c0e9e3d72.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "6,49",
                        name: 'Pepsi 2L',
                      },
                      {
                        id: 'no3',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00008857_e472af8c-d5fa-45e1-9dbb-23c4f378179a.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "3,19",
                        name: 'Tônica Antarctica 350ml',
                      },
                      {
                        id: 'no4',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00008884_01151360-d7f8-4946-9ce7-e76d3a5618a8.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: "7,24",
                        name: 'Guaraná Antarctica 2L',
                      },
                      {
                        id: 'no5',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00012306_bb57e501-515c-4a4a-aff1-4f20f7c1def4.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: "8,49",
                        name: 'Red Bull Melancia 250ml',
                      },
                    ]},


                  {
                    category: 'shop',
                    products: [
                      {
                        id: 'shop1',
                        image: "https://courier-images-prod.imgix.net/product/00009342_66fb4dd4-dbff-4829-ba3f-8b5e78043d59.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "14,00",
                        name: 'Saco de Gelo em Cubos - 5kg',
                      },
                      {
                        id: 'shop2',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00009253_dedf9555-9af7-4c92-a470-0dc9e586f920.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "22,40",
                        name: 'Saco de Gelo (Escama) - 10kg',
                      },
                      {
                        id: 'shop3',
                        image: "https://courier-images-prod.imgix.net/product/00009341_a9551258-9181-4f96-a0c9-375690886433.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "12,79",
                        name: 'Saco de Gelo em Cubos - 4kg',
                      },
                      {
                        id: 'shop4',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00011099_09f7b7de-294f-4408-94cd-ec4233c98479.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: "5,00",
                        name: 'Gelo de Água de Coco 200g',
                      },
                      {
                        id: 'shop5',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00009302_68ea3bd1-c5ba-4357-bee3-15f595b46053.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: "33,60",
                        name: 'Saco de Gelo (Escama) - 20kg',
                      },                     
                    ]},


                  {
                    category: 'foods',
                    products: [
                      {
                        id: 'foo1',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00009049_ad30306b-4d40-41ba-88dc-5679f058c545.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "15,69",
                        name: 'Ruffles Original 167g',
                      },
                      {
                        id: 'foo2',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00009048_2e833d5a-b9ee-41c8-8c16-8118c96524ee.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "4,99",
                        name: 'Ruffles Original 57g',
                      },
                      {
                        id: 'foo3',
                        image: "https://courier-images-prod.imgix.net/produc_variant/00010170_38feb567-6c31-40d3-a84e-ddc60c3a2485.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        price: "8,49",
                        name: 'Amendoim Japonês Elma Chips 145g',
                      },
                      {
                        id: 'foo4',
                        image: 'https://courier-images-prod.imgix.net/product/00009407_91c56ba0-0fe4-4ee5-a3e7-938ce2f13367.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: "5,49",
                        name: 'Doritos Queijo Nacho 55g',
                      },
                      {
                        id: 'foo5',
                        image: 'https://courier-images-prod.imgix.net/produc_variant/00010725_41f3d21f-cf4e-47f7-ac8b-c2653a224238.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        price: "170g",
                        name: 'Ovinhos de Amendoim Elma Chips',
                      },                    
                    ]},

                    {
                      category: 'highlights',
                      products: [
                        {
                          id: 'hig1',
                          image: "https://courier-images-prod.imgix.net/mini_banner/beats-150-bpm-by-anitta-2.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        },
                        {
                          id: 'hig2',
                          image: "https://courier-images-prod.imgix.net/mini_banner/vinhos-suaves.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        },
                        {
                          id: 'hig3',
                          image: "https://courier-images-prod.imgix.net/mini_banner/verao-com-cheetos.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                        },
                      ]},

                    {
                      category: 'slider',
                      products: [
                        {
                          id: 'sli1',
                          image: 'https://courier-images-prod.imgix.net/banner/654cb962-fb27-42d2-a5f9-fad213ed08a6_6d598033-0494-4567-9a21-d57ce07ab2dd.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        },
                        {
                          id: 'sli2',
                          image: 'https://courier-images-prod.imgix.net/banner/00874b2c-5fd0-4ea7-b21b-69f2cbcb2128_0754cebe-4e64-487f-9ddd-a54eb5f58a69.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        },
                        {
                          id: 'sli3',
                          image: 'https://courier-images-prod.imgix.net/banner/5c288109-eae3-4cb4-abf2-c0e9403ecd49_3f168081-ada1-4d43-b028-3b9fd4e01df2.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        },
                        {
                          id: 'sli4',
                          image: 'https://courier-images-prod.imgix.net/banner/e7070b09-2d72-4898-b946-2eb77394d13c_9ff61627-c6bd-47e8-b77a-9bc289806fc9.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        },
                        {
                          id: 'sli5',
                          image: 'https://courier-images-prod.imgix.net/banner/fcd3761e-fe7b-4b49-8a52-2ab866426993_68e0e78a-2dc1-43ae-8be7-9e93ab8d3695.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        },
                        {
                          id: 'sli6',
                          image: 'https://courier-images-prod.imgix.net/banner/26488164-e6d1-4374-8feb-b929074afca3_097edfd7-02c5-4109-b94a-247c483b9074.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        },
                        {
                          id: 'sli7',
                          image: 'https://courier-images-prod.imgix.net/banner/79795a5b-0e5a-4158-8fca-5acbdf89d182_b18a49db-e16f-45f8-be2e-2e39dede6482.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2',
                        },
                      ]},

        ]
        }
      ))
    }
  })  
}

