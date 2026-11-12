---
tag: S10VVG3TJ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that

$$
p(n)=\sum_{k=1}^{\infty}(-1)^{k+1}\left(p\left(n-\frac{3 k^{2}-k}{2}\right)+p\left(n-\frac{3 k^{2}+k}{2}\right)\right)
$$

(it is assumed that $p(0)=1$ and $p(m)=0$ for $m<0$).
