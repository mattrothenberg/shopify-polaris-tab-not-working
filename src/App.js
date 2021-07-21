import React from "react";
import "@shopify/polaris/dist/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Page, Card, Tabs } from "@shopify/polaris";

function TabsExample() {
  const [selected, setSelected] = React.useState(0);

  const handleTabChange = React.useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers-1",
      content: "All",
      accessibilityLabel: "All customers",
      panelID: "all-customers-content-1",
    },
    {
      id: "accepts-marketing-1",
      content: "Accepts marketing",
      panelID: "accepts-marketing-content-1",
    },
    {
      id: "repeat-customers-1",
      content: "Repeat customers",
      panelID: "repeat-customers-content-1",
    },
    {
      id: "prospects-1",
      content: "Prospects",
      panelID: "prospects-content-1",
    },
  ];

  return (
    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <Card.Section title={tabs[selected].content}>
          <p>Tab {selected} selected</p>
        </Card.Section>
      </Tabs>
    </Card>
  );
}

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Example app">
        <TabsExample />
      </Page>
    </AppProvider>
  );
}

export default App;
