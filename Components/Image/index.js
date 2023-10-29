export default function Image({ style, objectFit, ...rest }) {
  return (
    <img
      {...rest}
      style={{
        ...style,
        width: '100%',
        height: '100%',
        position: 'absolute',
        objectFit: objectFit || 'cover',
      }}
    ></img>
  )
}
