---
tag: QWBGP3FNQX
kind: problem
type: answer
answer: n = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250650
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fibonacci sequences is defined as $f_1=1$,$f_2=2$, $f_{n+1}=f_{n}+f_{n-1}$ for $n \ge 2$.
a) Prove that every positive integer can be represented as sum of several distinct Fibonacci number.
b) A positive integer is called *Fib-unique* if the way to represent it as sum of several distinct Fibonacci number is unique. Example: $13$ is not Fib-unique because $13 = 13 = 8 + 5 = 8 + 3 + 2$. Find all Fib-unique.
