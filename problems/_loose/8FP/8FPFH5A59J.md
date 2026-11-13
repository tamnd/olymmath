---
tag: 8FPFH5A59J
kind: problem
type: answer
answer: \binom{m+n}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a triple $(m,n,r)$ of integers with $0 \le r \le n \le m-2$, define $p(m,n,r)=\sum^r_{k=0} (-1)^k \dbinom{m+n-2(k+1)}{n} \dbinom{r}{k}$. Prove that $p(m,n,r)$ is positive and that $\sum^n_{r=0} p(m,n,r)=\dbinom{m+n}{n}$.
