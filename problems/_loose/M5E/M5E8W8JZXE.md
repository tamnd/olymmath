---
tag: M5E8W8JZXE
kind: problem
type: answer
answer: \sum_{a=1}^{20} (2\phi(a) - 1) + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A triple of integers $(a,b,c)$ is said to be $\gamma$*-special* if $a\le \gamma(b+c)$, $b\le \gamma(c+a)$ and $c\le\gamma(a+b)$. For each integer triple $(a,b,c)$ such that $1\le a,b,c \le 20$, Kodvick writes down the smallest value of $\gamma$ such that $(a,b,c)$ is $\gamma$-special. How many distinct values does he write down?

*Proposed by winnertakeover*
