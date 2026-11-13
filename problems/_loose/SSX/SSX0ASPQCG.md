---
tag: SSX0ASPQCG
kind: problem
type: answer
answer: "1009"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence $\{a_n\}_{n \geq 1}$ recursively by $a_1=1$, $a_2=2$, and for all integers $n \geq 2$, $a_{n+1}=(n+1)^{a_n}$. Determine the number of integers $k$ between $2$ and $2020$, inclusive, such that $k+1$ divides $a_k - 1$.

*Proposed by Taiki Aiba*
