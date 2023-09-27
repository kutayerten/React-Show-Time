export default function Search() {
  return (
    <div className="max-w-[600px] w-full">
      <input type="text"
      className="w-full h-10 rounded bg-zinc-100 focus:bg-zinc-200/70 dark:bg-zinc-800 dark:focus:bg-zinc-200/20 dark:text-white border border-zinc-300 focus:border-zinc-500 dark:focus:border-zinc-100 backdrop-blur-sm px-4 outline-none text-sm transition-colors"
      placeholder="Search..."
      />

    </div>
  )
}
