---
tag: AZ5HVEWX0Q
kind: problem
type: answer
answer: k_{\max}=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79060
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We define the $x_{i}$ by $x_{1}=a$ and $x_{i+1}=2 x_{i}+1$. We define the sequence $y_{i}=2^{x_{i}}-1$. Determine the largest integer $k$ such that it is possible for $y_{1}, \ldots, y_{k}$ to all be prime.

Theorem 46. $\left(\frac{p}{q}\right)=-1 \frac{(p-1)(q-1)}{4}\left(\frac{q}{p}\right)$

Theorem 47. $\left(\frac{2}{p}\right)=(-1)^{\frac{p^{2}-1}{8}}$
