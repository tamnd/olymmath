---
tag: V52WMCJT48
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h2526292
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48219
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Moldova National Olympiad
---
Set $a_n=\frac{2n}{n^4+3n^2+4},n\in\mathbb N$ . Prove that $\frac14\le a_1+a_2+\ldots+a_n\le\frac12$ for all $n$ .
