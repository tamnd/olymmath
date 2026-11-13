---
tag: TFSDABWSGA
kind: problem
type: answer
answer: "2021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Broady The Boar is playing a boring board game consisting of a circle with $2021$ points on it, labeled $0$, $1$, $2$, ... $2020$ in that order clockwise. Broady is rolling $2020$-sided die which randomly produces a whole number between $1$ and $2020$, inclusive.

Broady starts at the point labelled $0$. After each dice roll, Broady moves up the same number of points as the number rolled (point $2020$ is followed by point $0$). For example, if they are at $0$ and roll a $5$, they end up at $5$. If they are at $2019$ and roll a $3$, they end up at $1$.

Broady continues rolling until they return to the point labelled $0$. What is the expected number of times they roll the dice?

*2021 CCA Math Bonanza Lightning Round #2.3*
