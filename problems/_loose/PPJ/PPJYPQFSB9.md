---
tag: PPJYPQFSB9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2790120
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=249
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203896
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2022
    source: hf-ai-mo-aops
    label: 2022 Greece Junior Math Olympiad
---
On the board we write a series of $n$ numbers, where $n \geq 40$ , and each one of them is equal to either $1$ or $-1$ , such that the following conditions both hold:

(i) The sum of every $40$ consecutive numbers is equal to $0$ .
(ii) The sum of every $42$ consecutive numbers is not equal to $0$ .

We denote by $S_n$ the sum of the $n$ numbers of the board. Find the maximum possible value of $S_n$ for all possible values of $n$ .
