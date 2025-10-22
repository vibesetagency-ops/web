import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Copy, Eye, Filter } from 'lucide-react';

const recipeCategories = ['All', 'CRM', 'Helpdesk', 'Payments', 'Docs', 'Social', 'Data'];

const recipes = [
  {
    title: "HubSpot Lead to Slack Alert",
    category: "CRM",
    description: "New qualified leads trigger instant Slack notifications",
    path: "HubSpot → AI Qualifier → Slack"
  },
  {
    title: "Zendesk to Knowledge Base",
    category: "Helpdesk", 
    description: "Auto-generate KB articles from resolved tickets",
    path: "Zendesk → AI Writer → Notion"
  },
  {
    title: "Stripe Payment to QuickBooks",
    category: "Payments",
    description: "Sync payments and create invoices automatically",
    path: "Stripe → Transformer → QuickBooks"
  },
  {
    title: "Google Sheets to Email Campaign",
    category: "Data",
    description: "Turn spreadsheet data into personalized email sequences",
    path: "Sheets → AI Personalizer → Mailchimp"
  },
  {
    title: "Social Media Scheduler",
    category: "Social",
    description: "Generate and schedule posts across all platforms",
    path: "AI Writer → Buffer → Multi-platform"
  },
  {
    title: "Contract Review Workflow",
    category: "Docs",
    description: "Extract key terms and route contracts for approval",
    path: "DocuSign → AI Analyzer → Approval Flow"
  }
];

const integrations = [
  'Google Sheets', 'Gmail', 'Slack', 'HubSpot', 'Notion', 'Shopify',
  'Stripe', 'QuickBooks', 'Zendesk', 'Google Analytics', 'Airtable', 
  'ClickUp', 'Trello', 'Teams', 'Monday.com', 'Salesforce', 'Mailchimp',
  'Buffer', 'DocuSign', 'Calendly', 'Zoom', 'Figma'
];

export function RecipesIntegrations() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRecipes = selectedCategory === 'All' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <section id="recipes" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[48px] font-bold">Automation recipes & integrations</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Pre-built automations you can copy and customize, plus 1000+ integrations 
            through our n8n platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recipes */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-semibold">Recipe Gallery</h3>
              <Filter className="w-4 h-4 text-text-secondary" />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {recipeCategories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedCategory === category 
                      ? 'bg-gradient-primary text-white border-0' 
                      : 'hover:border-accent-primary/50'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Recipe cards */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredRecipes.map((recipe, index) => (
                <Card key={index} className="card-lift bg-canvas border-lines">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{recipe.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {recipe.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-text-secondary mb-3">
                      {recipe.description}
                    </p>
                    
                    {/* Flow path */}
                    <div className="flex items-center gap-2 mb-3 text-xs text-text-secondary bg-surface/50 rounded p-2">
                      {recipe.path.split(' → ').map((step, stepIndex, arr) => (
                        <span key={stepIndex} className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-surface rounded border border-lines">
                            {step}
                          </span>
                          {stepIndex < arr.length - 1 && (
                            <span className="text-accent-primary">→</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Copy className="w-3 h-3 mr-1" />
                        Copy recipe
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        Preview flow
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Integrations</h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
              {integrations.map((integration, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-4 bg-canvas border border-lines rounded-lg hover:border-accent-primary/30 transition-colors"
                >
                  <span className="text-sm text-text-secondary font-medium text-center">
                    {integration}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center p-6 bg-gradient-primary/5 border border-accent-primary/20 rounded-lg">
              <p className="text-text-secondary mb-4">
                If n8n connects to it, we can automate it.
              </p>
              <p className="text-sm text-text-secondary">
                <strong>1000+</strong> integrations available through our n8n platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}