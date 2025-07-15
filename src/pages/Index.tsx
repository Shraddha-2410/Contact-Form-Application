import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import SubmittedData from '@/components/SubmittedData';
import { Separator } from '@/components/ui/separator';
import { Mail, MessageSquare, Users } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
  timestamp?: string;
}

const Index = () => {
  const [submissions, setSubmissions] = useState<FormData[]>([]);

  const handleFormSubmit = (data: FormData) => {
    const submissionWithTimestamp = {
      ...data,
      timestamp: new Date().toLocaleString()
    };
    setSubmissions(prev => [submissionWithTimestamp, ...prev]);
  };

  const handleClearSubmissions = () => {
    setSubmissions([]);
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Contact Form App
              </h1>
              <p className="text-muted-foreground text-sm">
                Modern & responsive contact form with real-time submission display
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our beautifully crafted contact form with real-time validation,
              smooth animations, and instant feedback.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>User-friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span>Real-time validation</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>Instant feedback</span>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <ContactForm onSubmit={handleFormSubmit} />
        </section>

        {/* Separator */}
        <div className="flex items-center justify-center">
          <Separator className="max-w-xs bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Submitted Data */}
        <section>
          <SubmittedData 
            submissions={submissions} 
            onClear={handleClearSubmissions}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              Built with React, TypeScript, and Tailwind CSS • Powered by shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
