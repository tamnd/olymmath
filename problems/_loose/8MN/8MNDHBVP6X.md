---
tag: 8MNDHBVP6X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A segment $AB$ of length $100$ is divided into $100$ little segments of length $1$ by $99$ intermediate points. Endpoint $A$ is assigned $0$ and endpoint $B$ is assigned $1$. Gustavo assigns each of the $99$ intermediate points a $0$ or a $1$, at his choice, and then color each segment of length $1$ blue or red, respecting the following rule:
*The segments that have the same number at their ends are red, and the segments that have different numbers at their ends are blue. * Determine if Gustavo can assign the $0$'s and $1$'s so as to get exactly $30$ blue segments. And $35$ blue segments? (In each case, if the answer is yes, show a distribution of $0$'s and $1$'s, and if the answer is no, explain why).
