---
tag: TGHFKJQF82
kind: problem
type: answer
answer: P(x)=x^2orP(x)=x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P \neq 0$ with real coefficients that fulfill the following condition:

$$
P(P(k))=P(k)^{2} \text { for } k=0,1,2, \ldots,(\operatorname{deg} P)^{2}
$$
