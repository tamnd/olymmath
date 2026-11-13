---
tag: AB552ZSXPJ
kind: problem
type: answer
answer: (1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(3,1),(3,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a pair $(r, s)$ of natural numbers is called good if there exists a polynomial $P$ with integer coefficients and pairwise distinct integers $a_{1}, \ldots, a_{r}$ and $b_{1}, \ldots, b_{s}$ such that

$$
P\left(a_{1}\right)=P\left(a_{2}\right)=\ldots=P\left(a_{r}\right)=2 \text { and } P\left(b_{1}\right)=P\left(b_{2}\right)=\ldots=P\left(b_{s}\right)=5
$$

(a) Show that for every good pair $(r, s)$ of natural numbers $r, s \leq 3$ holds.

(b) Determine all good pairs.
