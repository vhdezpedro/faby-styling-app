function StepIndicator({ currentStep }) {
  const steps = [
    { number: 1, label: "Registro" },
    { number: 2, label: "Tratamiento" },
    { number: 3, label: "Horario" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                step.number < currentStep
                  ? "bg-green-500 text-white"
                  : step.number === currentStep
                    ? "bg-linear-to-r from-fuchsia-600 to-rose-600 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
              }`}
            >
              {step.number < currentStep ? "✓" : step.number}
            </div>
            <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-12 h-0.5 mx-1 mb-5 ${
                step.number < currentStep
                  ? "bg-green-500"
                  : "bg-gray-200 dark:bg-gray-800"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default StepIndicator;
