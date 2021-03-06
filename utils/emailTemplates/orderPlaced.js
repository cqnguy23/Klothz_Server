const orderPlacedTemplate = (products, totalPrice) => {
  return `
  <mjml>
          <mj-body>
              <mj-section>
              <mj-column>
  
                  <mj-image width="100px" src="https://i.postimg.cc/SKxfdTRm/logo-2x.png"></mj-image>
  
                  <mj-divider border-color="#F45E43"></mj-divider>
  
                  <mj-text font-size="12px" color="#F45E43" font-family="helvetica">An order has been placed. Here's some information about the order: </mj-text>
                  <mj-table font-size="12px">
                      <tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">
                          <th style="padding: 0 15px 0 0;">Product Name</th>
                          <th style="padding: 0 15px;">Quantity</th>
                          <th style="padding: 0 0 0 15px;">Size</th>
                          <th style="padding: 0 0 0 15px;">Price</th>
                      </tr>
                  ${products
                    .map((product) => {
                      return `<tr>
                              <td style="padding: 0 15px 0 0;">${
                                product.product.name
                              }</td>
                              <td style="padding: 0 15px;">${
                                product.orderedQuantity
                              }</td>
                              <td style="padding: 0 0 0 15px;">${product.orderedSize.toUpperCase()}</td>
                              <td style="padding: 0 0 0 15px;">$${
                                product.totalPrice
                              }</td>
                            </tr>`;
                    })
                    .join("")}
                      <tr style="border-top:1px solid #ecedee;text-align:left;padding:15px 0;">
                          <td style="padding: 0 15px 0 0;"></td>
                          <td style="padding: 0 15px;"></td>
                          <td style="padding: 0 0 0 15px;"></td>
                          <th style="padding: 0 0 0 15px;">Total: $${totalPrice}</th>
                      </tr>
                  </mj-table>
              </mj-column>
              </mj-section>
          </mj-body>
  </mjml>
  `;
};
export default orderPlacedTemplate;
