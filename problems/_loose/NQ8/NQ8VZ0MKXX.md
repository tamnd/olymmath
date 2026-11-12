---
tag: NQ8VZ0MKXX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, \ldots, a_{n}$ be an arithmetic progression with positive terms. Prove that

$$
\frac{1}{\sqrt{a_{1}}+\sqrt{a_{2}}}+\frac{1}{\sqrt{a_{2}}+\sqrt{a_{3}}}+\ldots+\frac{1}{\sqrt{a_{n-1}}+\sqrt{a_{n}}}=\frac{n-1}{\sqrt{a_{1}}+\sqrt{a_{n}}}
$$

- A decimal fraction $\alpha=0, a_{1} a_{2} a_{3} \ldots$ is called periodic if $a_{k+n}=a_{k}$ for all $k \geqslant N$; the number $n$ is called the period length. If $N=1$, the fraction is called purely periodic. The same terminology is used for decimal fractions with a non-zero integer part. For a periodic decimal fraction, the notation $0, a_{1} a_{2} \ldots a_{N-1}\left(a_{N} a_{N+1} \ldots a_{N+n-1}\right)$ is used.
