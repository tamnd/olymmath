---
tag: M7Q3HC2WXM
kind: problem
type: answer
answer: f_{r}(n,k)=\binom{n-kr+r}{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Select $k$ elements from an $n$-element permutation to form a combination, such that any two elements $a$ and $b$ in the combination satisfy the condition: in the original permutation, there are at least $r$ elements between $a$ and $b$ (with $n+r \geqslant k r+k$). Let $f_{r}(n, k)$ denote the number of different combinations that can be formed. Find $f_{r}(n, k)$.
