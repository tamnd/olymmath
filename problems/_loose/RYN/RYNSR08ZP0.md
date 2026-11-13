---
tag: RYNSR08ZP0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the function $f(x)$ on $\mathbf{R}$ that satisfies:
(1) $f(0)=0$;
(2) For any $x, y \in(-\infty,-1) \cup(1, +\infty)$, we have $f\left(\frac{1}{x}\right)+f\left(\frac{1}{y}\right)=f\left(\frac{x+y}{1+x y}\right)$;
(3) When $x \in(-1,0)$, we have $f(x)>0$.
Prove: $f\left(\frac{1}{19}\right)+f\left(\frac{1}{29}\right)+\cdots+$ $f\left(\frac{1}{n^{2}+7 n+11}\right)>f\left(\frac{1}{2}\right)$, where $n \in \mathbf{N}^{*}$.
