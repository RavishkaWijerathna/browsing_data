import React, { useState } from 'react';
import { TrendingUp, Users, Database, DollarSign, Shield, Target, BarChart3, Zap, AlertTriangle, CheckCircle, Globe, Lock, Eye, Calendar, Briefcase, Award } from 'lucide-react';

const BrowsingDataBusiness = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [activeTab, setActiveTab] = useState('models');

  const businessModels = [
    {
      id: 1,
      name: 'Consumer Panel Platform',
      icon: Users,
      difficulty: 'Medium',
      revenue: '$50K-500K/year',
      startup: '$10K-50K',
      description: 'Build your own Nielsen-style data collection platform',
      color: 'from-blue-500 to-cyan-500',
      steps: [
        'Create browser extension/mobile app',
        'Recruit panel members (10K-100K users)',
        'Collect anonymized browsing data',
        'Analyze patterns and trends',
        'Sell insights to brands/researchers'
      ],
      pros: ['Recurring revenue', 'Scalable model', 'High-value data'],
      cons: ['High user acquisition cost', 'Privacy compliance complex', 'Long time to profitability'],
      customers: ['Market research firms', 'Advertising agencies', 'Brand managers', 'Product teams']
    },
    {
      id: 2,
      name: 'Niche Audience Builder',
      icon: Target,
      difficulty: 'Easy',
      revenue: '$20K-200K/year',
      startup: '$2K-10K',
      description: 'Focus on specific niches (crypto traders, gamers, shoppers)',
      color: 'from-purple-500 to-pink-500',
      steps: [
        'Identify profitable niche (e.g., crypto investors)',
        'Build targeted browser extension',
        'Offer value (price alerts, analytics)',
        'Collect opted-in browsing data',
        'Sell qualified leads to relevant businesses'
      ],
      pros: ['Lower competition', 'Higher data value', 'Easier to acquire users'],
      cons: ['Limited market size', 'Niche may change', 'User acquisition still needed'],
      customers: ['Crypto exchanges', 'Gaming companies', 'E-commerce brands', 'SaaS tools']
    },
    {
      id: 3,
      name: 'B2B Intent Data Platform',
      icon: Briefcase,
      difficulty: 'Hard',
      revenue: '$100K-2M/year',
      startup: '$50K-200K',
      description: 'Enterprise-grade buyer intent data for B2B sales teams',
      color: 'from-green-500 to-emerald-500',
      steps: [
        'Partner with B2B websites/publishers',
        'Install tracking pixels/SDK',
        'Identify companies visiting (IP lookup)',
        'Track research behavior & intent signals',
        'Sell to B2B sales/marketing teams'
      ],
      pros: ['Very high value ($$$)', 'Enterprise contracts', 'Strong moat'],
      cons: ['Complex tech requirements', 'Long sales cycles', 'Heavy competition'],
      customers: ['B2B SaaS companies', 'Enterprise sales teams', 'Marketing platforms', 'Sales intelligence tools']
    },
    {
      id: 4,
      name: 'Affiliate Network with Data',
      icon: DollarSign,
      difficulty: 'Medium',
      revenue: '$30K-300K/year',
      startup: '$5K-20K',
      description: 'Build affiliate tools that collect shopping behavior data',
      color: 'from-orange-500 to-red-500',
      steps: [
        'Create cashback/coupon browser extension',
        'Users install for savings (value prop)',
        'Track shopping behavior & preferences',
        'Earn affiliate commissions immediately',
        'Sell aggregated shopping insights to retailers'
      ],
      pros: ['Dual revenue (affiliate + data)', 'Clear user value', 'Fast payback'],
      cons: ['Competitive market', 'Thin margins initially', 'Platform dependency'],
      customers: ['Retailers', 'E-commerce platforms', 'Consumer brands', 'Market researchers']
    },
    {
      id: 5,
      name: 'Privacy-First Analytics SaaS',
      icon: Shield,
      difficulty: 'Hard',
      revenue: '$50K-1M/year',
      startup: '$30K-100K',
      description: 'Privacy-focused alternative to Google Analytics with richer insights',
      color: 'from-indigo-500 to-purple-500',
      steps: [
        'Build analytics platform (like Plausible)',
        'Website owners install your script',
        'Collect first-party browsing data',
        'Provide enhanced insights to clients',
        'Sell anonymized aggregate trends to brands'
      ],
      pros: ['Growing privacy demand', 'Recurring SaaS revenue', 'Dual monetization'],
      cons: ['Compete with giants (Google)', 'Technical complexity', 'Privacy expectations high'],
      customers: ['Website owners (primary)', 'Brands (data buyers)', 'Agencies', 'Researchers']
    },
    {
      id: 6,
      name: 'Competitive Intelligence Tool',
      icon: Eye,
      difficulty: 'Medium',
      revenue: '$40K-400K/year',
      startup: '$10K-40K',
      description: 'Track competitor website visitors and their behavior',
      color: 'from-yellow-500 to-orange-500',
      steps: [
        'Build browser extension for researchers',
        'Users visit competitor websites',
        'Collect aggregated traffic patterns',
        'Analyze competitor strategies',
        'Sell intelligence reports to businesses'
      ],
      pros: ['High willingness to pay', 'Clear business value', 'Subscription model'],
      cons: ['Ethical concerns', 'Limited user base', 'Data quality varies'],
      customers: ['Marketing agencies', 'Product managers', 'Business analysts', 'Investors']
    }
  ];

  const implementation = {
    technical: [
      { step: 'Browser Extension Development', tech: 'JavaScript, Chrome Extension API, WebExtensions', time: '2-4 weeks' },
      { step: 'Data Collection Infrastructure', tech: 'Python/Node.js, PostgreSQL, Redis', time: '3-6 weeks' },
      { step: 'Data Anonymization & Privacy', tech: 'Hashing, Differential Privacy, GDPR tools', time: '2-4 weeks' },
      { step: 'Analytics Dashboard', tech: 'React, D3.js, Data visualization', time: '3-6 weeks' },
      { step: 'API Development', tech: 'REST/GraphQL API, Authentication', time: '2-3 weeks' },
      { step: 'User Acquisition System', tech: 'Landing page, Payment processing, CRM', time: '2-4 weeks' }
    ],
    legal: [
      { requirement: 'Privacy Policy', description: 'Clear disclosure of data collection and usage', priority: 'Critical' },
      { requirement: 'Terms of Service', description: 'User agreement with explicit consent', priority: 'Critical' },
      { requirement: 'GDPR Compliance', description: 'EU data protection regulations (if targeting EU)', priority: 'High' },
      { requirement: 'CCPA Compliance', description: 'California privacy law (if targeting US)', priority: 'High' },
      { requirement: 'Cookie Consent', description: 'Proper consent mechanisms', priority: 'Medium' },
      { requirement: 'Data Security', description: 'Encryption, secure storage, breach protocols', priority: 'Critical' }
    ],
    marketing: [
      { channel: 'Content Marketing', strategy: 'Blog about data privacy, browser tips, industry insights', cost: '$500-2K/month' },
      { channel: 'Product Hunt Launch', strategy: 'Launch on Product Hunt, HackerNews for tech audience', cost: '$0-500' },
      { channel: 'Affiliate Partnerships', strategy: 'Partner with tech bloggers, YouTubers for promotion', cost: '20-30% commission' },
      { channel: 'Direct B2B Sales', strategy: 'Outreach to potential data buyers (agencies, brands)', cost: '$2K-5K/month' },
      { channel: 'Referral Program', strategy: 'Incentivize users to invite friends', cost: '$5-20 per referral' }
    ]
  };

  const pricingModels = [
    {
      name: 'User Side (Panel Members)',
      tiers: [
        { tier: 'Free Tier', payment: '$5-10/month', description: 'Basic passive browsing data collection' },
        { tier: 'Active Surveys', payment: '$20-50/month', description: 'Data + active survey participation' },
        { tier: 'Referral Bonuses', payment: '$5-10 per referral', description: 'Invite friends to join panel' }
      ]
    },
    {
      name: 'Business Side (Data Buyers)',
      tiers: [
        { tier: 'Starter', payment: '$299/month', description: 'Basic reports, 5K data points/month' },
        { tier: 'Professional', payment: '$999/month', description: 'Advanced analytics, 50K data points, API access' },
        { tier: 'Enterprise', payment: '$5K-20K/month', description: 'Custom research, unlimited data, dedicated support' }
      ]
    }
  ];

  const caseStudies = [
    {
      company: 'Nielsen Digital Voice',
      model: 'Consumer Panel',
      users: '200K+ active panelists',
      revenue: '$1B+ (overall Nielsen)',
      success: 'Established trusted brand, recruited diverse panel, sold to Fortune 500'
    },
    {
      company: 'SimilarWeb',
      model: 'Web Analytics + Panel Data',
      users: '100M+ contributors',
      revenue: '$200M+ ARR',
      success: 'Combined panel data with ISP data, enterprise SaaS model, high retention'
    },
    {
      company: 'Rakuten (Ebates)',
      model: 'Cashback + Shopping Data',
      users: '15M+ members',
      revenue: '$1.5B+ (segment)',
      success: 'Clear user value prop (cashback), massive shopping data, sold to brands'
    }
  ];

  const risks = [
    { risk: 'Privacy Regulations', severity: 'High', mitigation: 'Legal compliance from day 1, privacy-by-design architecture' },
    { risk: 'User Trust Issues', severity: 'High', mitigation: 'Transparent communication, opt-in consent, clear value exchange' },
    { risk: 'Data Breach', severity: 'Critical', mitigation: 'Strong encryption, security audits, cyber insurance, incident response plan' },
    { risk: 'Browser/Platform Changes', severity: 'Medium', mitigation: 'Multi-platform strategy, stay updated with API changes' },
    { risk: 'Low User Acquisition', severity: 'High', mitigation: 'Strong value proposition, referral incentives, partnerships' },
    { risk: 'Competition', severity: 'Medium', mitigation: 'Focus on niche, unique insights, superior UX' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Database className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Browsing Data Business Models
            </h1>
          </div>
          <p className="text-lg text-blue-200">වියාපාරික දෘෂ්ටිකෝණයෙන් Browsing History Monetization</p>
        </div>

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl mb-6">
          <div className="flex overflow-x-auto">
            {['models', 'implementation', 'pricing', 'case-studies', 'risks'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold capitalize transition whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-200 hover:bg-white/10'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Business Models Tab */}
        {activeTab === 'models' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessModels.map(model => {
                const Icon = model.icon;
                return (
                  <div
                    key={model.id}
                    onClick={() => setSelectedModel(selectedModel?.id === model.id ? null : model)}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400 cursor-pointer transition group"
                  >
                    <div className={`bg-gradient-to-r ${model.color} p-3 rounded-xl w-fit mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                    <p className="text-sm text-blue-200 mb-4">{model.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-300">Difficulty:</span>
                        <span className={`font-semibold ${
                          model.difficulty === 'Easy' ? 'text-green-400' :
                          model.difficulty === 'Medium' ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>{model.difficulty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Revenue:</span>
                        <span className="font-semibold text-green-400">{model.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-300">Startup:</span>
                        <span className="font-semibold text-orange-400">{model.startup}</span>
                      </div>
                    </div>

                    {selectedModel?.id === model.id && (
                      <div className="mt-4 pt-4 border-t border-white/20 space-y-4 animate-fadeIn">
                        <div>
                          <h4 className="font-semibold text-blue-300 mb-2">Implementation Steps:</h4>
                          <ol className="space-y-1 text-sm">
                            {model.steps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-blue-400 font-semibold">{idx + 1}.</span>
                                <span className="text-blue-100">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-1">
                              <CheckCircle className="w-4 h-4" /> Pros:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              {model.pros.map((pro, idx) => (
                                <li key={idx} className="text-green-200">• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-400 mb-2 flex items-center gap-1">
                              <AlertTriangle className="w-4 h-4" /> Cons:
                            </h4>
                            <ul className="space-y-1 text-sm">
                              {model.cons.map((con, idx) => (
                                <li key={idx} className="text-red-200">• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-purple-300 mb-2">Target Customers:</h4>
                          <div className="flex flex-wrap gap-2">
                            {model.customers.map((customer, idx) => (
                              <span key={idx} className="bg-purple-500/30 px-3 py-1 rounded-full text-xs">
                                {customer}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Implementation Tab */}
        {activeTab === 'implementation' && (
          <div className="space-y-6">
            {/* Technical */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                Technical Implementation
              </h2>
              <div className="space-y-3">
                {implementation.technical.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{item.step}</h3>
                      <span className="bg-blue-500/30 px-3 py-1 rounded-full text-xs">{item.time}</span>
                    </div>
                    <p className="text-sm text-blue-200">{item.tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-red-400" />
                Legal & Compliance
              </h2>
              <div className="space-y-3">
                {implementation.legal.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{item.requirement}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.priority === 'Critical' ? 'bg-red-500/30 text-red-300' :
                        item.priority === 'High' ? 'bg-orange-500/30 text-orange-300' :
                        'bg-yellow-500/30 text-yellow-300'
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-sm text-blue-200">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-green-400" />
                Marketing Strategy
              </h2>
              <div className="space-y-3">
                {implementation.marketing.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{item.channel}</h3>
                      <span className="bg-green-500/30 px-3 py-1 rounded-full text-xs">{item.cost}</span>
                    </div>
                    <p className="text-sm text-blue-200">{item.strategy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-6">
            {pricingModels.map((model, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-400" />
                  {model.name}
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {model.tiers.map((tier, tidx) => (
                    <div key={tidx} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
                      <h3 className="font-bold text-xl mb-2">{tier.tier}</h3>
                      <p className="text-3xl font-bold text-green-400 mb-3">{tier.payment}</p>
                      <p className="text-sm text-blue-200">{tier.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Revenue Calculator */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-400/30">
              <h3 className="text-xl font-bold mb-4">💰 Revenue Projection Example</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-300 mb-3">User Side (Panel)</h4>
                  <div className="space-y-2 text-sm">
                    <p>10,000 active users × $8/month = <strong>$80,000/month cost</strong></p>
                    <p className="text-green-200">Annual cost: $960,000</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-green-300 mb-3">Business Side (Revenue)</h4>
                  <div className="space-y-2 text-sm">
                    <p>50 companies × $999/month = <strong>$49,950/month</strong></p>
                    <p>10 enterprise × $10K/month = <strong>$100,000/month</strong></p>
                    <p className="text-green-400 font-bold">Total Revenue: $149,950/month</p>
                    <p className="text-green-200">Annual: $1,799,400</p>
                    <p className="text-yellow-300 font-bold">Net Profit: ~$840K/year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Case Studies Tab */}
        {activeTab === 'case-studies' && (
          <div className="space-y-4">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300">{study.company}</h3>
                    <p className="text-sm text-blue-200">{study.model}</p>
                  </div>
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-purple-500/20 rounded-lg p-3">
                    <p className="text-xs text-purple-300">Users</p>
                    <p className="font-bold text-lg">{study.users}</p>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3">
                    <p className="text-xs text-green-300">Revenue</p>
                    <p className="font-bold text-lg">{study.revenue}</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3">
                    <p className="text-xs text-blue-300">Model</p>
                    <p className="font-bold text-sm">{study.model}</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-sm"><strong className="text-green-400">Success Factors:</strong> {study.success}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Risks Tab */}
        {activeTab === 'risks' && (
          <div className="space-y-3">
            {risks.map((risk, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                    {risk.risk}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    risk.severity === 'Critical' ? 'bg-red-500/30 text-red-300' :
                    risk.severity === 'High' ? 'bg-orange-500/30 text-orange-300' :
                    'bg-yellow-500/30 text-yellow-300'
                  }`}>
                    {risk.severity}
                  </span>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <p className="text-sm"><strong className="text-green-400">Mitigation:</strong> {risk.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">🚀 Ready to Start?</h3>
          <p className="text-blue-100 mb-4">Choose a model that fits your resources and start building!</p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Beginner</h4>
              <p>Start with Niche Audience Builder</p>
              <p className="text-blue-200">2-3 months to revenue</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Intermediate</h4>
              <p>Try Consumer Panel Platform</p>
              <p className="text-blue-200">6-12 months to scale</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Advanced</h4>
              <p>Build B2B Intent Platform</p>
              <p className="text-blue-200">12-24 months to enterprise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsingDataBusiness;