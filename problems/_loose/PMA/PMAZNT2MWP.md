---
tag: PMAZNT2MWP
kind: problem
type: answer
answer: \exp(A+B) \ne \exp(A)\exp(B)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an arbitrary square matrix $M$, define
$$\exp(M)=I+\frac M{1!}+\frac{M^2}{2!}+\frac{M^3}{3!}+\ldots.$$Construct $2\times2$ matrices $A$ and $B$ such that $\exp(A+B)\ne\exp(A)\exp(B)$.
