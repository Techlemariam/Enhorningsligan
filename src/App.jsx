import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, Zap, Plus, Trophy, Trash2, CheckCircle, Music, ShoppingBag, Users, Star, Dumbbell, Tent, Ticket, Waves } from 'lucide-react';

const HEROES = [
  { id: 'eden', name: 'Eden', age: 6, title: 'Master of English & Music', icon: '🎵', color: 'pink' },
  { id: 'dante', name: 'Dante', age: 2, title: 'Chief Pillow Officer & Trash Hunter', icon: '🧸', color: 'cyan' },
  { id: 'vuxen', name: 'Vuxna', age: 99, title: 'Chaos Rescuers', icon: '🛡️', color: 'gold' }
];

const QUESTS = [
  { id: 'q1', title: 'Sjung en engelsk låt för Ligan', type: 'Låg', heroId: 'eden', icon: <Music size={20} /> },
  { id: 'q2', title: 'Danspaus! (Hoj energin)', type: 'Medel', heroId: 'eden', icon: <Zap size={20} /> },
  { id: 'q3', title: 'Bygg ett fort av kuddar', type: 'Låg', heroId: 'dante', icon: <Shield size={20} /> },
  { id: 'q4', title: 'Mata Soptunne-Monstret', type: 'Låg', heroId: 'dante', icon: <Trash2 size={20} /> },
  { id: 'q5', title: 'Rädda köket (10 minuters insats)', type: 'Hög', heroId: 'vuxen', icon: <Zap size={20} /> },
  { id: 'q6', title: 'Överleva morgonkaoset', type: 'Hög', heroId: 'vuxen', icon: <Shield size={20} /> },
];

const REWARDS = [
  { id: 'r1', title: 'Egen träningstid', type: 'Vuxen', cost: 50, icon: <Dumbbell size={24} /> },
  { id: 'r2', title: 'Familjemys: Gå på bio', type: 'Familj', cost: 100, icon: <Ticket size={24} /> },
  { id: 'r3', title: 'Äventyr: Åka till badhuset', type: 'Familj', cost: 200, icon: <Waves size={24} /> },
  { id: 'r4', title: 'Epic Loot: Tälta utomhus!', type: 'Familj', cost: 500, icon: <Tent size={24} /> },
];

