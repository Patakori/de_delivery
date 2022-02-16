
import { createServer } from 'miragejs';

export function Data(){

  createServer({
    routes(){
      this.namespace = 'api';
  
      this.get('/products', () => (
        {
          data: [ {
          category: 'populares',
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
              category: 'retornaveis',
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
                category: '',
                products: [
                  {
                    id: '',
                    image: "",
                    price: "",
                    name: '',
                  },
                  {
                    id: '',
                    image: "",
                    price: "",
                    name: '',
                  },
                  {
                    id: '',
                    image: "",
                    price: "",
                    name: '',
                  },
                  {
                    id: '',
                    image: '',
                    price: "",
                    name: '',
                  },
                  {
                    id: '',
                    image: '',
                    price: "",
                    name: '',
                  },
                  {
                    id: '',
                    image: '',
                    price: "",
                    name: '',
                  },
                  {
                    id: '',
                    image: '',
                    price: "",
                    name: '',
                  },
                  {
                    id: '',
                    image: '',
                    price: "",
                    name: '',
                  },
                  {
                    id: '',
                    image: '',
                    price: "",
                    name: '',
                  },
                  {
                    id: '',
                    image: '',
                    price: "",
                    name: '',
                  },
                ]},


                {
                  category: '',
                  products: [
                    {
                      id: '',
                      image: "",
                      price: "",
                      name: '',
                    },
                    {
                      id: '',
                      image: "",
                      price: "",
                      name: '',
                    },
                    {
                      id: '',
                      image: "",
                      price: "",
                      name: '',
                    },
                    {
                      id: '',
                      image: '',
                      price: "",
                      name: '',
                    },
                    {
                      id: '',
                      image: '',
                      price: "",
                      name: '',
                    },
                    {
                      id: '',
                      image: '',
                      price: "",
                      name: '',
                    },
                    {
                      id: '',
                      image: '',
                      price: "",
                      name: '',
                    },
                    {
                      id: '',
                      image: '',
                      price: "",
                      name: '',
                    },
                    {
                      id: '',
                      image: '',
                      price: "",
                      name: '',
                    },
                    {
                      id: '',
                      image: '',
                      price: "",
                      name: '',
                    },
                  ]},
            
            
        ]
        }
      ))
    }
  })  
}

