interface ToastProps {
  message: string;
  show: boolean;
}

export const Toast = ({ message, show }: ToastProps) => {
  if (!show) return null;

  return (
    <div className="toast">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {message}
      </div>
    </div>
  );
};
