---
tag: SS2HGC220C
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ante wrote down a sequence $a_{1}, a_{2}, \ldots, a_{2020}$ in which each of the numbers $1,2, \ldots, 2020$ appears exactly once. Barbara wants to find out this sequence, and Ante gives her information through a series of exchanges.

In one exchange, Barbara writes down the numbers from 1 to 2020 on a piece of paper and connects some of them with lines, ensuring that each number is connected to at most one other number, and then hands the paper to Ante. Ante then writes down the numbers from 1 to 2020 on another piece of paper and for each pair of numbers $i$ and $j$ that Barbara connected with a line, he connects the numbers $a_{i}$ and $a_{j}$ with a line, and finally hands the paper to Barbara.

How many exchanges are needed at minimum for Barbara to determine Ante's sequence with certainty?
