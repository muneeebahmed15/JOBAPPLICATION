import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../UI Components/BreadCrumbs'
import { useLocation } from 'react-router-dom'
import SalaryTable from './SalaryTable'
import { Col, Row, Card } from 'react-bootstrap'
import StatisticsWidget from '../../widgets/StatisticsWidget'
import SalaryChart from './SalaryChart'

import {basicColumnChartData} from '../../charts/data';

const SalaryPayments = () => {
  const path = useLocation().pathname
  
  const [isChatInitilized, setIsChatInitilized] = useState<boolean>(false);

  useEffect(() => {
    // set deafult config of apex chart
    if ((window as any).Apex) {
      (window as any).Apex = {
        chart: {
          parentHeightOffset: 0,
          toolbar: {
            show: false,
          },
        },
        grid: {
          padding: {
            left: 20,
            right: 0,
          },
        },
        colors: [
          "#5369F8",
          "#43D39E",
          "#F77E53",
          "#1CE1AC",
          "#25C2E3",
          "#FFBE0B",
        ],
        tooltip: {
          theme: "dark",
          x: { show: false },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          axisBorder: {
            color: "#D6DDEA",
          },
          axisTicks: {
            color: "#D6DDEA",
          },
        },
        yaxis: {
          labels: {
            offsetX: -5,
          },
        },
      };
      setIsChatInitilized(true);
    }
    return () => {
      if ((window as any).Apex) {
        (window as any).Apex = {};
      }
    };
  }, []);

  return (
    <>
    <BreadCrumbs path={path}/>

    <div className='d-flex justify-content-between align-items-center text-white mt-2 mb-4'>
<h1>Salary Management</h1>
</div>


<Card className='p-2'>
<Row>
      <Col sm={6} md={3}>
          <StatisticsWidget
            variant="primary"
            title="Total Employees"
            stats="10"
            icon="users"
          />
        </Col>

        <Col sm={6} md={3}>
          <StatisticsWidget
            variant="primary"
            title="Salary Per Month"
            stats={new Intl.NumberFormat().format(1000000)}
            icon="file"
          />
        </Col>

        <Col sm={12} md={6}>
          <SalaryChart 
          basicColumnChartData={basicColumnChartData}
          showLoader={!isChatInitilized}
          />
        </Col>

        

      </Row>
      </Card>
    
    <div className="my-3">
      <SalaryTable/>
    </div>
    
    </>
  )
}

export default SalaryPayments