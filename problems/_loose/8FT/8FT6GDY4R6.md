---
tag: 8FT6GDY4R6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3052506
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1068
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2023
    source: hf-ai-mo-aops
    label: 2023 Romania National Olympiad
---
In an art museum, $n$ paintings are exhibited, where $n \geq 33.$ In total, $15$ colors are used for these paintings such that any two paintings have at least one common color, and no two paintings have exactly the same colors. Determine all possible values of $n \geq 33$ such that regardless of how we color the paintings with the given properties, we can choose four distinct paintings, which we can label as $T_1, T_2, T_3,$ and $T_4,$ such that any color that is used in both $T_1$ and $T_2$ can also be found in either $T_3$ or $T_4$ .
