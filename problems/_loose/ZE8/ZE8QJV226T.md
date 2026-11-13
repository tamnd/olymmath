---
tag: ZE8QJV226T
kind: problem
type: answer
answer: f(n)=n+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all increasing functions $f: \mathbb{N} \rightarrow \mathbb{N}$ such that

$$
\left(2^{m}+1\right) f(n) f\left(2^{m} n\right)=2^{m} f(n)^{2}+f\left(2^{m} n\right)^{2}+\left(2^{m}-1\right)^{2} n
$$

for all integers $n$ and $m$.
