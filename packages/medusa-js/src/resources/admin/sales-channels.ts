import {
  AdminPostSalesChannelsReq,
  AdminSalesChannelsRes,
  AdminPostSalesChannelsSalesChannelReq,
  AdminSalesChannelsDeleteRes,
  AdminPostSalesChannelsSalesChannelProductsBatchReq,
} from "@medusajs/medusa"
import { ResponsePromise } from "../../typings"
import BaseResource from "../base"

class AdminSalesChannelsResource extends BaseResource {
  /** retrieve a sales channel
   * @experimental This feature is under development and may change in the future.
   * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
   * @description gets a sales channel
   * @returns a medusa sales channel
   */
  retrieve(
    salesChannelId: string,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<AdminSalesChannelsRes> {
    const path = `/admin/sales-channels/${salesChannelId}`
    return this.client.request("GET", path, {}, {}, customHeaders)
  }

  /* *
   * Create a medusa sales channel
   * @returns the created channel
   */
  create(
    payload: AdminPostSalesChannelsReq,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<AdminSalesChannelsRes> {
    const path = `/admin/sales-channels`
    return this.client.request("POST", path, payload, {}, customHeaders)
  }

  /** update a sales channel
   * @experimental This feature is under development and may change in the future.
   * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
   * @description updates a sales channel
   * @returns the updated medusa sales channel
   */
  update(
    salesChannelId: string,
    payload: AdminPostSalesChannelsSalesChannelReq,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<AdminSalesChannelsRes> {
    const path = `/admin/sales-channels/${salesChannelId}`
    return this.client.request("POST", path, payload, {}, customHeaders)
  }

  /* list(
    query?: any,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<any> {
  }*/

  /**
   * Delete a sales channel
   * @experimental This feature is under development and may change in the future.
   * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
   * @description gets a sales channel
   * @returns an deletion result
   */
  delete(
    salesChannelId: string,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<AdminSalesChannelsDeleteRes> {
    const path = `/admin/sales-channels/${salesChannelId}`
    return this.client.request("DELETE", path, {}, {}, customHeaders)
  }

  /**
   * Add products to a sales channel
   * @experimental This feature is under development and may change in the future.
   * To use this feature please enable featureflag `sales_channels` in your medusa backend project.
   * @description Add products to a sales channel
   * @returns a medusa sales channel
   */
  addProducts(
    salesChannelId: string,
    payload: AdminPostSalesChannelsSalesChannelProductsBatchReq,
    customHeaders: Record<string, any> = {}
  ): ResponsePromise<AdminSalesChannelsRes> {
    const path = `/admin/sales-channels/${salesChannelId}/products/batch`
    return this.client.request("DELETE", path, payload, {}, customHeaders)
  }
}

export default AdminSalesChannelsResource
