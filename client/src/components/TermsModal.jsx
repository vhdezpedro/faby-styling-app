function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg max-h-[80vh] overflow-hidden rounded-2xl bg-white dark:bg-gray-950 shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10">
        <div className="bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white tracking-tight">
            Términos y Condiciones
          </h2>
        </div>
        <div className="p-6 overflow-y-auto max-h-[50vh] space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <p>
            Bienvenido a Faby Styling. Al registrarte en nuestra plataforma,
            aceptas los siguientes términos y condiciones:
          </p>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            1. Uso del Servicio
          </h3>
          <p>
            Nuestra plataforma permite a los clientes agendar citas para
            tratamientos de belleza. El servicio es de uso personal y
            intransferible.
          </p>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            2. Información Personal
          </h3>
          <p>
            Los datos que proporciones (nombre, teléfono y correo electrónico)
            serán utilizados exclusivamente para gestionar tus citas y
            comunicaciones relacionadas con el servicio.
          </p>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            3. Cancelaciones
          </h3>
          <p>
            Las cancelaciones deben realizarse con al menos 24 horas de
            anticipación. Las cancelaciones tardías podrán estar sujetas a
            cargos.
          </p>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            4. Precios y Disponibilidad
          </h3>
          <p>
            Los precios mostrados están sujetos a cambio sin previo aviso. La
            disponibilidad de horarios depende de la agenda del salon.
          </p>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            5. Privacidad
          </h3>
          <p>
            Tu información será tratada de acuerdo con nuestra política de
            privacidad y no será compartida con terceros sin tu consentimiento.
          </p>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={onClose}
            className="w-full rounded-lg bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:scale-105 transition duration-750 ease-in-out active:scale-95"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TermsModal;
