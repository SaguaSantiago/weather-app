import { Box, Checkbox, FormControlLabel } from '@mui/material'
import { useData } from 'hooks/useData'
import { useState } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function TempGraphic({}) {
  const { weather } = useData()
  const { week } = weather
  // console.log(weather)
  const [activeGraphic, setActiveGraphic] = useState(['min', 'max', 'fLike'])

  const handleChange = (n) => {
    if (activeGraphic.includes(n)) {
      setActiveGraphic((s) => s.filter((e) => e !== n))
    } else {
      setActiveGraphic((s) => [...s, n])
    }
  }
  // console.log(week)
  const graphicData = week
    ?.map((e) => {
      return {
        'Temp. Min.': Math.trunc(e.values.temperatureApparentMin),
        'Temp. Max.': Math.trunc(e.values.temperatureApparentMax),
        'Feels like': Math.trunc(e.values.temperatureApparentAvg),
        name: e.day,
      }
    })
    .filter((e, i) => i < 5)
  return (
    <Box
      mt={4}
      width='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Box width='90%' maxWidth='680px' minWidth='320px'>
        <ResponsiveContainer height={200} width='100%'>
          <AreaChart data={graphicData?.filter((e, i) => i < 8)}>
            {activeGraphic.includes('max') && (
              <Area
                type='monotone'
                dataKey='Temp. Max.'
                stroke='#ef5350'
                fillOpacity={0.3}
                fill='#ef5350'
              />
            )}
            {activeGraphic.includes('fLike') && (
              <Area
                type='monotone'
                dataKey='Feels like'
                stroke='#2e7d32'
                fillOpacity={0.3}
                fill='#2e7d32'
              />
            )}
            {activeGraphic.includes('min') && (
              <Area
                type='monotone'
                dataKey='Temp. Min.'
                stroke='#25afaf'
                fillOpacity={0.3}
                fill='#00ffff'
              />
            )}
            <XAxis stroke='white' dataKey='name' />
            <YAxis
              stroke='white'
              ticks={{
                interval: 5,
              }}
            />
            <Tooltip animationDuration={300} />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
      <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center'>
        <FormControlLabel
          control={
            <Checkbox
              color='info'
              onChange={(e) => handleChange(e.target.name)}
              name='min'
              checked={activeGraphic.includes('min')}
            />
          }
          label='Min. Temperature'
        />
        <FormControlLabel
          control={
            <Checkbox
              name='max'
              color='error'
              onChange={(e) => handleChange(e.target.name)}
              checked={activeGraphic.includes('max')}
            />
          }
          label='Max. Temperature'
        />
        <FormControlLabel
          control={
            <Checkbox
              name='fLike'
              color='success'
              onChange={(e) => handleChange(e.target.name)}
              checked={activeGraphic.includes('fLike')}
            />
          }
          label='Feels Like'
        />
      </Box>
    </Box>
  )
}
