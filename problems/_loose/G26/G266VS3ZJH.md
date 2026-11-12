---
tag: G266VS3ZJH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2199741
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18980
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2020
    source: hf-ai-mo-aops
    label: 2020 Irish Math Olympiad
---
Pat has a pentagon, each of whose vertices is coloured either red or blue. Once an hour, Pat recolours the vertices as follows.

- Any vertex whose two neighbors were the same colour for the last hour, becomes blue for the next hour.
- Any vertex whose two neighbors were different colours for the last hour, becomes red for the next hour.

Show that there is at least one vertex which is blue after the first recolouring and remains blue for ever.
