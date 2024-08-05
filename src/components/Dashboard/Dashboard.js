import React from 'react';
import SummaryCard from '../SummaryCard/SummaryCard';
import OrderTable from '../OrderTable/OrderTable';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import ActivityChart from '../ActivityChart/ActivityChart';
import GoalMenu from '../GoalMenu/GoalMenu';
import { FaClipboardList, FaTruck, FaTimesCircle, FaDollarSign } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="summary-cards">
        <SummaryCard
          title="Total Orders"
          value="75"
          icon={<FaClipboardList />}
          growth={3}
        />
        <SummaryCard
          title="Total Delivered"
          value="70"
          icon={<FaTruck />}
          growth={-3}
        />
        <SummaryCard
          title="Total Cancelled"
          value="5"
          icon={<FaTimesCircle />}
          growth={3}
        />
        <SummaryCard
          title="Total Revenue"
          value="$12k"
          icon={<FaDollarSign />}
          growth={-3}
        />
        <SummaryCard
          title="Net Profit"
          value="$6759.25"
          icon={<FaDollarSign />}
          growth={3}
        />
        <SummaryCard
          title="Order Completion"
          value="70%"
          icon={<FaClipboardList />}
          growth={3}
        />
      </div>
      <div className="activity-goal">
        <ActivityChart />
        <GoalMenu />
      </div>
      <div className="orders-feedback">
        <OrderTable />
        <CustomerFeedback />
      </div>
    </div>
  );
};

export default Dashboard;
