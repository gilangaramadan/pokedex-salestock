/**
 * Created by gilangaramadan on 18-12-17.
 */

import React from 'react';

const HeaderTitle = () => {
  return (
    <div className="row center-xs">
      <div className="col-xs-12 col-md-6">
        <div className="align-center">
          <h1 className="text-huge text-with-subtitle">
                    Pokèdex <span className="text-small text-gray">v 1.0.0</span>
          </h1>
          <h2 className="text-medium">
                    An index of Pokèmon built as a client-side ReactJS webapp.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
