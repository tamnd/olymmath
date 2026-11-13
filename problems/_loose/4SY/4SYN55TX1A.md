---
tag: 4SYN55TX1A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2537806
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39111
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1995
    source: hf-ai-mo-aops
    label: 1995 French Mathematical Olympiad
---
Let $f$ be a bijection from $\mathbb N$ to itself. Prove that one can always find three natural number $a,b,c$ such that $a<b<c$ and $f(a)+f(c)=2f(b)$ .
