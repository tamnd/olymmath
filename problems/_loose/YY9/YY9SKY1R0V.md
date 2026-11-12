---
tag: YY9SKY1R0V
kind: problem
type: answer
answer: C_{n}^{n_{1}}p^{n_{1}}(1-p)^{n_{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33474
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider sampling without replacement. $n$ balls are chosen from an urn containing $M_{1}$ white and $M_{2}$ black balls, $M_{1}+M_{2}=M$. The event $B_{n_{1}, n_{2}}$ consists of $n_{1}$ of the selected balls being white, $n_{2}-$
black, $n_{1}+n_{2}=n$. Show that if $M \rightarrow \infty$ and $M_{1} \rightarrow \infty$ such that $\frac{M_{1}}{M} \rightarrow p$, then

$$
\mathrm{P}\left(B_{n_{1}, n_{2}}\right) \rightarrow C_{n_{1}+n_{2}}^{n_{1}} p^{n_{1}}(1-p)^{n_{2}}
$$
