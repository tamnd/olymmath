---
tag: 43J6JJWBRY
kind: problem
type: answer
answer: 2 \binom{2017}{1008}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261777
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{F}$ be a family of subsets of $\{1,2,\ldots, 2017\}$ with the following property: if $S_1$ and $S_2$ are two elements of $\mathcal{F}$ with $S_1\subsetneq S_2$, then $|S_2\setminus S_1|$ is odd. Compute the largest number of subsets $\mathcal{F}$ may contain.
