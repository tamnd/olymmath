---
tag: F2JYJECJHX
kind: problem
type: answer
answer: "273"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $n!=1 \times 2 \times \ldots \times n$, for example, $5!=1 \times 2 \times 3 \times 4 \times 5$. If $\frac{n!\times(n+1)!}{2}$ (where $\mathbf{n}$ is a positive integer, and $1 \leq n \leq 100$) is a perfect square, for example, when $n=7$,
$\frac{n!\times(n+1)!}{2}=\frac{7 \times (7+1)!}{2}=\frac{7 \times 8!}{2}=\frac{7 \times (7 \times 8)}{2}=(7!)^{2} \times 4=(7!)^{2} \times 2^{2}$ is a perfect square, then the sum of all $\mathbf{n}$ that satisfy the condition is
