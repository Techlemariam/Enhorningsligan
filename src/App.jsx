import React, { useState, useEffect } from 'react';
import { Sparkles, Shield, Zap, Trash2, CheckCircle, Music, ShoppingBag, Users, Star, Dumbbell, Tent, Ticket, Waves, Hammer, MessageSquare, Wand2 } from 'lucide-react';
import { RARITY_COLORS, MAGIC_TO_RARITY } from './constants/rarity';

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

const MOCK_BREAKDOWNS = {
  'städa köket': ['Plocka undan på bänken', 'Töm diskmaskinen', 'Fyll diskmaskinen', 'Torka av bordet', 'Sopa golvet'],
  'tvätta': ['Sortera efter färg', 'Starta maskinen', 'Flytta till torktumlaren', 'Vik kläderna', 'Lägg in i garderoben'],
  'morgonkaos': ['Klä på barnen', 'Borsta tänder', 'Packa väskor', 'Hitta skor (viktigt!)', 'Komma ut genom dörren'],
};

function App() {
  const [magicPoints, setMagicPoints] = useState(0);
  const [activeTab, setActiveTab] = useState('uppdrag'); // 'uppdrag', 'hjaltar', 'beloningar', 'parent-magic'
  
  // Parent Magic State
  const [taskInput, setTaskInput] = useState('');
  const [breakdown, setBreakdown] = useState([]);
  const [formalInput, setFormalInput] = useState('');
  const [formalOutput, setFormalOutput] = useState('');
  const [spiciness, setSpiciness] = useState(1);

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

  const handleMagicHammer = () => {
    if (!taskInput) return;
    
    // Simulate "Magic" breakdown
    const key = taskInput.toLowerCase();
    const result = MOCK_BREAKDOWNS[key] || [
      `Börja med att titta på ${taskInput}`,
      'Dela upp det i två mindre delar',
      'Gör den första lilla delen',
      'Ta en 2 minuters paus',
      'Gör den andra lilla delen'
    ];
    
    setBreakdown(result);
    createSparkles();
  };

  const handleFormalize = () => {
    if (!formalInput) return;
    
    const responses = {
      0: `Snälla, kan vi försöka fixa ${formalInput}? Det skulle betyda mycket. ❤️`,
      1: `Vi behöver prioritera att få ${formalInput} gjort nu. Tack!`,
      2: `${formalInput} måste göras omedelbart. Inga undantag.`,
      3: `Om inte ${formalInput} händer nu kommer universum (eller åtminstone mitt tålamod) implodera. 🌋`
    };
    
    setFormalOutput(responses[spiciness] || responses[1]);
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
      p.style.backgroundColor = i % 2 === 0 ? RARITY_COLORS.EPIC : RARITY_COLORS.UNCOMMON;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1500);
    }
  };

  const progressPercentage = Math.min(100, (magicPoints / 500) * 100);

  return (
    <div className="magic-shell">
      <header className="magic-header">
        <div className="realm-title">
          <Sparkles className="icon-pink" />
          <h1>Enhörningsligan</h1>
        </div>
        
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
          <button className={`tab-btn ${activeTab === 'parent-magic' ? 'active' : ''}`} onClick={() => setActiveTab('parent-magic')}>
            <Wand2 size={18} /> Föräldra-magi
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
                      <span className="hero-tag" style={{ color: RARITY_COLORS[MAGIC_TO_RARITY[quest.type]] }}>{hero.name}</span>
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
                    >
                      {magicPoints >= reward.cost ? 'Köp Belöning!' : `Kräver ${reward.cost - magicPoints} mer Magic`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'parent-magic' && (
          <section className="parent-magic-container">
            <div className="section-header">
              <h2>Föräldra-magi (Executive Function Support)</h2>
              <p className="subtitle">Verktyg för att minska mental overload när kaoset tar över.</p>
            </div>

            <div className="magic-tool-card">
              <h3><Hammer /> Magic Sledgehammer</h3>
              <p className="subtitle">Skriv något som känns övermäktigt så bryter vi ner det.</p>
              <div className="magic-input-group">
                <input 
                  type="text" 
                  className="magic-input" 
                  placeholder="T.ex. 'städa köket' eller 'tvätta'..."
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleMagicHammer()}
                />
                <button className="hammer-btn" onClick={handleMagicHammer}>
                  Hammer Time!
                </button>
              </div>

              {breakdown.length > 0 && (
                <div className="breakdown-list">
                  {breakdown.map((item, index) => (
                    <div key={index} className="breakdown-item">
                      <span className="breakdown-text">{item}</span>
                      <div className="breakdown-actions">
                        <button className="mini-tool-btn" onClick={() => setBreakdown(prev => prev.filter((_, i) => i !== index))}>
                          <CheckCircle size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button className="claim-btn" style={{ marginTop: '10px' }} onClick={() => {
                    claimMission({ type: 'Medel' });
                    setBreakdown([]);
                    setTaskInput('');
                  }}>
                    Klar med alla delar! (+10 Magic)
                  </button>
                </div>
              )}
            </div>

            <div className="magic-tool-card">
              <h3><MessageSquare /> Magic Formalizer</h3>
              <p className="subtitle">Hitta rätt tonläge när energin är slut.</p>
              <div className="spiciness-slider">
                <span className="spiciness-label">Mjukhet:</span>
                <input 
                  type="range" 
                  min="0" 
                  max="3" 
                  value={spiciness} 
                  onChange={(e) => setSpiciness(parseInt(e.target.value))}
                />
                <span className="spiciness-label" style={{ textAlign: 'right' }}>{['Varm', 'Neutral', 'Direkt', 'Kritiskt'][spiciness]}</span>
              </div>
              <div className="magic-input-group">
                <input 
                  type="text" 
                  className="magic-input" 
                  placeholder="Vad vill du säga egentligen? (t.ex. 'plocka upp skorna nu')"
                  value={formalInput}
                  onChange={(e) => setFormalInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleFormalize()}
                />
                <button className="hammer-btn" style={{ background: 'var(--color-ethereal-purple)' }} onClick={handleFormalize}>
                  Transformera
                </button>
              </div>

              {formalOutput && (
                <div className="formalizer-output">
                  {formalOutput}
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
