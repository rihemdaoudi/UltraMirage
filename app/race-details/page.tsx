import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, TrendingUp, Award } from "lucide-react";

const races = [
  {
    id: "100k",
    title: "UMED 100K Records",
    distance: "100 Kilometers",
    description: "The ultimate challenge for experienced ultra runners. Conquer 100 kilometers through the most stunning Saharan landscapes. This is the longest and most demanding route, designed for those who seek the ultimate desert running experience.",
    icon: Award,
    color: "from-orange-500 to-red-600",
    stats: [
      { label: "Distance", value: "100 KM" },
      { label: "Elevation", value: "Variable" },
      { label: "Difficulty", value: "Extreme" }
    ]
  },
  {
    id: "50k",
    title: "UMED 50K Records",
    distance: "50 Kilometers",
    description: "A challenging ultra-marathon distance that takes you deep into the desert. Perfect for runners looking to push their limits while experiencing the beauty of the Sahara. This route offers a balanced challenge for intermediate to advanced runners.",
    icon: TrendingUp,
    color: "from-yellow-500 to-orange-500",
    stats: [
      { label: "Distance", value: "50 KM" },
      { label: "Elevation", value: "Moderate" },
      { label: "Difficulty", value: "Hard" }
    ]
  },
  {
    id: "25k",
    title: "Assurances BIAT 25km Desert Trail",
    distance: "25 Kilometers",
    description: "An accessible desert trail run perfect for those new to desert running or looking for a challenging but achievable distance. Experience the magic of the Sahara at a more manageable pace while still enjoying the stunning landscapes and unique atmosphere.",
    icon: MapPin,
    color: "from-amber-400 to-yellow-500",
    stats: [
      { label: "Distance", value: "25 KM" },
      { label: "Elevation", value: "Low" },
      { label: "Difficulty", value: "Moderate" }
    ]
  }
];

export default function RaceDetailsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-linear-to-b from-background to-gray-50 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#F5C542] text-sm font-semibold tracking-widest uppercase mb-4">
              CHOOSE YOUR CHALLENGE
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Race Details
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Three incredible distances, one unforgettable experience. Select the race that matches your ambition and discover what makes each route unique.
            </p>
          </div>

          {/* Race Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {races.map((race) => {
              const Icon = race.icon;
              return (
                <Card key={race.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className={`h-2 bg-linear-to-r ${race.color}`} />
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-lg bg-linear-to-br ${race.color} text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{race.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-[#F5C542] mt-1">
                          {race.distance}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {race.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      {race.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="font-bold text-lg">{stat.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full mt-6 bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold"
                      variant="default"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <Card className="bg-linear-to-r from-gray-800 to-gray-900 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Clock className="h-6 w-6 text-[#F5C542]" />
                All-Inclusive Packages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed mb-4">
                Every race package includes accommodation, transport to and from the race, 
                race kit, medical support, and the experience of a lifetime. 
                Whether you choose 25K, 50K, or 100K, you'll be supported every step of the way.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F5C542]" />
                  <span>Accommodation included</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F5C542]" />
                  <span>Transport provided</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F5C542]" />
                  <span>Medical support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
