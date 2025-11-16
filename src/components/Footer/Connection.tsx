import type { ReactElement } from 'react';

const inputStyle = {
  border: '1px solid #222',
  padding: '0px 12px',
  width: '380px',
  height: '60px',
  maxWidth: '380px',
};

const Connection = (): ReactElement => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column gap-3"
      style={{ height: '168px' }}
    >
      <div>
        <h3 className="h3">Like my portfolio? Sign up for a shoot!</h3>
      </div>
      <div>
        <input
          style={inputStyle}
          type="text"
          placeholder="your name"
          className="base"
        />{' '}
        <input
          style={inputStyle}
          type="text"
          placeholder="+1"
          className="base"
        />{' '}
        <button
          style={{
            padding: '0px 20px',
            width: '200px',
            height: '60px',
            minWidth: '200px',
            background: '#222',
          }}
        >
          <span className="text-light base">book now</span>
        </button>
      </div>
    </div>
  );
};
export default Connection;
