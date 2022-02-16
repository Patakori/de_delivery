
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
              id: 1,
              image: "https://courier-images-prod.imgix.net/produc_variant/00008502_ebec6579-f3d3-43c3-a9b3-96d7b5aacfe9.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,39",
              name: 'Skill 269ml',
            },
            {
              id: 2,
              image: "https://courier-images-prod.imgix.net/produc_variant/00010266_b1667e4c-5cb1-4d0c-a35f-b9264c30dc46.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,99",
              name: 'Brahma Duplo Malte 350ml',
            },
            {
              id: 3,
              image: "https://courier-images-prod.imgix.net/produc_variant/00008577_06286b79-24d0-41bd-8800-5589089a7982.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "3,29",
              name: 'Budweiser 269ml',
            },
            {
              id: 4,
              image: "https://courier-images-prod.imgix.net/produc_variant/00008725_ff1b1271-83d6-4953-9c23-dc0403a1f629.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,09",
              name: 'Skol 300ml | Apenas o Líquido',
            },
            {
              id: 5,
              image: "https://courier-images-prod.imgix.net/produc_variant/00008511_6bf6e23b-d7dd-4741-8edf-d60d6f03ae5d.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,49",
              name: 'Brahma Chopp 269ml',
            },
            {
              id: 6,
              image: "https://courier-images-prod.imgix.net/produc_variant/00008583_ed3d126a-4dd4-45a8-aa08-43856bdb06d4.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "3,09",
              name: 'Stella Artois 269ml',
            },
            {
              id: 7,
              image: "https://courier-images-prod.imgix.net/produc_variant/00008527_92132f76-a5c9-4039-a425-00493a5bed7f.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "1,99",
              name: 'Antarctica Subzero 269ml',
            },
            {
              id: 8,
              image: "https://courier-images-prod.imgix.net/produc_variant/00009746_a473285e-0edf-4073-842f-2930cb35a570.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "3,39",
              name: 'Original 350ml',
            },
            {
              id: 9,
              image: "https://courier-images-prod.imgix.net/produc_variant/00009746_a473285e-0edf-4073-842f-2930cb35a570.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,79",
              name: 'Skol 350ml',
            },
            {
              id: 10,
              image: "https://courier-images-prod.imgix.net/produc_variant/00009466_d3d6a24d-190f-461a-8ebb-31517669e92b.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
              price: "2,49",
              name: 'Skol Puro Malte 269ml - Unidade',
            },
          ]},
        
          {
            category: 'beats',
            products: [
              {
                id: 11,
                image: "https://courier-images-prod.imgix.net/produc_variant/00008502_ebec6579-f3d3-43c3-a9b3-96d7b5aacfe9.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "2,39",
                name: 'Skill 269ml',
              },
              {
                id: 12,
                image: "https://courier-images-prod.imgix.net/produc_variant/00010266_b1667e4c-5cb1-4d0c-a35f-b9264c30dc46.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "2,99",
                name: 'Brahma Duplo Malte 350ml',
              },
              {
                id: 13,
                image: "https://courier-images-prod.imgix.net/produc_variant/00008577_06286b79-24d0-41bd-8800-5589089a7982.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "3,29",
                name: 'Budweiser 269ml',
              },
              {
                id: 14,
                image: "https://courier-images-prod.imgix.net/produc_variant/00008725_ff1b1271-83d6-4953-9c23-dc0403a1f629.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "2,09",
                name: 'Skol 300ml | Apenas o Líquido',
              },
              {
                id: 15,
                image: "https://courier-images-prod.imgix.net/produc_variant/00008511_6bf6e23b-d7dd-4741-8edf-d60d6f03ae5d.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "2,49",
                name: 'Brahma Chopp 269ml',
              },
              {
                id: 16,
                image: "https://courier-images-prod.imgix.net/produc_variant/00008583_ed3d126a-4dd4-45a8-aa08-43856bdb06d4.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "3,09",
                name: 'Stella Artois 269ml',
              },
              {
                id: 17,
                image: "https://courier-images-prod.imgix.net/produc_variant/00008527_92132f76-a5c9-4039-a425-00493a5bed7f.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "1,99",
                name: 'Antarctica Subzero 269ml',
              },
              {
                id: 18,
                image: "https://courier-images-prod.imgix.net/produc_variant/00009746_a473285e-0edf-4073-842f-2930cb35a570.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "3,39",
                name: 'Original 350ml',
              },
              {
                id: 19,
                image: "https://courier-images-prod.imgix.net/produc_variant/00009746_a473285e-0edf-4073-842f-2930cb35a570.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "2,79",
                name: 'Skol 350ml',
              },
              {
                id: 20,
                image: "https://courier-images-prod.imgix.net/produc_variant/00009466_d3d6a24d-190f-461a-8ebb-31517669e92b.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2",
                price: "2,49",
                name: 'Skol Puro Malte 269ml - Unidade',
              },
            ]} 
        ]
        }
      ))
    }
  })  
}

