---
tag: KJNPM9H57Y
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determinant of Pascal's Triangle. Pascal arranged the binomial coefficients in the following table (Pascal's Triangle) $)^{*}$

| 1 | 1 | 1 | 1 | 1 | 1 | $\ldots$ |
| ---: | ---: | ---: | ---: | ---: | ---: | :--- |
| 1 | 2 | 3 | 4 | 5 | 6 | $\cdots$ |
| 1 | 3 | 6 | 10 | 15 | 21 | $\cdots$ |
| 1 | 4 | 10 | 20 | 35 | 56 | $\cdots$ |
| 1 | 5 | 15 | 35 | 70 | 126 | $\cdots$ |
| 1 | 6 | 21 | 56 | 126 | 252 | $\cdots$ |
| . | . | . | . | . | . | $\cdots$ |

Prove that if we cut out any square of any size from this infinite table, the first row (or column) of which is not located on the first row (column) of this table, then the determinant of any such square will be equal to 1.
