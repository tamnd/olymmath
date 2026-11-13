---
tag: PV9WVKVWRW
kind: problem
type: answer
answer: 1+\mathrm{C}_{x}^{2}+\mathrm{C}_{x}^{4}+\cdots+\mathrm{C}_{x}^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $x \in \mathbf{R}, n \in \mathbf{N}^{*}$, define $\mathrm{C}_{x}^{n}=$ $\frac{x(x-1) \cdots(x-n+1)}{n!}$. Let $p(x)$ be a polynomial of degree $2m$ that satisfies $p(0)=1, p(k)=2^{k-1}(k=1,2$, $\cdots, 2 m)$. Express $p(x)=$ $ $ using $\mathrm{C}_{x}^{k}(k=1,2, \cdots, 2 m)$.
