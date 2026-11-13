---
tag: B987SYHT2R
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261718
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The $\textit{arithmetic derivative}$ $D(n)$ of a positive integer $n$ is defined via the following rules:

- $D(1) = 0$;

- $D(p)=1$ for all primes $p$;

- $D(ab)=D(a)b+aD(b)$ for all positive integers $a$ and $b$.

Find the sum of all positive integers $n$ below $1000$ satisfying $D(n)=n$.
