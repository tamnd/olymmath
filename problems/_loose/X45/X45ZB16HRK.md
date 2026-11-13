---
tag: X45ZB16HRK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=159549
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ and $F$ be two opposite vertices of a regular octagon. A counter starts at $S$ and each second is moved to one of the two neighboring vertices of the octagon. The direction is determined by the toss of a coin. The process ends when the counter reaches $F$. We define $a_{n}$ to be the number of distinct paths of duration $n$ seconds that the counter may take to reach $F$ from $S$. Prove that for $n=1,2,3, \ldots$.
$$
a_{2 n-1}=0, a_{2 n}=\frac{1}{\sqrt{2}}\left(x^{n-1}-y^{n-1}\right), \text { where } x=2+\sqrt{2}, y=2-\sqrt{2} \text {. }
$$
