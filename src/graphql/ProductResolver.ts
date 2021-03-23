import { Product } from './../model/Product';
import {
    Resolver,
    Mutation,
    Arg,
    Query,
    InputType,
    Field,
    Int
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

    @Mutation(() => Boolean)
    async deleteProduct(@Arg("id", () => Int) id: number) {
      await Product.delete(id)
      return true
    }

    @Query(() => [Product])
        products() {
            return Product.find();
        }

  }