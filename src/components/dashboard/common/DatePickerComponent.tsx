import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
      />
    </div>
  );
};

export default DatePickerComponent;
