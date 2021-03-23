import { Product } from './../model/Product';
import {
    Resolver,
    Mutation,
    Arg,
    Query,
    InputType,
    Field
  } from "type-graphql"
  
  @InputType()
  class ProductInput {
      @Field()
      name!: string

      @Field()
      quantity!: number
  }

  @Resolver()
  export class ProductResolver {

    @Mutation(() => Product)
    async createProduct(
      @Arg("variables", () => ProductInput) variables: ProductInput
    ) {
      const newProduct = Product.create(variables)
      console.log(newProduct)
      return await newProduct.save()
    }

    @Query(() => [Product])
        products() {
            return Product.find();
        }

  }