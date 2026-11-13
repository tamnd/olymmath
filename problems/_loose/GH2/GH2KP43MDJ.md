---
tag: GH2KP43MDJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Canadian Mathematical Olympiad Qualification Repechage
    url: https://artofproblemsolving.com/community/c6h590328
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7727
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2012
    source: hf-ai-mo-aops
    label: 2012 Canadian Mathematical Olympiad Qualification Repechage
---
Determine whether there exist two real numbers $a$ and $b$ such that both $(x-a)^3+ (x-b)^2+x$ and $(x-b)^3 + (x-a)^2 +x$ contain only real roots.
