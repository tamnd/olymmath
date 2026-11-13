---
tag: YS7JWWBMGA
kind: problem
type: answer
answer: \frac{1+q}{1-q}(a_{1}+a_{2}+\cdots+a_{n})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A20 (15-6, Sweden) Given $n$ positive numbers $a_{1}, a_{2}, \cdots, a_{n}$ and a real number $q(0<q<1)$. Try to provide $n$ real numbers $b_{1}, b_{2}, \cdots, b_{n}$, such that
(a) For all positive integers $k(1 \leqslant k \leqslant n)$, we have $a_{k}<b_{k}$;
(b) For all positive integers $k(1 \leqslant k \leqslant n-1)$, we have
$$
q<\frac{b_{k+1}}{b_{k}}<\frac{1}{q} ;
$$
(c) $b_{1}+b_{2}+\cdots+b_{n}<\frac{1+q}{1-q}\left(a_{1}+a_{2}+\cdots+a_{n}\right)$.
