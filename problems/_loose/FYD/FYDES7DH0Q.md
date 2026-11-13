---
tag: FYDES7DH0Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2935442
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34442
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Chile National Olympiad
---
Determine all strictly increasing functions $f : R \to R$ such that for all $x \ne y$ to hold $$ \frac{2\left[f(y)-f\left(\frac{x+y}{2}\right) \right]}{f(x)-f(y)}=\frac{f(x)-f(y)}{2\left[f\left(\frac{x+y}{2}\right)-f(x) \right]} $$
