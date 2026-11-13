---
tag: VR9JFVGZN9
kind: problem
type: answer
answer: 2^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The rows and columns of a $2^n \times 2^n$ table are numbered from $0$ to $2^{n}-1.$ The cells of the table have been coloured with the following property being satisfied: for each $0 \leq i,j \leq 2^n - 1,$ the $j$-th cell in the $i$-th row and the $(i+j)$-th cell in the $j$-th row have the same colour. (The indices of the cells in a row are considered modulo $2^n$.) Prove that the maximal possible number of colours is $2^n$.

*Proposed by Hossein Dabirian, Sepehr Ghazi-nezami, Iran*
