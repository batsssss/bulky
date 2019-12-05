import { isSubTable } from './utils';

const classNames = {
  description(row) {
    if (isSubTable(row)) {
      return 'subTableCell';
    }
    return '';
  },
  location(row) {
    if (isSubTable(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  currentWeight(row) {
    if (isSubTable(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  totalWeight(row) {
    if (isSubTable(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  orders(row) {
    if (isSubTable(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  batch(row) {
    if (isSubTable(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  weigh(row) {
    if (isSubTable(row)) {
      return 'hiddenCell';
    }
    return '';
  },
};

export default classNames;