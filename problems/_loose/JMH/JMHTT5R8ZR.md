---
tag: JMHTT5R8ZR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h136817
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48324
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Moldova National Olympiad
---
Find all continuous functions $f\colon [0;1] \to R$ such that
$$\int_{0}^{1}f(x)dx = 2\int_{0}^{1}(f(x^{4}))^{2}dx+\frac{2}{7}$$
