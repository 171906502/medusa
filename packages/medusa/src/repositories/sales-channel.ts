import { EntityRepository, Repository } from "typeorm"
import { SalesChannel } from "../models"

@EntityRepository(SalesChannel)
export class SalesChannelRepository extends Repository<SalesChannel> {
  async addProducts(
    salesChannelId: string,
    productIds: string[]
  ): Promise<void> {
    await this.createQueryBuilder()
      .insert()
      .into("product_sales_channel")
      .values(
        productIds.map((id) => ({
          sales_channel_id: salesChannelId,
          product_id: id,
        }))
      )
      .orIgnore()
      .execute()
  }
}
