export default function Card() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white border rounded-lg shadow transition-all">

      <img
        className="rounded-t-lg"
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        alt="product"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          Apple Watch Series 7
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Premium smartwatch with fitness tracking
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-xl font-bold">
            $599
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Add to cart
          </button>

        </div>

      </div>
    </div>
  );
}