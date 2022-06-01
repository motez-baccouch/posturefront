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

const ProductsFilter = (props) => {
  const onChangeValueGender = (e) => {
    props.getParamsCallback(e.target.value,null)
  }
  const onChangeValueVille= (e) => {
    props.getParamsCallback(null,e.target.value)
  }
  const router = useRouter();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  }
  const clearFilters = (e) => {
    window.location.reload();
    props.clearFilters();
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
          <div className="products-filter__block__content" onChange={onChangeValueGender}>
          <label className="checkbox">
		          <input name="product-type"type="radio" id="0" value="Male"/>
		        <span className="checkbox__check"></span>
    	      <p>Male</p>
	            </label>
              <label className="checkbox">
		          <input name="product-type"type="radio" id="1" value="Female" />
		        <span className="checkbox__check"></span>
    	      <p>Female</p>
	            </label>
          </div>
        </div>
        
        <div className="products-filter__block">
          <button type="button">CITY</button>
          <div className="products-filter__block__content checkbox-square-wrapper" onChange={onChangeValueVille}>
          <label for="TUNIS-product-size" class="checkbox checkbox--square">
            <input name="product-size" type="radio" id="TUNIS-product-size" value="tunis"/><span class="checkbox__check"/>
            <p>TUNIS</p>
            </label>
            <label for="SFAX-product-size" class="checkbox checkbox--square">
            <input name="product-size" type="radio" id="SFAX-product-size" value="sfax"/><span class="checkbox__check"/>
            <p>SFAX</p>
            </label>
            <label for="SOUSSE-product-size" class="checkbox checkbox--square">
            <input name="product-size" type="radio" id="SOUSSE-product-size" value="sousse"/><span class="checkbox__check"/>
            <p>SOUSSE</p>
            </label>
                
          </div>
        </div>
        <div className="products-filter__block" onClick={clearFilters}>
        <button type="button" >Click here to clear filters</button>
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
  
function onCheckBoxChange(){
  console.log(this.checked)
}