---
tag: RP8MQPKFHQ
kind: problem
type: answer
answer: x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
75 For the given function $f(x)$, define an $n$-th degree polynomial $f_{n}(x)$ as follows:
$$
f_{n}(x)=\sum_{k=0}^{n} C_{n}^{k} \cdot f\left(\frac{k}{n}\right) x^{k}(1-x)^{n-k}, n=1,2, \cdots
$$
(1) When $f(x)=1(0 \leqslant x \leqslant 1)$, find $f_{n}(x)$;
(2) When $f(x)=x$, prove that $f_{n}(x)=x$;
(3) When $f(x)=x^{2}$, prove that $f_{n}(x)=\frac{n-1}{n} x^{2}+\frac{x}{n}(n \geqslant 2)$.
