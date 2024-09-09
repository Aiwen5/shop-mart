function App() {
  return (
      <div className="app">
        <section id="content">
          <header>
            <div>
              <h1>Shop Mart</h1>
              <div>
                <button className="icon-btn"><span>&#129293;</span><span className="badge">3</span></button>
                <button className="icon-btn"><span>&#128722;</span><span className="badge">1</span></button>
              </div>
            </div>

            <div>
              <nav>
                <button>Home</button>
                <button>Catalog</button>
                <button>All products</button>
                <button>Wishlist</button>
              </nav>
              <form>
                <input type="search" placeholder="search" />
                <button type="button">Go</button>
              </form>
            </div>
          </header>
          <main>
            <div className="product">
              <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png" alt="shoes" />
              <p className="pr-name">Nike Dunk - Navy</p>
              <p className="pr-price">$229</p>
            </div>

            <div className="product">
              <img src="https://www.amberjack.shop/cdn/shop/files/OGChestnutLeft.webp?v=1692643617" alt="shoes" />
              <p className="pr-name">Dress Shoes</p>
              <p className="pr-price">$179</p>
            </div>

            <div className="product">
              <img src="https://imagescdn.simons.ca/images/5103-8746-19-A1_2/geo-micro-pattern-shirt-b-modern-fit-b.jpg?__=1" alt="shirt" />
              <p className="pr-name">Gray Collared Shirt</p>
              <p className="pr-price">$29</p>
            </div>

            <div className="product">
              <img src="https://image.hm.com/assets/hm/fd/f1/fdf19fc83756557b38712719416df4ef956acb3b.jpg?imwidth=1260" alt="shirt" />
              <p className="pr-name">Arism Tee - Black</p>
              <p className="pr-price">$29</p>
            </div>

            <div className="product">
              <img src="https://assets.vogue.com/photos/641b4f46036bf43d1c7c315a/3:4/w_748%2Cc_limit/slide_14.jpg" alt="pants" />
              <p className="pr-name">Wide Trousers</p>
              <p className="pr-price">$69</p>
            </div>

            <div className="product">
              <img src="https://assets.vogue.com/photos/65f99dcbc137d70f1690a63d/3:4/w_748%2Cc_limit/Image_08.jpg" alt="pants" />
              <p className="pr-name">Vogue Cargos</p>
              <p className="pr-price">$75</p>
            </div>
          </main>
        </section>
        <footer>
          <div>
            <h3>Our policies</h3>
            <ul>
              <li><a href="">Return policies</a></li>
              <li><a href="">Shipping policies</a></li>
              <li><a href="">Terms of service</a></li>
            </ul>
          </div>

          <div>
            <h3>Our products</h3>
            <ul>
              <li><a href="">Shoes</a></li>
              <li><a href="">Shirts</a></li>
              <li><a href="">Pants</a></li>
            </ul>
          </div>

          <div>
            <h3>Who we are</h3>
            <ul>
              <li><a href="">About us</a></li>
              <li><a href="">Contact us</a></li>
              <li><a href="">Sell with us</a></li>
            </ul>
          </div>
        </footer>
      </div>
  );
}

export default App;
