---
tag: SR2ASNXD5D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1082132
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13218
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2015
    source: hf-ai-mo-aops
    label: 2015 Taiwan TST Round 3
---
Let $\mathbb{Q}^+$ be the set of all positive rational numbers. Find all functions $f:\mathbb{Q}^+\rightarrow \mathbb{Q}^+$ satisfying $f(1)=1$ and
$$ f(x+n)=f(x)+nf(\frac{1}{x}) \forall n\in\mathbb{N},x\in\mathbb{Q}^+$$
