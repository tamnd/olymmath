---
tag: 3XF8BHZG8H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2679825
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44425
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2021
    source: hf-ai-mo-aops
    label: 2021 Iran MO (3rd Round)
---
If $a, b, c$ and $d$ are complex non-zero numbers such that $$ 2|a-b|\leq |b|, 2|b-c|\leq |c|, 2|c-d| \leq |d| , 2|d-a|\leq |a|. $$ Prove that $$ \frac{7}{2} <\left| \frac{b}{a} + \frac{c}{b} + \frac{d}{c} + \frac{a}{d} \right| . $$
