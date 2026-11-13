---
tag: 8WTDYEYBTA
kind: problem
type: answer
answer: '[\frac{3(n+1)^{2}+1}{4}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
310 Let $n$ be a given positive integer. $D_{n}$ is the set of all divisors of $2^{n} 3^{n} 5^{n}$. $S \subseteq D_{n}$. If no number in $S$ can divide any other number in $S$, find the maximum value of $|S|$.
