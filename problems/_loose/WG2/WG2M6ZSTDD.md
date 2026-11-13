---
tag: WG2M6ZSTDD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2521349
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48631
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2002
    source: hf-ai-mo-aops
    label: 2002 Mongolian Mathematical Olympiad
---
Find all positive integer $n$ for which there exist real number $a_1,a_2,\ldots,a_n$ such that $$ \{a_j-a_i|1\le i<j\le n\}=\left\{1,2,\ldots,\frac{n(n-1)}2\right\}. $$
