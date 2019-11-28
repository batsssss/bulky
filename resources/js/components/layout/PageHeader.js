import React from 'react';

const PageHeader = props => (
    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
        <div className="MuiPaper-root MuiPaper-elevation1 jss962 MuiPaper-rounded">
            <div className="MuiBox-root jss964 jss189">
                <h1 className="MuiTypography-root jss190 MuiTypography-h5 MuiTypography-alignLeft">
                    {props.h1}
                </h1>
            </div>
            <hr className="MuiDivider-root jss192" />
        </div>
    </div>
);

export default PageHeader;