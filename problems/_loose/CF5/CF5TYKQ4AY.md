---
tag: CF5TYKQ4AY
kind: problem
type: answer
answer: \frac{3n-5}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You are given an odd number $n\ge 3$. For every pair of integers $(i, j)$ with $1\le i \le j \le n$ there is a domino, with $i$ written on one its end and with $j$ written on another (there are $\frac{n(n+1)}{2}$ domino overall). Amin took this dominos and started to put them in a row so that numbers on the adjacent sides of the dominos are equal. He has put $k$ dominos in this way, got bored and went away. After this Anton came to see this $k$ dominos, and he realized that he can't put all the remaining dominos in this row by the rules. For which smallest value of $k$ is this possible?

*Oleksii Masalitin*
