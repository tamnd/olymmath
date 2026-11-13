---
tag: TJS2MMMWE6
kind: problem
type: answer
answer: x_{2008} \text{ is the sum of two perfect squares}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243339
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ \{x_n\}_{n\geq 1}$ be a sequences, given by $ x_1 = 1$, $ x_2 = 2$ and
$$ x_{n + 2} = \frac { x_{n + 1}^2 + 3 }{x_n} .
$$
Prove that $ x_{2008}$ is the sum of two perfect squares.
