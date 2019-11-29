const isSub = ({ id }) => `${id}`.includes('sub');

const classNames = {
  description(row) {
    if (isSub(row)) {
      return 'subTableCell';
    }
    return '';
  },
  location(row) {
    if (isSub(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  currentWeight(row) {
    if (isSub(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  totalWeight(row) {
    if (isSub(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  orders(row) {
    if (isSub(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  batch(row) {
    if (isSub(row)) {
      return 'hiddenCell';
    }
    return '';
  },
  weigh(row) {
    if (isSub(row)) {
      return 'hiddenCell';
    }
    return '';
  },
};

export default classNames;
