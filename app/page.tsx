"use client";

import { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = parseFloat(
      (weight / (heightInMeters * heightInMeters)).toFixed(2)
    );
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage(
        "Você está abaixo do peso ideal para sua altura. Um IMC abaixo de 18,5 indica que seu peso está abaixo do recomendado. " +
        "Considere consultar um nutricionista para ajudar a criar um plano alimentar saudável e balanceado, garantindo a ingestão " +
        "adequada dos nutrientes essenciais ao seu organismo."
      );
    } else if (bmiValue < 24.9) {
      setMessage(
        "Parabéns! Você está no peso ideal para a sua altura. Um IMC entre 18,5 e 24,9 é considerado saudável. " +
        "Continue mantendo um estilo de vida equilibrado, com uma alimentação nutritiva e atividade física regular para preservar essa condição."
      );
    } else if (bmiValue < 29.9) {
      setMessage(
        "Você está com sobrepeso. Um IMC entre 25 e 29,9 indica que você está acima do peso ideal para a sua altura. " +
        "Pode ser útil adotar hábitos de vida mais saudáveis, como ajustar a alimentação e aumentar a prática de exercícios físicos. " +
        "Procure orientação de um profissional para desenvolver um plano adequado às suas necessidades."
      );
    } else {
      setMessage(
        "Cuidado: você está com obesidade. Um IMC acima de 30 indica obesidade, o que pode aumentar o risco de doenças relacionadas, " +
        "como hipertensão, diabetes tipo 2 e problemas cardíacos. É altamente recomendável consultar profissionais de saúde para " +
        "desenvolver um plano personalizado que inclua dieta e atividade física, ajudando a perder peso de forma segura e eficaz."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl transform transition-all duration-300 hover:scale-105 w-full max-w-lg text-center text-gray-300 border border-white/20 border-opacity-30 shadow-lg hover:shadow-2xl hover:shadow-gray-800/50">
        <h1 className="text-4xl font-bold mb-4 text-white tracking-tight animate-fadeIn">
          Calculadora de IMC
        </h1>
        <p className="mb-10 text-sm text-gray-400 leading-6 max-w-sm mx-auto animate-fadeIn delay-200">
          Insira seu peso e altura para calcular seu Índice de Massa Corporal e verificar a interpretação de seu IMC.
        </p>
        
        <div className="space-y-6 animate-slideUp delay-300">
          <input
            type="number"
            placeholder="Peso (kg)"
            value={weight || ""}
            onChange={(e) => setWeight(parseFloat(e.target.value) || "")}
            className="w-full p-4 rounded-xl bg-gray-900 bg-opacity-60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transition duration-300"
          />
          <input
            type="number"
            placeholder="Altura (cm)"
            value={height || ""}
            onChange={(e) => setHeight(parseFloat(e.target.value) || "")}
            className="w-full p-4 rounded-xl bg-gray-900 bg-opacity-60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transition duration-300"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full mt-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide transform transition-all duration-300 hover:scale-105 shadow-lg animate-fadeIn delay-500"
        >
          Calcular IMC
        </button>

        {bmi !== null && (
          <div className="mt-10 p-6 bg-gray-800 bg-opacity-50 rounded-2xl shadow-xl animate-fadeIn delay-700">
            <p className="text-5xl font-extrabold text-white mb-4">{bmi}</p>
            <p className="text-lg mt-2 text-gray-400 leading-6 max-w-sm mx-auto">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}