---
tag: QM1V4X0VF2
kind: problem
type: answer
answer: \frac{1-(n+1)x^{n}+nx^{n+1}}{(1-x)^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the sum $1+2 x+3 x^{2}+\ldots+n x^{n-1}$ by differentiating the equality $1+x+x^{2}+\ldots+x^{n}=\frac{1-x^{n+1}}{1-x}$.

See also problems $14.16,30.14$.
