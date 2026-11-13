---
tag: PEXBMKAD10
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133548
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given any positive integer $N$, such as 248, we can always use the four digits of 1984, after appropriate rearrangement, to form a four-digit number $\overline{a_{3} a_{2} a_{1} a_{0}}$, such as 8194, so that 7 divides $(248 + 8194)$. Please prove that for any given natural number $N$, there always exists a four-digit number $a_{3} a_{2} a_{1} a_{0}$, obtained by appropriately rearranging the digits of 1984, such that 7 divides $\left(N + \overline{a_{3} a_{2} a_{1} a_{0}}\right)$.
(China Beijing Junior High School Grade 2 Mathematics Competition, 1984)
