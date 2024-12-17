'use client';

import { EntryOverview } from '~/components/EntryOverview';
import { useCurrentEntry } from '~/hooks/entries';

export default function EntryOverviewPage() {
  const { currentEntry } = useCurrentEntry('benchmark');

  if (!currentEntry) return null;

  return <EntryOverview entry={currentEntry} />;
}
