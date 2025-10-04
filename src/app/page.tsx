import { Button } from '@/components/ui/button';
import { TestComponent } from '@/features/test';

export default function Home() {
  return (
    <div className="flex gap-4 p-5 bg-slate-200 h-lvh font-semibold">
      <Button size="lg">Primary</Button>
      <Button variant="secondary" size="lg">
        Secondary
      </Button>
      <Button variant="destructive" size="lg">
        destructive
      </Button>
      <Button variant="ghost" size="lg">
        Ghost
      </Button>
      <Button variant="link" size="lg">
        Link
      </Button>
      <Button variant="outline" size="lg">
        Outline
      </Button>
    </div>
  );
}
