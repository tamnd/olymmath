---
tag: 95RWDYVB3W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k,n$ and $r$ be positive integers.

(a) Let $Q(x)=x^k+a_1x^{k+1}+\cdots+a_nx^{k+n}$ be a polynomial with real coefficients. Show that the function $\frac{Q(x)}{x^k}$ is strictly positive for all real $x$ satisfying
$$0<|x|<\frac1{1+\sum\limits_{i=1}^n |a_i|}$$
(b) Let $P(x)=b_0+b_1x+\cdots+b_rx^r$ be a non zero polynomial with real coefficients. Let $m$ be the smallest number such that $b_m \neq 0$. Prove that the graph of $y=P(x)$ cuts the $x$-axis at the origin (i.e., $P$ changes signs at $x=0$) if and only if $m$ is an odd integer.
