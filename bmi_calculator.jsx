import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      setCategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="p-6 w-96 shadow-lg bg-white rounded-lg">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center">BMI Calculator</h2>
          <Input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <Button onClick={calculateBMI} className="bg-blue-500 hover:bg-blue-600">
            Calculate BMI
          </Button>
          {bmi && (
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">BMI: {bmi}</p>
              <p className="text-md text-gray-700">Category: {category}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
