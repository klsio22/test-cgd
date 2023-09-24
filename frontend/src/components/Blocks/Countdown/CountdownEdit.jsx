import React from 'react';
import TextLineEdit from '../../../../omelette/src/components/manage/TextLineEdit/TextLineEdit';

const CountdownEdit = (props) => {
  const { block, onChangeBlock, isEditMode, data } = props;

  // Verifica os se os valores são undefined e atribui valores padrão

  if (
    data.title === undefined ||
    data.hours === undefined ||
    data.minutes === undefined ||
    data.seconds === undefined ||
    data.hoursTime === undefined ||
    data.minutesTime === undefined ||
    data.secondsTime === undefined ||
    data.buttonStart === undefined ||
    data.buttonStop === undefined
  ) {
    onChangeBlock(block, {
      ...data,
      title: 'Countdown Time',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      hoursTime: '0',
      minutesTime: '0',
      secondsTime: '0',
      buttonStart: 'Start',
      buttonStop: 'Stop',
    });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl font-bold uppercase p-4">
        <TextLineEdit
          {...props}
          renderTag="div"
          renderClassName="title"
          fieldDataName="title"
          placeholder="contagem regressiva"
          data={data}
          editable={isEditMode}
          onChangeBlock={onChangeBlock}
        />
      </div>

      <div>
        <ul className="flex gap-4">
          <li className="flex flex-col gap-4 text-3xl p-4 uppercase font-semibold items-center">
            <TextLineEdit
              {...props}
              renderTag="span"
              fieldDataName="hoursTime"
              placeholder="0"
              data={data}
              editable={isEditMode}
              onChangeBlock={onChangeBlock}
            />

            <TextLineEdit
              {...props}
              renderTag="span"
              fieldDataName="hours"
              placeholder="Hours"
              data={data}
              editable={isEditMode}
              onChangeBlock={onChangeBlock}
            />
          </li>
          <li className="flex flex-col gap-4 text-3xl p-4 uppercase font-semibold items-center">
            <TextLineEdit
              {...props}
              renderTag="span"
              fieldDataName="minutesTime"
              placeholder="0"
              data={data}
              editable={isEditMode}
              onChangeBlock={onChangeBlock}
            />

            <TextLineEdit
              {...props}
              renderTag="span"
              renderClassName="minutes"
              fieldDataName="minutes"
              placeholder="Minutes"
              data={data}
              editable={isEditMode}
              onChangeBlock={onChangeBlock}
            />
          </li>
          <li className="flex flex-col gap-4 text-3xl p-4 uppercase font-semibold items-center">
            <TextLineEdit
              {...props}
              renderTag="span"
              renderClassName="secondsTime"
              fieldDataName="secondsTime"
              placeholder="0"
              data={data}
              editable={isEditMode}
              onChangeBlock={onChangeBlock}
            />
            <TextLineEdit
              {...props}
              renderTag="span"
              renderClassName="seconds"
              fieldDataName="seconds"
              placeholder="Seconds"
              data={data}
              editable={isEditMode}
              onChangeBlock={onChangeBlock}
            />
          </li>
        </ul>
        <div className="flex justify-center gap-4">
          <span className=" bg-green-400 cursor-pointer px-8 py-3 text-xl font-medium text-white hover:bg-green-600 rounded-md">
            <TextLineEdit
              {...props}
              renderTag="span"
              renderClassName="buttonStart"
              fieldDataName="buttonStart"
              placeholder="Start"
              data={data}
              editable={isEditMode}
              onChangeBlock={onChangeBlock}
            />
          </span>
          <span className=" bg-green-400 cursor-pointer px-8 py-3 text-xl font-medium text-white hover:bg-green-600 rounded-md">
            <TextLineEdit
              {...props}
              renderTag="span"
              renderClassName="buttonStop"
              fieldDataName="buttonStop"
              placeholder="Stop"
              data={data}
              editable={isEditMode}
              onChangeBlock={onChangeBlock}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownEdit;
