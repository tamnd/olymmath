---
tag: 3HHVWQ8X46
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33478
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In (elementary) combinatorics, binomial coefficients $C_{M}^{n} \equiv \frac{(M)_{n}}{n!}=\frac{M!}{n!(M-n)!}$ (also denoted as $\binom{M}{n}$) and the number of arrangements $(M)_{n} \equiv M(M-1) \ldots(M-n+1)$ are usually defined only for integers $n, M \in N=\{1,2, \ldots\}$. In many questions of analysis, it is useful to extend the concepts of "number of arrangements $(M)_{n}$" and "binomial coefficient $C_{M}^{n}$" by taking any number $X$ from $\mathbb{R}$, assuming that $n \in\{0, \pm 1, \pm 2, \ldots\}$, and defining by definition $0!=1, (X)_{0}=1, C_{X}^{0}=1$,

$$
(X)_{n}=X(X-1) \ldots(X-n+1), C_{X}^{n}=\frac{(X)_{n}}{n!}, \text { if } n>0
$$

and $C_{X}^{n}=0$, if $n<0$. Given these definitions, establish (in addition to some relations from I.2.2) the following properties $(X, Y \in \mathbb{R}, n \in \mathbb{Z}=\{0, \pm 1, \pm 2, \ldots\}):$

(a) $C_{X}^{n-1}+C_{X}^{n}=C_{X+1}^{n}$ (Pascal's triangle);

(b) $C_{X+Y}^{n}=\sum_{k=0}^{n} C_{X}^{k} C_{Y}^{n-k}$ (Vandermonde's binomial convolution);

(c) $C_{X-1}^{n}=\sum_{k=0}^{n}(-1)^{n-k} C_{X}^{k}$;

(d) $C_{n-X}^{n-m}=\sum_{k=0}^{n-m}(-1)^{k} C_{X}^{k} C_{n-k}^{m}$;

(e) $C_{X+Y+n-1}^{n}=\sum_{k=0}^{n} C_{X+n-k-1}^{n-k} C_{Y+k-1}^{k}$;

(f) $C_{-X}^{n}=(-1)^{n} C_{X+n-1}^{n}$.
