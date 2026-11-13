---
tag: ZAVKGQF4CV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246836
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let be a function $ f:\mathbb{R}\longrightarrow\mathbb{R} $ such that:
$ \text{(i)} f(0)=0 $
$ \text{(ii)} f'(x)\neq 0, \forall x\in\mathbb{R} $
$ \text{(iii)} \left. f''\right|_{\mathbb{R}}\text{ exists and it's continuous} $

Demonstrate that the function $ g:\mathbb{R}\longrightarrow\mathbb{R} $ defined as
$$ g(x)=\left\{\begin{matrix}\cos\frac{1}{f(x)}, x\neq 0\\ 0, x=0\end{matrix}\right. $$
is primitivable.
