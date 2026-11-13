---
tag: 3M0K9QW7DG
kind: problem
type: answer
answer: "51"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265827
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The infinite sequence of integers $a_1, a_2, \cdots $ is defined recursively as follows: $a_1 = 3$, $a_2 = 7$, and $a_n$ equals the alternating sum
$$a_1 - 2a_2 + 3a_3 - 4a_4 + \cdots (-1)^n \cdot (n-1)a_{n-1}$$

for all $n > 2$. Let $a_x$ be the smallest positive multiple of $1090$ appearing in this sequence. Find the remainder of $a_x$ when divided by $113$.
