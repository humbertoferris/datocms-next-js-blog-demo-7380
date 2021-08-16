import { useState } from "react";
import SelectTax from "../components/calculator/SelectTax";
import CurrencyInput from "react-currency-input-field";
import NumberFormat from "react-number-format";

const Calcutator = () => {
  const [initialValue, setInitialValue] = useState(0);

  return (
    <div className="sm:grid grid-cols-2 gap-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="initial-value"
          >
            Valor inicial
          </label>
          <CurrencyInput
            id="initial-value"
            name="initial-value"
            placeholder=""
            prefix="R$ "
            defaultValue={initialValue}
            decimalsLimit={2}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onValueChange={value => {
              if (value) setInitialValue(parseFloat(value.replace(",", ".")));
              else setInitialValue(0);
            }}
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

      <div className="bg-white flex items-center justify-center shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex-row">
          <h1 className="text-3xl font-normal leading-normal mt-0 mb-2 text-orange-600">
            Seu cliente paga
          </h1>
          <div>
            <NumberFormat
              value={initialValue}
              allowedDecimalSeparators={[".", ","]}
              displayType={"text"}
              decimalSeparator={","}
              thousandSeparator={"."}
              prefix={"R$ "}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>

          <h1 className="text-3xl mt-10 font-normal leading-normal mt-0 mb-2 text-orange-600">
            Você recebe
          </h1>
          <div>
            <NumberFormat
              value={initialValue}
              allowedDecimalSeparators={[".", ","]}
              displayType={"text"}
              decimalSeparator={","}
              thousandSeparator={"."}
              prefix={"R$ "}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </div>

          <div className="mt-4">Taxa SumUp: 4,9%</div>
        </div>
      </div>
    </div>
  );
};

export default Calcutator;
