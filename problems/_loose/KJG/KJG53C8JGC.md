---
tag: KJG53C8JGC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=941
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/2005
    source: hf-numinamath-1-5
    label: LVI OM - I - Problem 8
---
On a circle, there are $ n $ lamps; each can be turned on or off. We perform a series of moves; in each move, we select $ k $ consecutive lamps and change their state: we turn off the ones that are on, and turn on the ones that are off (the number $ k $ does not change during this process). Initially, all lamps are off. For a given natural number $ n $, determine all natural numbers $ k \leq n $ for which it is possible to achieve a state with exactly one lamp turned on.
