---
tag: MDYWT7AVH3
kind: problem
type: answer
answer: "46"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=192710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the list $2,3,4,5$, there are exactly three different ways to choose three integers from the list and form a triangle whose side lengths are equal to those integers. The integers chosen could be $2,3,4$ or $2,4,5$ or $3,4,5$. The integers $2,3,5$ cannot be used as side lengths of a triangle. Given the list $4,10,3, n, 13$, there are exactly four different ways to choose three integers from the list and form a triangle whose side lengths are equal to those integers. If $n$ is different from all other numbers in the list, then the sum of all possible values of $n$ is
(A) 46
(B) 29
(C) 69
(D) 23
(E) 17
