---
tag: M69EJDG16H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an infinite line, there are pebbles, with one or more pebbles per cell. James has two possible operations:

(a) Remove a pebble from cell $n$ and $n+1$ and place one at cell $n+2$.

(b) Remove two pebbles from cell $n$, place one at cell $n+1$ and one at cell $n-1$.

Show that there is always a moment when James can no longer move his pebbles.
