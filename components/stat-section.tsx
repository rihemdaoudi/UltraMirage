import { Users, Trophy, MapPin, Medal } from "lucide-react"

const stats = [
  { icon: Users, value: "2,500+", label: "Runners" },
  { icon: Trophy, value: "10", label: "Editions" },
  { icon: MapPin, value: "42.195", label: "Kilometers" },
  { icon: Medal, value: "15+", label: "Countries" },
]

export function StatsSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-4 mx-auto">
                <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="font-display text-4xl mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground uppercase tracking-wide text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
