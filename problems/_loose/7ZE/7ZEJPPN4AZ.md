---
tag: 7ZEJPPN4AZ
kind: problem
type: answer
answer: C_{2n-r+1}^{r}-C_{2n-r-1}^{r-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2 n$ people sitting in a row, and $r$ people need to be called out from them $(r<n)$. It is required that no two of the called-out people sit next to each other. How many different ways are there to call them out? If the original $2 n$ people are sitting in a circle, how does the situation change?
