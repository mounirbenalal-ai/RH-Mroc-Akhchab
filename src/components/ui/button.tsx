export const Button = ({ children, ...props }: any) => (
  <button {...props} style={{ padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
    {children}
  </button>
)
