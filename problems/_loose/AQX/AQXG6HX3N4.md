---
tag: AQXG6HX3N4
kind: problem
type: answer
answer: 2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 3$ be an integer and consider an $n \times n$ board, divided into $n^{2}$ unit squares. We have for every $m \geq 1$ arbitrarily many $1 \times m$ rectangles (type I) and arbitrarily many $m \times 1$ rectangles (type II) available. We cover the board with $N$ of these rectangles, which do not overlap and do not extend beyond the board. The total number of type I rectangles on the board must be equal to the total number of type II rectangles on the board. (Note that a $1 \times 1$ rectangle is both of type I and type II.) What is the smallest value of $N$ for which this is possible?
