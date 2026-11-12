---
tag: E84RZCDQY3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41808
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Polynomial and Integral. Let us define the quantity $T_{k}(x)$ as follows:

$$
T_{k}(x)=\prod_{\substack{i=1 \\ i \neq k}}^{n}(x-i)
$$

Let $P(x)$ be the polynomial of minimal degree that has the property that

$$
P(k)=T_{k}(k), k=1,2, \ldots, n
$$

Show that if we take two integers $s$ and $t$, such that $1 \leqslant s \leqslant n$ and $1 \leqslant t \leqslant n$, then

$$
\int_{s}^{t} P(x) d x=0
$$
