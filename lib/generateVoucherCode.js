import React from "react";

export default function generateVoucherCode(
  title = "",
  expiredDate = "",
  validDate = ""
) {
  const formattedTitle = title.toUpperCase().replace(/\s+/g, "");
  const formattedExpiredDate = expiredDate.split("-").reverse().join("");
  const formattedValidDate = validDate.split("-").reverse().join("");
  const voucherCode = `${formattedTitle}-${formattedExpiredDate}`;
  return voucherCode;
}
