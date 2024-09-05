import { Container, Countries, Header } from '@/shared/components/shared';

export default function Home() {
  return (
    <Container className="flex flex-col gap-3 py-3">
      <Header />
      <Countries />
    </Container>
  );
}
