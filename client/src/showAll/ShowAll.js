import React, { useState } from "react";
import Select from "react-select";
import "./ShowAll.css";
import { Button } from 'react-bootstrap';

const mishnayot = [
  {
    id: "mishnah1",
    label: "סדר זרעים",
    options: [
      { value: "option1", label: "ברכות" },
      { value: "option2", label: "פאה" },
      { value: "option3", label: "דמאי" },
      { value: "option4", label: "כלאים" },
      { value: "option5", label: "שביעית" },
      { value: "option6", label: "תרומות" },
      { value: "option7", label: "מעשרות" },
      { value: "option8", label: "מעשר שני" },
      { value: "option9", label: "חלה" },
      { value: "option10", label: "ערלה" },
      { value: "option11", label: "ביכורים" },
    ],
  },
  {
    id: "mishnah2",
    label: "סדר מועד",
    options: [
      { value: "option1", label: "שבת" },
      { value: "option2", label: "עירובין" },
      { value: "option3", label: "פסחים" },
      { value: "option4", label: "שקלים" },
      { value: "option5", label: "יומא" },
      { value: "option6", label: "סוכה" },
      { value: "option7", label: "ביצה" },
      { value: "option8", label: "ראש השנה" },
      { value: "option9", label: "תענית מגילה" },
      { value: "option10", label: "מועד קטן" },
      { value: "option11", label: "חגיגה" },
    ],
  },
  {
    id: "mishnah3",
    label: "סדר נשים",
    options: [
      { value: "option1", label: "יבמות" },
      { value: "option2", label: "כתובות" },
      { value: "option3", label: "נדרים" },
      { value: "option4", label: "נזיר" },
      { value: "option5", label: "סוטה" },
      { value: "option6", label: "גיטין" },
      { value: "option7", label: "קידושין" },
    ],
  },
  {
    id: "mishnah4",
    label: "סדר נזיקין",
    options: [
      { value: "option1", label: "בבא קמא" },
      { value: "option2", label: "בבא מציעא" },
      { value: "option3", label: "בבא בתרא" },
      { value: "option4", label: "סנהדרין" },
      { value: "option5", label: "מכות" },
      { value: "option6", label: "שבועות" },
      { value: "option7", label: "עדויות" },
      { value: "option8", label: "עבודה זרה" },
      { value: "option9", label: "אבות" },
      { value: "option10", label: "הוריות" },
    ],
  },
  {
    id: "mishnah5",
    label: "סדר קודשים",
    options: [
      { value: "option1", label: "זבחים" },
      { value: "option2", label: "מנחות" },
      { value: "option3", label: "חולין" },
      { value: "option4", label: "בכורות" },
      { value: "option5", label: "ערכין" },
      { value: "option6", label: "תמורה" },
      { value: "option7", label: "כרתות" },
      { value: "option8", label: "מעילה" },
      { value: "option9", label: "תמיד" },
      { value: "option10", label: "מידות" },
      { value: "option11", label: "קינים" },
    ],
  },
  {
    id: "mishnah6",
    label: "סדר טהרה",
    options: [
      { value: "option1", label: "כלים" },
      { value: "option2", label: "אוהלות" },
      { value: "option3", label: "נגעים" },
      { value: "option4", label: "פרה" },
      { value: "option5", label: "טהרות" },
      { value: "option6", label: "מקוות" },
      { value: "option7", label: "נידה" },
      { value: "option8", label: "מכשירין" },
      { value: "option9", label: "זבים" },
      { value: "option10", label: "טבול יום" },
      { value: "option11", label: "ידיים" },
      { value: "option12", label: "עוקצים" },
    ],
  },
];

const ShowAll = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleChange = (selected, mishnahId) => {
    setSelectedOptions({ ...selectedOptions, [mishnahId]: selected });
  };

  const allSelectedOptions = Object.values(selectedOptions).reduce((acc, selected) => acc.concat(selected), []);

  return (
    <>
      <div className="selectDiv">
        {mishnayot.map((mishnah) => (
          <div key={mishnah.id} className="mishnah-container">
            <h3>{mishnah.label}</h3>
            <div className="select-box">
              <Select
                isMulti
                options={mishnah.options}
                onChange={(selected) => handleChange(selected, mishnah.id)}
              />
            </div>
          </div>
        ))}
        <div>
          <h3>המשניות שזכית לקחת וללמוד</h3>
          {allSelectedOptions.map((mishnah) => (
            <div key={mishnah.value}>{mishnah.label}</div>
          ))}
        </div>
      </div>
      <div className="withKadish">
        <Button variant="Light" id="Button">אשמח לזכות ולאמר גם קדיש לעילוי נשמתו של אחד הקדושים</Button>
        {/* <h3>האם תרצה לזכות ולאמר גם קדיש לעילוי נשמתו של אחד הקדושים</h3>
        <input
          id="kadish"
          name="kadish"
          type="checkbox"
        /> */}
      </div>
    </>
  );
};


export default ShowAll;
