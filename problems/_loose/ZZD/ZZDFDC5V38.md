---
tag: ZZDFDC5V38
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 IMAC Arhimede
    url: https://artofproblemsolving.com/community/c6h1834737
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11194
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imac/2014
    source: hf-ai-mo-aops
    label: 2014 IMAC Arhimede
---
If $a, b, c, d$ are positive numbers, prove that $$ \sum_{cyclic}\frac{a-\sqrt[3]{bcd}}{a+3(b+c+d)}\ge 0 $$
