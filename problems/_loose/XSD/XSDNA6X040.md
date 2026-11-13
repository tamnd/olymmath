---
tag: XSDNA6X040
kind: problem
type: answer
answer: x<-1orx>2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $y=f(x)$ be defined on $\mathbf{R}$, for any real numbers $m, n$, it always holds that $f(m+n)=f(m) \cdot f(n)$, and when $x>0$, $0<f(x)<1$;
(2) Find the range of $x$ that satisfies $f\left(2 x^{2}-4 x-1\right), f(x-1)<1$.
