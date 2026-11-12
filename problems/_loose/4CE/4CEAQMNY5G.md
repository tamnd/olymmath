---
tag: 4CEAQMNY5G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From an urn containing $M$ balls numbered $1, \ldots, M$, a "random" selection is made $n$ times with replacement. Consider the event $A_{k}$, which consists of the maximum number of the drawn balls being $k$. Show that

$$
\mathrm{P}\left(A_{k}\right)=\frac{k^{n}-(k-1)^{n}}{N^{n}}
$$

Also show that if the selection is made without replacement, then

$$
\mathrm{P}\left(A_{k}\right)=\frac{C_{k-1}^{n-1}}{C_{N}^{k}}, n \leqslant k \leqslant N .
$$
