---
tag: PWEA2Z52E6
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168915
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A computer program evaluates expressions without parentheses in the following way:

1) First, it performs the multiplications and divisions from left to right one by one.
2) Then, it performs the additions and subtractions again from left to right.

For example, the value of the expression $1-2 / 3-4$ is $-3 \frac{2}{3}$. How many different results can we get if in the following expression we write one of the signs $+- /, \times$ independently in each $*$ position?

$1 * 1 * 1 * 1 * 1 * 1 * 1 * 1$
