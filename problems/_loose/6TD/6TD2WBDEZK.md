---
tag: 6TD2WBDEZK
kind: problem
type: answer
answer: e
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \ldots$ be a sequence of independent random variables uniformly distributed on $[0,1]$. Define

$$
\nu=\inf \left\{n \geqslant 2: \xi_{n}>\xi_{n-1}\right\}, \mu(x)=\inf \left\{n \geqslant 1: \xi_{1}+\ldots+\xi_{n}>x\right\},
$$

where $0<n)=x^{n} / n!, n \geqslant 1$

(b) $\nu \stackrel{d}{=} \mu(1)$

(c) $\mathrm{E} \nu=\mathrm{E} \mu(1)=e$.
