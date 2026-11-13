---
tag: VX94NGRW2A
kind: problem
type: answer
answer: P(x)=(x-1)x(x+1)(x+2)(x^2+x+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real-coefficient polynomials $P(x)$ that satisfy the following relation,
$$
\left(x^{3}+3 x^{2}+3 x+2\right) \cdot P(x-1)=\left(x^{3}-3 x^{2}+3 x-2\right) \cdot P(x) \text {, }
$$
for all real numbers $x$.
(2003 Vietnam Olympiad)
