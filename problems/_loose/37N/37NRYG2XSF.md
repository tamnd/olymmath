---
tag: 37NRYG2XSF
kind: problem
type: answer
answer: P(x)=\cdotx\cdot(x-1)(x-2)\cdots(x-2022),\in\mathbb{R}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all polynomials $P$ with real coefficients for which the equality

$$
x \cdot P(x-1)=(x-2023) \cdot P(x)
$$

holds for all real numbers $x$.
