---
tag: SV87DQDZQ2
kind: problem
type: answer
answer: \pm (n-1)!^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242743
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n\geq 2$ is a given integer. For two permuations $(\alpha_1,\cdots,\alpha_n)$ and $(\beta_1,\cdots,\beta_n)$ of $1,\cdots,n$, consider $n\times n$ matrix $A= \left(a_{ij} \right)_{1\leq i,j\leq n}$ defined by $a_{ij} = (1+\alpha_i \beta_j )^{n-1}$. Find every possible value of $\det(A)$.
