---
tag: CWD6WFZ4E5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262829
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)$ be a sequence of numbers such that $a_{n+2} = 2a_n$ for all integers $n.$ Suppose $a_1 = 1,$ $a_2 = 3,$
$$ \sum_{n=1}^{2021} a_{2n} = c, \text{and} \sum\limits_{n=1}^{2021} a_{2n-1} = b. $$
Then $c - b + \tfrac{c-b}{b}$ can be written in the form $x^y,$ where $x$ and $y$ are integers such that $x$ is as small as possible. Find $x + y.$
