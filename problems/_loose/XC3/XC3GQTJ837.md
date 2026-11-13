---
tag: XC3GQTJ837
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of integers $ \left( a_n\right)_{n\ge 0} $ defined as
$$ a_n=\left\{\begin{matrix}n^6-2017, & 7|n\\ \frac{1}{7}\left( n^6-2017\right) , & 7\not | n\end{matrix}\right. . $$
Determine the largest length a string of consecutive terms from this sequence sharing a common divisor greater than $
1 $ may have.
