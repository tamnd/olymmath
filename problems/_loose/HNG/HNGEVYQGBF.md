---
tag: HNGEVYQGBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\in\mathbb{N}$, the set $A=\{(x_1,x_2...,x_n)|x_i\in\mathbb{R}_{+}, i=1,2,...,n\}$ and the function $$f:A\rightarrow\mathbb{R}, f(x_1,...,x_n)=\frac{1}{x_1}+\frac{1}{2x_2}+\ldots+\frac{1}{(n-1)x_{n-1}}+\frac{1}{nx_n}.$$
Prove that $f( \binom{n}{1},\binom{n}{2},...,\binom{n}{n-1},\binom{n}{n})=f(2^{n-1},2^{n-2},...,2,1).$
