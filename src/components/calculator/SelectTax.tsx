import styled from "styled-components";

const RadioLabel = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

const Radio = styled.input`
  visibility: hidden;
  position: absolute;

  &:checked + ${RadioLabel} {
    color: #eca008f7;
    background-color: #fcf2c8;
    border-color: #eca008f7;
  }
`;

const RadioDiv = styled.label`
  margin: 3px;
`;

export const SelectTax = () => {
  return (
    <>
      <div className="flex my-5">
        <div className="inline-flex flex-1 flex-row flex-initial ">
          <RadioDiv className="bg-white border border-grey">
            <Radio
              type="radio"
              id="not-pass-tax"
              name="client-pass-tax"
              value="not-pass-tax"
              checked
            />
            <RadioLabel
              htmlFor="not-pass-tax"
              className="block text-center p-2 bg-white border border-solid border-2 w-20 h-20"
            >
              <strong>Não repassar</strong>
            </RadioLabel>
          </RadioDiv>
          <RadioDiv className="bg-white border border-grey border-l-0">
            <Radio
              type="radio"
              id="pass-tax"
              name="client-pass-tax"
              value="pass-tax"
              checked
            />
            <RadioLabel
              htmlFor="pass-tax"
              className="block text-center p-2 bg-white border border-solid border-2 w-20 h-20"
            >
              <strong>Repassar taxa</strong>
            </RadioLabel>
          </RadioDiv>
          <RadioDiv className="bg-white border border-grey border-l-0">
            <Radio
              type="radio"
              id="divide-tax"
              name="client-pass-tax"
              value="divide-tax"
            />
            <RadioLabel
              htmlFor="divide-tax"
              className="block text-center p-2 bg-white border border-solid border-2 w-20 h-20"
            >
              <strong>Dividir a taxa</strong>
            </RadioLabel>
          </RadioDiv>
        </div>
      </div>
    </>
  );
};

export default SelectTax;
