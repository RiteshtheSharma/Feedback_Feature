

const ImportantFormLabel = ({Label}) => {
  return (
    (
        <>
          <span>{Label}</span>
          <span style={{ color: "red" }}> *</span>
        </>
      )
  );
};

export default ImportantFormLabel;