function TreatmentCard({ treatment, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(treatment)}
      className={`w-full text-left rounded-xl p-4 border-2 transition-all duration-200 ${
        isSelected
          ? "border-fuchsia-500 bg-fuchsia-500/10 shadow-lg shadow-fuchsia-500/10"
          : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {treatment.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {treatment.description}
          </p>
        </div>
        {isSelected && (
          <div className="ml-3 w-6 h-6 rounded-full bg-fuchsia-500 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 mt-3 text-sm">
        <span className="text-gray-500 dark:text-gray-400">
          {treatment.duration} min
        </span>
        <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-400">
          ${treatment.price.toLocaleString("es-MX")}
        </span>
      </div>
    </button>
  );
}

export default TreatmentCard;
