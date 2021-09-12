function slugify(str) {
  return str.toLowerCase().replace(/[^\w\ ]+/g, "").replace(/\ +/g, "-");
}

var slug = slugify("Toys “R” Us - Product"); // toys-r-us-product
