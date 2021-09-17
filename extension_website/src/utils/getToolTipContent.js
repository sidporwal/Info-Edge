const getToolTipContent = (name) => {
  return (
    <div>
      <br />
      <p>{`Hello ${name},`}</p>
      <br />
      <p>
        Recently, your friend has recommended you on our platform. They had to
        select the best engineers they know and they selected your name out of
        hundreds. Since we trust their recommendations a lot, we will personally
        help you to find 10x oppurtunities. <br />
        We have partnered with top companies for the same. Are you open to
        explore job opportunities currently or sometimes in future ?
      </p>
      <br />
      <p>Thanks,</p>
      <p>DIBS</p>
      <br />
    </div>
  );
};

export default getToolTipContent;
