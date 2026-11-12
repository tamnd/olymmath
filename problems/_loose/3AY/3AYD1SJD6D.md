---
tag: 3AYD1SJD6D
kind: problem
type: answer
answer: "155"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Dima calculated the factorials of all natural numbers from 80 to 99, found the numbers that are the reciprocals of these factorials, and printed the resulting decimal fractions on 20 infinite tapes (for example, on the last tape, the number $\frac{1}{99!}=0, \underbrace{00 \ldots 00}_{155 \text { zeros }} 10715$.. was printed). Sasha wants to cut a piece from one tape, on which $N$ digits are written in a row without a comma. What is the largest $N$ for which he can do this so that Dima cannot determine from this piece which tape Sasha has damaged?
