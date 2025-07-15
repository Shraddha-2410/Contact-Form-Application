import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Mail, MessageSquare, Calendar, Trash2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
  timestamp?: string;
}

interface SubmittedDataProps {
  submissions: FormData[];
  onClear: () => void;
}

const SubmittedData = ({ submissions, onClear }: SubmittedDataProps) => {
  if (submissions.length === 0) {
    return (
      <div className="text-center py-12">
        <MessageSquare className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-50" />
        <p className="text-muted-foreground text-lg">No messages yet</p>
        <p className="text-muted-foreground/70 text-sm mt-2">
          Submit the form above to see your messages here
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Submitted Messages
          </h2>
          <p className="text-muted-foreground">
            {submissions.length} message{submissions.length !== 1 ? 's' : ''} received
          </p>
        </div>
        <Button
          onClick={onClear}
          variant="outline"
          size="sm"
          className="border-border/50 hover:border-destructive/50 hover:text-destructive"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear All
        </Button>
      </div>

      <div className="grid gap-4">
        {submissions.map((submission, index) => (
          <Card 
            key={index} 
            className="bg-gradient-card border-border/50 shadow-card backdrop-blur-sm hover:shadow-glow transition-all duration-300"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  {submission.name}
                </CardTitle>
                <Badge variant="secondary" className="bg-secondary/50">
                  #{submissions.length - index}
                </Badge>
              </div>
              <CardDescription className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                {submission.email}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span>Message:</span>
                </div>
                <div className="bg-secondary/30 p-4 rounded-lg border border-border/30">
                  <p className="text-foreground whitespace-pre-wrap break-words">
                    {submission.message}
                  </p>
                </div>
              </div>
              
              {submission.timestamp && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border/30">
                  <Calendar className="h-4 w-4" />
                  <span>Submitted on {submission.timestamp}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubmittedData;