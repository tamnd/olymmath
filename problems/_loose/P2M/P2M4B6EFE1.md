---
tag: P2M4B6EFE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f_n(x) = x^n(1 - x)^n,\ I_n = \int_0^1 f_n(x)\ dx\ (n = 1,2,\cdots)$.

(1) Find a polynomial $ g(x)$ such that $ f_{n + 1}'(x) = (n + 1)f_n(x)g(x)$.

(2) Find constant numbers $ A_n,\ B_n$ such that $ f_{n + 2}''(x) = A_nf_{n + 1}(x) + B_nf_n(x)$.

(3) Find $ A_nI_{n + 1} + B_nI_n$.

(4) Let $ J_n = (2n + 1)!I_n$. Express $ J_{n + 1}$ in terms of $ J_n$.

(5) Find $ I_n$.
