---
tag: 8KRW51BXSZ
kind: problem
type: answer
answer: P(n) = \binom{n+k}{n-1} P(1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $P(n) $ is a nonconstant polynomial where all of its coefficients are nonnegative integers such that
$$ \sum_{i=1}^n P(i) | nP(n+1) $$
for every $n \in \mathbb{N}$.
Prove that there exists an integer $k \ge 0$ such that
$$ P(n) = \binom{n+k}{n-1} P(1) $$
for every $n \in \mathbb{N}$.