function App() {
  const [magicPoints, setMagicPoints] = useState(0);
  const [activeTab, setActiveTab] = useState('uppdrag'); // 'uppdrag', 'hjaltar', 'beloningar'

  // Persistence
  useEffect(() => {
    const savedMagic = localStorage.getItem('unicorn_magic_points');
    if (savedMagic) {
      setMagicPoints(parseInt(savedMagic, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('unicorn_magic_points', magicPoints.toString());
  }, [magicPoints]);

  const claimMission = (quest) => {
    // Determine points based on "type"
    let points = 5;
    if (quest.type === 'Medel') points = 10;
    if (quest.type === 'Hög') points = 20;

    setMagicPoints(prev => prev + points);
    createSparkles();
  };

  const buyReward = (reward) => {
    if (magicPoints >= reward.cost) {
      setMagicPoints(prev => prev - reward.cost);
      createMassiveSparkles();
      alert(`🎉 Ligan har låst upp: ${reward.title}!`);
    } else {
      alert(`Inte tillräckligt med Magic ännu! Fortsätt kämpa!`);
    }
  };

  const createSparkles = () => {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'sparkle-particle';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top = Math.random() * 100 + 'vh';
      p.style.setProperty('--tx', (Math.random() - 0.5) * 300 + 'px');
      p.style.setProperty('--ty', (Math.random() - 0.5) * 300 + 'px');
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1000);
    }
  };

  const createMassiveSparkles = () => {
    for (let i = 0; i < 100; i++) {
      const p = document.createElement('div');
      p.className = 'sparkle-particle massive';
      p.style.left = '50vw';
      p.style.top = '50vh';
      p.style.setProperty('--tx', (Math.random() - 0.5) * 800 + 'px');
      p.style.setProperty('--ty', (Math.random() - 0.5) * 800 + 'px');
      p.style.backgroundColor = i % 2 === 0 ? 'var(--neon-pink)' : 'var(--neon-cyan)';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1500);
    }
  };

  // Calculate progress to next reward (just a visual representation, capping at 500 for the max reward)
  const maxGoal = 500;
  const progressPercentage = Math.min(100, (magicPoints / maxGoal) * 100);

  return (
    <div className="magic-shell">
      <header className="magic-header">
        <div className="realm-title">
          <Sparkles className="icon-pink" />
          <h1>Enhörningsligan</h1>
        </div>
        
        {/* Navigation Tabs */}
        <div className="tab-navigation">
          <button className={`tab-btn ${activeTab === 'uppdrag' ? 'active' : ''}`} onClick={() => setActiveTab('uppdrag')}>
            <Star size={18} /> Uppdrag
          </button>
          <button className={`tab-btn ${activeTab === 'hjaltar' ? 'active' : ''}`} onClick={() => setActiveTab('hjaltar')}>
            <Users size={18} /> Hjältar
          </button>
          <button className={`tab-btn ${activeTab === 'beloningar' ? 'active' : ''}`} onClick={() => setActiveTab('beloningar')}>
            <ShoppingBag size={18} /> Belöningar
          </button>
        </div>

        <div className="chaos-meter-container">
          <div className="meter-label">Total Magic: {magicPoints} ✨</div>
          <div className="meter-bar">
            <div className="meter-fill" style={{ width: `${progressPercentage}%` }}></div>
            <div className="meter-glow" style={{ width: `${progressPercentage}%`, left: `${progressPercentage - 5}%` }}></div>
          </div>
        </div>
      </header>

      <main className="quest-grid">
        {activeTab === 'uppdrag' && (
          <section className="available-quests">
            <div className="section-header">
              <h2>Tillgängliga Uppdrag (Survival Mode)</h2>
              <p className="subtitle">Gör det ni orkar, när ni orkar. Ingen stress, bara magic.</p>
            </div>
            <div className="cards-container">
              {QUESTS.map(quest => {
                const hero = HEROES.find(h => h.id === quest.heroId);
                return (
                  <div key={quest.id} className="quest-card">
                    <div className="card-header">
                      <span className={`difficulty ${quest.type.toLowerCase()}`}>{quest.type} Magic</span>
                      <span className="hero-tag" style={{ color: `var(--neon-${hero.color})` }}>{hero.name}</span>
                    </div>
                    <h3>{quest.icon} {quest.title}</h3>
                    <div className="card-actions">
                      <button onClick={() => claimMission(quest)} className="claim-btn full-width">
                        Vi fixade det! ✨
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {activeTab === 'hjaltar' && (
          <section className="family-status">
            <h2>Ligans Hjältar</h2>
            <div className="hero-list">
              {HEROES.map(hero => (
                <div key={hero.id} className="hero-slot">
                  <div className={`hero-avatar ${hero.color}`}>{hero.icon}</div>
                  <div className="hero-info">
                    <span className="name">{hero.name} {hero.age < 99 && `(${hero.age} år)`}</span>
                    <span className="rank">{hero.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'beloningar' && (
          <section className="reward-store">
            <div className="section-header">
              <h2>Magic Store</h2>
              <p className="subtitle">Lös in er samlade Magic mot belöningar.</p>
            </div>
            <div className="cards-container">
              {REWARDS.map(reward => (
                <div key={reward.id} className={`quest-card ${magicPoints >= reward.cost ? 'affordable' : 'locked'}`}>
                  <div className="card-header">
                    <span className="difficulty high">{reward.cost} Magic</span>
                    <span className="hero-tag">{reward.type}</span>
                  </div>
                  <h3>{reward.icon} {reward.title}</h3>
                  <div className="card-actions">
                    <button 
                      onClick={() => buyReward(reward)} 
                      className="claim-btn full-width"
                      disabled={magicPoints < reward.cost}
                      style={{ opacity: magicPoints < reward.cost ? 0.5 : 1 }}
                    >
                      {magicPoints >= reward.cost ? 'Köp Belöning!' : `Kräver ${reward.cost - magicPoints} mer Magic`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
