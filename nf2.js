// number format n decimals

function nf2(n,d){
  d = parseInt(d) || 2; // decimal places
  n = String(n); // convert to string so we can parse float
  n = parseFloat( n.replace(/[^\d\.]/g,"") ); // strip commas (etc)
  n = n.toLocaleString(undefined, { maximumFractionDigits: d, minimumFractionDigits: d }) // force x decimals and add commas
  return n;
}

nf2(12345.67); // 12,345.67
nf2(12345.67,0); // 12,346
