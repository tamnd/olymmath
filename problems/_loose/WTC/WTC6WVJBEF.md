---
tag: WTC6WVJBEF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an even positive integer. We fill in a number on each cell of a rectangle table of $n$ columns and multiple rows as following:
i. Each row is assigned to some positive integer $a$ and its cells are filled by $0$ or $a$ (in any order);
ii. The sum of all numbers in each row is $n$.
Note that we cannot add any more row to the table such that the conditions (i) and (ii) still hold.
Prove that if the number of $0$'s on the table is odd then the maximum odd number on the table is a perfect square.
