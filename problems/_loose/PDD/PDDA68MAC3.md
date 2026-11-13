---
tag: PDDA68MAC3
kind: problem
type: answer
answer: a) 1/3^{2005}. b) P > Q for pairwise distinct x, y, z.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Let $x$, $y$, $z$ be positive real numbers such that $x + y + z = 1$. For positive integer $n$, define $S_n = x^n + y^n + z^n$. Furthermore, let $P = S_2 S_{2005}$ and $Q = S_3 S_{2004}$.

a. Find the smallest possible value of $Q$.

b. If $x$, $y$, $z$ are pairwise distinct, determine whether $P$ or $Q$ is larger.
