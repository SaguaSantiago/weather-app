const temperatureUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgElEQVR4nO2Zz2/cRBTHR0hVObTiWokTII6U/yQcKD9uUTuTrVS1/JCAdSKBPevZ7NpugC2iu/6xG5U0cOAGzR9AEAUkmgIXqjQS0EJDW6moTZEaDjH6ujtVQAntxut1PZ6v9CTLHo/3ffTmzXuzhGhplU4V39816QUHqm54uupGPxlueLvqRmu4xj08w5i8f+dDqaobPGd44bLhRfH/W7iMsXn/3odGpmk+YnhRQwJyo0/jzxfPxeeXL8crq38mhmvcw7NknBtuVN1oGu+Sssvow5ua6cYLXy7Fv1y7Gf96/daW9vO1m/HC4lIyFu8AIiFlX7ZuuAEgZ3+8uC24/xrGJhDdcMM4Ho2RMqri+7tkzkPkPSg8aWcWl+7lxFJuLJNecEDmPCzNQQHiHZkTMdd232GCx4MYKYoML5qH82cWzw0MT9pnX3wnd+e5EgIML8D57y/+tmOA2J37y/gCKZuqbrQG51dWb+wY4MqVG3I3XiNlk9Gv+3YKT5qch5RNhgaoAeYqQ0dgMQAydcuYSAMsAkBlZWiAGmCuMnQEaoC5ytARWAyATNeBtzTAraSXcEoZOgdqgLnK0BGYTmzA3VGZU5RhiWmAwwH4yexsKrtfBI5NLcSDGCmKmAZYDIDKimmAGmCuYjoCNcBcxXQEFgPgmK4DZzXAraSXcEoxnQM1wFzFdARqgLmK6QgsBsAxFetAZttPDBsg5iwFwIO12rNM8FU4/aoznRog5sBc1Lau0Lq5n6isgw3zSQnvLc+J53q91AAxB+aSELeLxMJr3DQfZTb/QcL7OCW4zTb/L4j8/LFWazdRTdTmLhx8pTk9lMjbKhIx992caDWISqrY9lNM8PUJwePA94cOT5rvd+RSvoN0QVQRsy0fjr3z3kxm8KS9/e5xCbFNVFCl2XyMCv4XnOqFYeYAozCMEelU8LVDjrOXFF2sXntRbhxZw5P2httMonBC8OdJ0UUFD+BM84MTIwPYPNGSBXaHFF3M5t/CmbbfGRnAk512vzuxzpKiiwp+Fc6c6nZHBvBUFEmAf5Cii9rWHTiDYndUAOf7PTK+TYouJvg6nMmieN7O5rpddQBSwa/DmW4YjAwgSpkEoOBXiSqbyIed9sg3EWrzr4kqZUy99f7IAOJbypQxE/Xay3DmdacxMoCvOQ25hF8gRdchx9mLVg7tFXJT5vkvCGQJc/uIae4hKogKHsGpyRkvc4D4Rj/6AqKKDtdqT1Pb+htR2MmwI0G3089960odZ20+UD3aqGfSlWDOow2h5oGqPNJHWQEH3/ScoXYmmEuewFDBv1LySB8aN819TFiX4CgcHkYkftTt3vs/hAn++2EhHicqi9bN/VTwy3eXs0iVE5HzNi3bS5Va7RlSBo2b5j65nLGxTM14SfkxSKkid1t5bIU5SZl0rNXazYTFUa9JECiA0UWgFUPvfLrXSwzXuIdnskiWuy2z+bSyOe/B8yI/uRnkfQ1jbctXrlRJoyOmuYfa1kvoX6mwvukfxOIobB3XyT3bauM/FmU6DC0tkpX+AUe/Hv51qf5+AAAAAElFTkSuQmCC'

export const rowsObjects = [
  {
    name: 'Feels Like',
    imageUrl: 'https://img.icons8.com/office/256/person-male.png',
    key: 'feels_like',
    unit: 'ºC',
  },
  { name: 'Current Temperature', imageUrl: temperatureUrl, key: 'temp', unit: 'ºC' },
  {
    name: 'Min. Temperature',
    imageUrl: 'https://img.icons8.com/stickers/512/temperature-low.png',
    key: 'temp_min',
    unit: 'ºC',
  },
  {
    name: 'Max. Temperature',
    imageUrl: 'https://img.icons8.com/stickers/512/temperature-high.png',
    key: 'temp_max',
    unit: 'ºC',
  },
  {
    name: 'Pressure',
    imageUrl: 'https://img.icons8.com/ultraviolet/512/pressure.png',
    key: 'pressure',
    unit: 'H',
  },
  {
    name: 'Humidity',
    imageUrl: 'https://img.icons8.com/office/512/hygrometer.png',
    key: 'humidity',
    unit: '%',
  },
]
