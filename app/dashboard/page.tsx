import React from 'react'
import Card from '../ui/dashboard/card/Card'
import styles from '../ui/dashboard/dashboard.module.css'
import Rightbar from '../ui/dashboard/rightBar/Rightbar'
import Transactions from '../ui/dashboard/transactions/Transactions'
import Chart from '../ui/dashboard/chart/Chart'

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Dashboard