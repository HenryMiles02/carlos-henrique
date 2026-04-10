

export default function Background() {

  return (
    <div className="background fixed inset-0 -z-10 overflow-hidden bg-primary-100 dark:bg-[#0B0B0F]">

      {/* Gradiente base */}
      <div className="absolute inset-0 bg-linear-to-b from-primary-100 via-primary-100 " />

      {/* Glow vermelho principal */}
      <div className="absolute -top-25 -left-37.5 w-125 h-125 bg-red-600 opacity-20 blur-[150px] rounded-full animate-pulse" />

      {/* Glow vermelho secundário */}
      <div className="absolute -bottom-37.5 -right-37.5 w-125 h-125
      bg-red-500 opacity-50 dark:opacity-20 blur-[150px] rounded-full animate-[float_4s_ease-in-out_infinite]" />

      {/* Glow roxo (efeito spiderverse) */}
      <div className="absolute top-[20%] right-[20%] w-62.5 h-62.5
      bg-purple-500 opacity-10 blur-[120px] rounded-full" />

    </div>
  );
}