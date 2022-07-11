import { Request, Response } from "express"
import { Product } from "../../../../models"
import { SalesChannelService } from "../../../../services"
import { IsArray, ValidateNested } from "class-validator"
import { Type } from "class-transformer"
import { ProductBatchSalesChannel } from "../../../../types/sales-channels"

/**
 * @oas [post] /sales-channels/{id}/products/batch
 * operationId: "PostSalesChannelsSalesChannelProductBatch"
 * summary: "Assign a batch of product to a sales channel"
 * description: "Assign a batch of product to a sales channel."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The id of the Sales channel.
 *   - (body) products=* {AdminProductsBatchPartialProduct} The product ids that must be assigned to the sales channel.
 * tags:
 *   - Sales Channel
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             sales_channel:
 *               $ref: "#/components/schemas/sales_channel"
 */
export default async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params

  const salesChannelService: SalesChannelService = req.scope.resolve(
    "salesChannelService"
  )

  const validatedBody =
    req.validatedBody as AdminPostSalesChannelsSalesChannelProductsBatchReq
  const salesChannel = await salesChannelService.addProducts(
    id,
    validatedBody.products_ids.map((p) => p.id)
  )
  res.status(200).json({ sales_channel: salesChannel })
}

export class AdminPostSalesChannelsSalesChannelProductsBatchReq {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductBatchSalesChannel)
  products_ids: ProductBatchSalesChannel[]
}
