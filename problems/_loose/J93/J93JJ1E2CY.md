---
tag: J93JJ1E2CY
kind: problem
type: answer
answer: D(XY)=D(X)D(Y)+n^{2}D(X)+^{2}D(Y)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $X$ and $Y$ are independent random variables, then

$$
D(X Y)=D(X) \cdot D(Y)+n^{2} D(X)+m^{2} D(Y)
$$

where $m=M(X)$ and $n=M(Y)$.
