'use client';

import Image from 'next/image';

const tableData = [
  { parameter: 'Anti-Fade', multistile: true, lvt: false, wooden: false },
  { parameter: 'Higher Abrasion', multistile: true, lvt: false, wooden: false },
  { parameter: 'Ease of multi-Surface Application', multistile: true, lvt: true, wooden: false },
  { parameter: 'Ease of multi-laying pattern', multistile: true, lvt: true, wooden: false },
  { parameter: 'No affect by changes in moisture & temperature', multistile: true, lvt: true, wooden: false },
  { parameter: 'Increased stability and durability', multistile: true, lvt: false, wooden: false },
  { parameter: 'Waterproof', multistile: true, lvt: true, wooden: false },
];

const iconPath = {
  true: '/images/icons/right.webp',
  false: '/images/icons/wrong.webp',
};

const MultiTable = () => {
  return (
    <section data-section="muti_table" className="muti_table">
      <div className="multistile">
        <table>
          <thead>
            <tr>
              <th>Parameters</th>
              <th>MultiStile</th>
              <th>LVT</th>
              <th>Wooden Flooring</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.parameter}</td>
                <td>
                  <Image src={iconPath[row.multistile]} alt="icon" width={33} height={24} />
                </td>
                <td>
                  <Image src={iconPath[row.lvt]} alt="icon" width={33} height={24} />
                </td>
                <td>
                  <Image src={iconPath[row.wooden]} alt="icon" width={33} height={24} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MultiTable;
