---
tag: QEEVVCAT0V
kind: problem
type: answer
answer: \frac{C_{n}^{k}C_{n}^{-k}}{C_{2n}^{}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33496
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ and $Y$ be independent binomial random variables with parameters $n$ and $p$. Show that

$$
\mathrm{P}(X=k \mid X+Y=m)=\frac{C_{n}^{k} C_{n}^{m-k}}{C_{2 n}^{m}}, k=0,1, \ldots, \min (m, n)
$$
