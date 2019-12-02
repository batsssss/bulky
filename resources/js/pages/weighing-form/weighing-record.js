import React from 'react';

function WeighingRecord(props) {
    const {productPack, index} = props;

    let productPackInfo;

    if (productPack.hasOwnProperty('weighing_records')) {
        if (productPack.is_ready) {
            productPackInfo = "Filled - " + productPack.net + "mg";
        } else {
            productPackInfo = "Partial - " + productPack.net + "mg RESUME | MARK COMPLETE";
        }
    } else {
        productPackInfo = "Not Filled - Use: " + productPack.packaging.name + " START";
    }

    return (
        <div>
            {index + 1}. {productPack.size}mg
            {productPackInfo}
        </div>
    )
}

export default WeighingRecord;