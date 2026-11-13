---
tag: X9DPGXY5WK
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $c_0,c_1>0$. And suppose the sequence $\{c_n\}_{n\ge 0}$ satisfies
$$ c_{n+1}=\sqrt{c_n}+\sqrt{c_{n-1}} \text{for} n\ge 1 $$
Prove that $\lim_{n\to \infty}c_n$ exists and find its value.

*Proposed by Sadovnichy-Grigorian-Konyagin*
