import React from 'react';
import TextLineEdit from '../../../../omelette/src/components/manage/TextLineEdit/TextLineEdit';

const NumbersEdit = (props) => {
  const { block, onChangeBlock, properties, isEditMode, data } = props;

  if (data.title === undefined) {
    onChangeBlock(block, {
      ...data,
      title: 'Countdown Timer',
    });
  }

  return (
    <div>
      <TextLineEdit
        {...props}
        renderTag="div"
        renderClassName="title"
        fieldDataName="title"
        placeholder="contagem regressiva"
        data={data}
        editable={isEditMode}
        onChangeBlock={onChangeBlock}
        properties={properties}
      />
    </div>
  );
};

export default NumbersEdit;
