---
tag: W3W305XJET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An urn contains $M$ balls, of which $M_{1}$ are white. A sample of size $n$ is considered. Let $B_{j}$ be the event that the ball drawn on the $j$-th step is white, and $A_{k}$ be the event that there are exactly $k$ white balls in the sample of size $n$. Show that in the classical situation, whether for sampling with replacement or without replacement,

$$
\mathrm{P}\left(B_{j} \mid A_{k}\right)=k / n
$$
