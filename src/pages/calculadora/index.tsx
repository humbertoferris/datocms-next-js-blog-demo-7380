import SelectTax from "../../components/calculator/SelectTax";

const Calcutator = () => {
  return (
    <div className="w-full max-w-xs">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="initial-value"
          >
            Valor inicial
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="initial-value"
            id="initial-value"
          />
        </div>

        <div className="mb-4">
          <h2>Repassar taxa para seu cliente?</h2>

          <SelectTax />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sell-type"
          >
            Selecione o tipo de venda
          </label>

          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="sell-type"
          >
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>
              Valor 2
            </option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="sell-installment"
          >
            Selecione o parcelamento
          </label>

          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="sell-installment"
          >
            <option value="valor1">Valor 1</option>
            <option value="valor2" selected>
              Valor 2
            </option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">teste</div>
    </div>
  );
};

export default Calcutator;
