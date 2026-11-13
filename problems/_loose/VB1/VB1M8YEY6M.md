---
tag: VB1M8YEY6M
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217551
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all positive integers $n$, denote by $\sigma(n)$ the sum of the positive divisors of $n$ and $\nu_p(n)$ the largest power of $p$ which divides $n$. Compute the largest positive integer $k$ such that $5^k$ divides $$\sum_{d|N}\nu_3(d!)(-1)^{\sigma(d)},$$ where $N=6^{1999}$.

*Proposed by David Altizio*
