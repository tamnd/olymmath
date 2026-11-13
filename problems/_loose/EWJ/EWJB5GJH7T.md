---
tag: EWJB5GJH7T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2091773
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28472
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1999 Tournament Of Towns
---
Several positive integers $a_0 , a_1 , a_2 , ... , a_n$ are written on a board. On a second board, we write the amount $b_0$ of numbers written on the first board, the amount $b_1$ of numbers on the first board exceeding $1$ , the amount $b_2$ of numbers greater than $2$ , and so on as long as the $b$ s are still positive. Then we stop, so that we do not write any zeros. On a third board we write the numbers $c_0 , c_1 , c_2 , ...$ . using the same rules as before, but applied to the numbers $b_0 , b_1 , b_2 , ...$ of the second board. Prove that the same numbers are written on the first and the third boards.

(H. Lebesgue - A Kanel)
