---
tag: DZ99CGWA2X
kind: problem
type: answer
answer: q^{n-r}(q+1)^{r}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143947
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $k, n (k \geqslant n)$ are positive integers. $k$ divided by $n$ gives a quotient $q$ and a remainder $r$. Split $k$ into the sum of $n$ positive integers. For all such partitions, the maximum value of their product is $F(k)$.
Prove: $F(k)=q^{n-r} \cdot(q+1)^{r}$.
