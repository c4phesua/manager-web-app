import { get } from 'lodash';

export const genderDecorator = (name, row) => {
  const value = get(row, name);
  if (value) {
    
  }
  return null;
}
