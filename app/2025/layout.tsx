import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DevFest 2025",
  description:
    "DevFest Lauro de Freitas 2025 — edição anterior. Reveja como foi o maior encontro de tecnologia da RMS.",
}

export default function DevFest2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
