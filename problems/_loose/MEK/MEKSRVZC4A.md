---
tag: MEKSRVZC4A
kind: problem
type: answer
answer: 2^{n-1}(n+2)-n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $f_{0}(x)=x^{n}, f_{k}(x)=$ $\frac{f_{k-1}^{\prime}(x)}{f_{k-1}(1)}$, where $k \leqslant n\left(n, k \in \mathbf{N}_{+}\right)$,

Let $F(x)=\mathrm{C}_{n}^{0} f_{0}\left(x^{2}\right)+\mathrm{C}_{n}^{1} f_{1}\left(x^{2}\right)+\cdots+$ $\mathrm{C}_{n}^{k} f_{k}\left(x^{2}\right)+\cdots+\mathrm{C}_{n}^{n} f_{n}\left(x^{2}\right), x \in[-1,1]$.
(1) Write down $f_{k}(1)$;
(2) Prove: For any $x_{1}, x_{2} \in[-1,1]$, it always holds that $\left|F\left(x_{1}\right)-F\left(x_{2}\right)\right| \leqslant 2^{n-1}(n+2)-n-1$.
