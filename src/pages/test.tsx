import { Block } from "@/features/core/presentation/components/block"
import { Layout } from "@/features/core/presentation/components/layout"

export default function testPage() {
  return (
    <Layout title="Test Page">
      <Block>
        <h1>This is a test page</h1>
      </Block>
    </Layout>
  );
}
