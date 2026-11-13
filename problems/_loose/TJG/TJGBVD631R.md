---
tag: TJGBVD631R
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each prime $p$, let $\mathbb S_p = \{1, 2, \dots, p-1\}$. Find all primes $p$ for which there exists a function $f\colon \mathbb S_p \to \mathbb S_p$ such that
$$ n \cdot f(n) \cdot f(f(n)) - 1 \text{is a multiple of} p $$
for all $n \in \mathbb S_p$.

*Andrew Wen*
