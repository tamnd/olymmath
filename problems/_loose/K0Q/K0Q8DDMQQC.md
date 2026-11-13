---
tag: K0Q8DDMQQC
kind: problem
type: answer
answer: n\equiv1,2(\bmod4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ bags contain $k_{1}, k_{2}, \cdots, k_{n}$ balls respectively, and two players, A and B, take turns to pick balls. Each time, they can only take from one bag, taking at least 1 and at most $m$ balls. The player who takes the last ball wins. If we denote this problem as $\left\{k_{1}, k_{2}, \cdots, k_{n}\right\}_{m}$, we want to ask: For the problem $\{1,2,3, \cdots, n\}_{3}$, for what value of $n$ does A (the first player) have a winning strategy?
