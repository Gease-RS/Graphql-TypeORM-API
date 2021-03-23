import {
    Resolver,
    Mutation,
    Arg
  } from "type-graphql";
  import { Product } from "../model/Product";
  
  @Resolver()
  export class ProductResolver {

    @Mutation(() => Boolean)
    async createProduct(
      @Arg("name") name: string,
      @Arg("quantity") quantity: number
    ) {
      await Product.insert({name, quantity})
      return true
    }

  }