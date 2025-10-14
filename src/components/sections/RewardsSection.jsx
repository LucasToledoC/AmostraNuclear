import { Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { rewards } from '@/data/rewardsData';

export default function RewardsSection({ score }) {
  const unlockedRewards = rewards.filter(reward => score >= reward.requiredPoints);
  const lockedRewards = rewards.filter(reward => score < reward.requiredPoints);

  return (
    <section id="rewards-section" className="py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Recompensas Desbloqueáveis</h2>
        
        {unlockedRewards.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-green-400">Desbloqueadas</h3>
            {unlockedRewards.map((reward) => {
              const Icon = reward.icon;
              return (
                <Card key={reward.id} className="bg-slate-800/50 border-green-500/50 p-4 sm:p-6">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
                      <div className="p-2 sm:p-3 bg-green-500/20 rounded-full">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg sm:text-xl text-white">{reward.title}</CardTitle>
                        <CardDescription className="text-sm sm:text-base text-slate-400">
                          {reward.description}
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50 mt-2 sm:mt-0">
                        Desbloqueada
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{reward.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {lockedRewards.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-400">Bloqueadas</h3>
            {lockedRewards.map((reward) => {
              return (
                <Card key={reward.id} className="bg-slate-800/30 border-slate-700 p-4 sm:p-6">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-700/50 rounded-full">
                        <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg sm:text-xl text-slate-500">{reward.title}</CardTitle>
                        <CardDescription className="text-sm sm:text-base text-slate-600">
                          Atinja {reward.requiredPoints} pontos para desbloquear
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <p className="text-sm sm:text-base text-slate-600 blur-sm select-none">{reward.content}</p>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Badge className="bg-slate-700 text-slate-300 mt-2 sm:mt-0">
                          {reward.requiredPoints - score} pontos restantes
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

