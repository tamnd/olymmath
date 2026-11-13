---
tag: A92C1R5EVA
kind: problem
type: answer
answer: v_{p}(n!)=\Sigma_{k=1}^{+\infty}\lfloor\frac{n}{p^{k}}\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79396
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We recall the factorial notation: for an integer $n, n! = n \times (n-1) \times \ldots \times 2 \times 1$.

For a prime number $p$, calculate $v_{p}(n!)$.
