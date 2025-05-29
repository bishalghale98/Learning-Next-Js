export const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white ml-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
);


import { cn } from "@/lib/utils"

interface SpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ReuseSpinner({ size = "md", className }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-slate-200 dark:border-slate-700",
          "border-t-yellow-600 dark:border-t-yellow-400",
          sizeClasses[size],
        )}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}



export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center space-y-4">
        <ReuseSpinner size="lg" />
        <p className="text-sm text-slate-600 dark:text-slate-400">Loading category details...</p>
      </div>
    </div>
  )
}