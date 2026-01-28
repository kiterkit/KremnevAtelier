import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="py-24">
      <div className="space-y-6">
        <div className="h-6 w-40 rounded-full bg-gray/40" />
        <div className="h-10 w-full max-w-xl rounded-2xl bg-gray/30" />
        <div className="h-4 w-full max-w-2xl rounded-full bg-gray/20" />
        <div className="h-4 w-full max-w-xl rounded-full bg-gray/20" />
      </div>
    </Container>
  );
}

