---
tag: 5PQHJ6WZX2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Centroamerican and Caribbean Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3422897
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: centro/2024
    source: hf-ai-mo-aops
    label: 2024 Centroamerican and Caribbean Math Olympiad
---
Let $n$ be a positive integer with $k$ digits. A number $m$ is called an $alero$ of $n$ if there exist distinct digits $a_1$ , $a_2$ , $\dotsb$ , $a_k$ , all different from each other and from zero, such that $m$ is obtained by adding the digit $a_i$ to the $i$ -th digit of $n$ , and no sum exceeds 9.
For example, if $n$ $=$ $2024$ and we choose $a_1$ $=$ $2$ , $a_2$ $=$ $1$ , $a_3$ $=$ $5$ , $a_4$ $=$ $3$ , then $m$ $=$ $4177$ is an alero of $n$ , but if we choose the digits $a_1$ $=$ $2$ , $a_2$ $=$ $1$ , $a_3$ $=$ $5$ , $a_4$ $=$ $6$ , then we don't obtain an alero of $n$ , because $4$ $+$ $6$ exceeds $9$ .
Find the smallest $n$ which is a multiple of $2024$ that has an alero which is also a multiple of $2024$ .
