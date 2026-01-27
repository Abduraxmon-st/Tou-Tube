export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1 w-max text-xl tracking-tighter ${className}`}>
      <img src="/logo.svg" alt="logo" />
      <span>TouTube</span>
    </div>
  )
}