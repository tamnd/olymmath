---
tag: 7SPMDV11AC
kind: problem
type: answer
answer: n = (k+1)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247096
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A number of $n > m \geq 1$ soccer teams play a full tournament, each team meeting (once) each other. Points are awarded: $2$ for a victory, $1$ for a tie and $0$ for a loss. At the end, each team has won half of its points against the $m$ teams placed last (including each of these teams, who won half of its points against the other $m-1$).

Find all possible values for $n$ and $m$, supported with examples of such tournaments.
