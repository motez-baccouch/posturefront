import { useState } from 'react';
import { useRouter } from 'next/router';
import Checkbox from './form-builder/checkbox';
import CheckboxColor from './form-builder/checkbox-color';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { useForm } from "react-hook-form";
import Axios from "axios";
// data
import productsTypes from './../../utils/data/products-types';
import productsColors from './../../utils/data/products-colors';
import productsSizes from './../../utils/data/products-sizes';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const ProductsFilter = () => {
  const router = useRouter();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  }

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}>
          Add Filter <i className="icon-down-open"></i>
      </button>
      
      <div className={`products-filter__wrapper ${filtersOpen ? 'products-filter__wrapper--open' : ''}`}>
        <div className="products-filter__block">
          <button type="button">Gender</button>
          <div className="products-filter__block__content">
          <Checkbox 
                key={0} 
                name="product-type" 
                label={"Male"}
                onChange={onFilterChange} 
              />
              <Checkbox 
                key={1} 
                name="product-type" 
                label={"Female"}
                onChange={o => {
                  onFilterChange("Female")
                }} 
              />
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Age</button>
          <div className="products-filter__block__content">
            <Range min={25} max={70} defaultValue={[3, 10]} tipFormatter={value => `${value}`} />
          </div>
        </div>
        
        <div className="products-filter__block">
          <button type="button">CITY</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
          <Checkbox 
                type="square" 
                key={0} 
                name="product-size" 
                label={"TUNIS"} />
                <Checkbox 
                type="square" 
                key={1} 
                name="product-size" 
                label={"SFAX"} />
                <Checkbox 
                type="square" 
                key={2} 
                name="product-size" 
                label={"SOUSSE"} />
          </div>
        </div>

        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}
  
export default ProductsFilter

export const onFilterChange = async (gender) => {
  const res = await Axios.get("http://localhost:3001/user/kine/filter?gender="+gender);
  return {
    props: { data: res.data.slice(0, 10) },
  };
};
  