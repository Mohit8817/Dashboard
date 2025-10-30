import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', mobile: 4000, tablet: 2400, desktop: 2400 },
  { month: 'Feb', mobile: 3000, tablet: 1398, desktop: 2210 },
  { month: 'Mar', mobile: 2000, tablet: 9800, desktop: 2290 },
  { month: 'Apr', mobile: 2780, tablet: 3908, desktop: 2000 },
  { month: 'May', mobile: 1890, tablet: 4800, desktop: 2181 },
  { month: 'Jun', mobile: 2390, tablet: 3800, desktop: 2500 },
  { month: 'Jul', mobile: 3490, tablet: 4300, desktop: 2100 },
  { month: 'Aug', mobile: 4200, tablet: 3200, desktop: 2800 },
  { month: 'Sep', mobile: 3800, tablet: 4100, desktop: 2600 },
  { month: 'Oct', mobile: 4100, tablet: 3900, desktop: 2900 },
  { month: 'Nov', mobile: 4500, tablet: 4200, desktop: 3100 },
  { month: 'Dec', mobile: 5000, tablet: 4800, desktop: 3500 },
];

export default function CleanLineChart() {
  const [timeRange, setTimeRange] = useState('monthly');

  return (
    <Grid container className='pt-4'>
     <Grid item xs={12} md={12} lg={12} className=""
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        padding: '32px',       
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: '0 0 8px 0'
            }}>
              Daily Line Chart
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: 0
            }}>
              Device usage statistics over time
            </p>
          </div>

          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            style={{
              padding: '10px 36px 10px 16px',
              fontSize: '14px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              backgroundColor: '#fff',
              color: '#333',
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none',
              backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              backgroundSize: '16px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.borderColor = '#3b82f6'}
            onMouseOut={(e) => e.target.style.borderColor = '#e0e0e0'}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Legend */}
        <div style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6'
            }} />
            <span style={{ fontSize: '14px', color: '#666' }}>Mobile</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#f59e0b'
            }} />
            <span style={{ fontSize: '14px', color: '#666' }}>Tablet</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#10b981'
            }} />
            <span style={{ fontSize: '14px', color: '#666' }}>Desktop</span>
          </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              stroke="#999"
              style={{ fontSize: '13px' }}
              tickLine={false}
            />
            <YAxis 
              stroke="#999"
              style={{ fontSize: '13px' }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                fontSize: '13px'
              }}
              labelStyle={{ color: '#666', marginBottom: '8px' }}
            />
            <Line 
              type="monotone" 
              dataKey="mobile" 
              stroke="#3b82f6" 
              strokeWidth={2.5}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="tablet" 
              stroke="#f59e0b" 
              strokeWidth={2.5}
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="desktop" 
              stroke="#10b981" 
              strokeWidth={2.5}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Stats Summary */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid #f0f0f0'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>Total Mobile</div>
            <div style={{ fontSize: '24px', fontWeight: '600', color: '#3b82f6' }}>42,080</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>Total Tablet</div>
            <div style={{ fontSize: '24px', fontWeight: '600', color: '#f59e0b' }}>45,538</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>Total Desktop</div>
            <div style={{ fontSize: '24px', fontWeight: '600', color: '#10b981' }}>29,801</div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

