---
tag: 6KZDNH4W1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1975
    source: hf-numinamath-1-5
    label: XXVI - I - Problem 7
---
Let $ Z $ be the set of all finite sequences with terms $ a, b, c $ and let $ Z_1 $ be a subset of $ Z $ containing for each natural number $ k $ exactly one $ k $-term sequence.
We form the smallest set $ Z_2 $ with the property that $ Z_2 \supset Z_1 $ and if a certain $ k $-term sequence belongs to $ Z_1 $, then every $ (k+r) $-term sequence ($ r = 1, 2, \ldots $) obtained from this $ k $-term sequence by appending an $ r $-term sequence at the beginning or the end, belongs to $ Z_2 $.
Prove that for every $ k $ there exists in $ Z $ a $ k $-term sequence that does not belong to $ Z_2 $.
