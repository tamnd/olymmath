---
tag: RDP37DQN91
kind: problem
type: answer
answer: \Theta \left( \frac{\ln n}{\ln \ln n} \right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261780
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n\in\mathbb N$, let $x$ be the solution of $x^x=n$. Find the asymptotics of $x$, i.e., express $x=\Theta(f(n))$ for some suitable explicit function of $n$.
