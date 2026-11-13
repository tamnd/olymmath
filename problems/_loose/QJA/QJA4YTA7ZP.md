---
tag: QJA4YTA7ZP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d$ be a natural number, and consider the arithmetic sequences

$$
a_{i}=1+2(i-1) d, b_{i}=1+(i-1) d
$$

for $i=1,2, \ldots$. Let $s(k)$ denote the sum of the first $k$ terms of the first sequence, and $t(k)$ denote the sum of the first $k$ terms of the second sequence. Let $A_{n}=s(t(n))$ and $B_{n}=t(s(n))$. It is to be proven that $A_{n+1}-A_{n}$ is a cube of a natural number, and $B_{n+1}-B_{n}$ is equal to the sum of the squares of two natural numbers. $(n=1,2, \ldots)$
