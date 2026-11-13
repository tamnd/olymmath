---
tag: JJ24KPXR49
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h605460
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44733
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1993
    source: hf-ai-mo-aops
    label: 1993 Irish Math Olympiad
---
Let $x$ be a real number with $0<x<\pi $ .Prove that, for all natural number $n$ ,$$sinx+\frac{sin3x}{3}+\frac{sin5x}{5}+\cdots+\frac{sin(2n-1)x}{2n-1}>0.$$
