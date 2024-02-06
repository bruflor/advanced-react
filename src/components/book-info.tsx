interface IBookInfo{
  name:string,
  price:string,
  title:string,
  pages:string
}
export const BookInfo = ({ book }:{book?:IBookInfo}) => {
  const { name, price, title, pages } = book || {};

  return book ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  ) : (
    <h1>Loading</h1>
  );
};
