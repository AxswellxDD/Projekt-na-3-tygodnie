import * as React from 'react';
import { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

export default function Calculateing() {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBmiResult] = useState(null);
    const [status, setStatus] = useState("");


  const CalculateBmi = () => {
    let bmiResult = (weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmiResult);
    let status = getStatus(bmiResult);
    setStatus(status);
    setWeight('');
    setHeight('');
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  /*  --- nie wiem czemu to nie działa :(
  const getStatus = (bmi) => {
    switch (bmi){
        case (bmi < 18.5): return "Underweight";
        break;
        case (bmi >= 18.5  && bmi < 24.9): return "Normal";
        break;
        case (bmi >= 25 && bmi < 29.9): return "Overweight";
        break;
        default: return "Obese";
    };
  };
*/

  return (
    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Let's check yours BMI</Typography>
        </div>
        <FormControl>
          <FormLabel>Height in CM</FormLabel>
          <Input
            id="Height"
            name="Height"
            type="text"
            placeholder="Yours Height"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Weight in KG</FormLabel>
          <Input
            id="Weight"
            name="Weight"
            type="text"
            placeholder="Weight"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
        </FormControl>
        <Button onClick={CalculateBmi} sx={{ mt: 1 }}>Check it!</Button>
          {bmiResult && (
        <Typography>
          {status}<br></br>
          {bmiResult}<br></br>
        </Typography>

        )}

      </Sheet>

    </main>
  );
}
