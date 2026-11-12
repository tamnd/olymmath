---
tag: 2YCPWK9PT7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33774
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a discrete random variable with a uniform distribution on $\{0,1, \ldots, n\}$, i.e., $\mathrm{P}(X=k)=\frac{1}{n+1}$, where $k=0,1, \ldots, n$. Show that $G(s)=\mathrm{E} s^{X}=\frac{1}{n+1} \frac{1-s^{n+1}}{1-s}$, and find $\mathrm{E} X$ and $\mathrm{E} X^{2}$, to establish the known formulas

$$
\sum_{k=1}^{n} k=\frac{n(n+1)}{2}, \sum_{k=1}^{n} k^{2}=\frac{n(n+1)(n+2)}{6}
$$
