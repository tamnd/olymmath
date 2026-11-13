---
tag: NH40FZWBMJ
kind: problem
type: answer
answer: \frac{3}{2}-\frac{1}{n+1}<\sum_{k=1}^{n}\frac{1}{C_{k}}<2-\frac{1}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $y=\frac{x^{2}-x+n}{x^{2}+x+1}\left(n \in \mathbf{N}_{+}\right)$ with the minimum value $a_{n}$, the maximum value $b_{n}$, and $c_{n}=\frac{n}{4}\left(1+3 a_{n} b_{n}\right)$.
(1) Find the general term formula for the sequence $\left\{c_{n}\right\}$;
(2) Prove that $\frac{3}{2}-\frac{1}{n+1}<\sum_{k=1}^{n} \frac{1}{c_{k}}<2-\frac{1}{n}(n \geqslant 2)$.
