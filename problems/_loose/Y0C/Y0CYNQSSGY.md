---
tag: Y0CYNQSSGY
kind: problem
type: answer
answer: m_{\max}=\sum_{i=0}^{\infty}(-1)^{i}[\frac{n}{p^{i}}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the set $N=\{1,2, \cdots, n\}$, select $m$ numbers such that none of them is $p$ times another. Find the maximum value of $m$.
For this problem, a formula can be derived:
$$
m_{\max }=\sum_{i=0}^{\infty}(-1)^{i}\left[\frac{n}{p^{i}}\right],
$$

where $[x]$ denotes the greatest integer not exceeding the real number $x$.
