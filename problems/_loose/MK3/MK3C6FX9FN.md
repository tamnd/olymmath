---
tag: MK3C6FX9FN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h473482
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8684
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210739
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2012
    source: hf-ai-mo-aops
    label: 2012 Romania National Olympiad
---
Let $n$ and $k$ be two natural numbers such that $n\ge 2$ and $1\le k\le n-1$ . Prove that if the matrix $A\in\mathcal{M}_n(\mathbb{C})$ has exactly $k$ minors of order $n-1$ equal to $0$ , then $\det (A)\ne 0$ .
