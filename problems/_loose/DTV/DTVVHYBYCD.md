---
tag: DTVVHYBYCD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be natural numbers. Professor Mubariz has $m$ folders and Professor Nazim has $n$ folders; initially, all folders are empty. Every day, where the day numbers are marked as $d = 1,2,3 ....,$ Prof. Mubariz is given $2018$ blue papers, and Prof. Nazim is given $2018$ orange papers. On day $d ( d = 1, 2, 3, ...),$ they both perform the following operations:

- If the $2018$ papers given to this professor are not enough to place $d$ papers in each of his folders, then he distributes all the $2018$ papers given to him to his students. If the $2018$ papers given to this professor are enough to place $d$ papers in each of his folders, firstly, he places $d$ papers in each of his folders.

- If this professor still has papers left after the first step, he places them in the other professor's folders, with the same number in each folder and as many as possible.

- If this professor still has papers left after the second step, he distributes them to his students.

Prove that after $6$ years, the number of blue papers in one folder of Prof. Nazim will be equal to the number of orange papers in one folder of Prof. Mubariz.
