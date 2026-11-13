---
tag: R8C23VZZ1C
kind: problem
type: answer
answer: n=4,r=\sqrt{\sqrt{12+n}-4},r=forn=13,r=\sqrt{2}forn=24
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is the square $M_{1} M_{2} M_{3} M_{4}$ with side length 2a. In the plane of the square lies an arbitrary point $P$. Let $l_{i}$ denote the distance $P M_{i}$ $(i=1 ; 2 ; 3 ; 4)$.

1. The set of points $P$ is sought for which

$$
\sum_{i=1}^{4} l_{i}^{4}=4 n a^{4}
$$

where $n$ is a non-negative real number.

2. For which smallest $n$ is the sought set not empty?
3. The set is to be specified concretely for $n=13$ and for $n=24$.
