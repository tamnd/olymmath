---
tag: PRQJCJ2NGP
kind: problem
type: answer
answer: N = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Submit a positive integer less than or equal to $15$. Your goal is to submit a number that is close to the number of teams submitting it. If you submit $N$ and the total number of teams at the competition (including your own team) who submit $N$ is $T$, your score will be $\frac{2}{0.5|N-T|+1}$.

*2020 CCA Math Bonanza Lightning Round #5.4*
