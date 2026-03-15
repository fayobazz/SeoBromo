export { Page };

function Page({ is404 }) {
  return <h1>{is404 ? 'Page  found' : 'Something went wrong'}</h1>;
}
