---
tag: KXA0MYMNQM
kind: problem
type: answer
answer: n^2 + n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anthony writes the $(n+1)^2$ distinct positive integer divisors of $10^n$, each once, on a whiteboard. On a move, he may choose any two distinct numbers $a$ and $b$ on the board, erase them both, and write $\gcd(a, b)$ twice. Anthony keeps making moves until all of the numbers on the board are the same. Find the minimum possible number of moves Anthony could have made.

*Proposed by Andrew Wen*
