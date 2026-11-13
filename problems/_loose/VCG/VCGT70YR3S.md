---
tag: VCGT70YR3S
kind: problem
type: answer
answer: +n-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(u_n)$ be a sequence of integers such that $u_1 > 0$ and, for all $n \geqslant 0$, the number $u_{n+1}$ is the sum of $u_n$ and its largest divisor except itself. For example, if $u_n = 12$, then $u_{n+1} = 12 + 6 = 18$. Show that there exists $N$ such that, for all $n > N$, the integer $u_n$ is divisible by $3^{2019}$.
