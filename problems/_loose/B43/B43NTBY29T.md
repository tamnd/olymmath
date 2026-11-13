---
tag: B43NTBY29T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774538
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17545
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
Let $f:\mathbb{N}\to \mathbb{N}$ be a bijection satisfying $f(ab)=f(a)f(b)$ for all $a,b\in \mathbb{N}$ . Determine the minimum possible value of $f(n)/n$ , taken over all possible $f$ and all $n\leq 2019$ .
