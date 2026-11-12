---
tag: 2KMR2SW4AT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36771
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$K>1$ - a natural number. The sequence $\left(x_{n}\right)$ is constructed as follows: $x_{1}=1, x_{2}=K, x_{n}=K x_{n-1}-x_{n-2}$ for $n>2$. Prove that for any natural $n$ there exists such $m>n$ that $x_{m}$ is divisible by $x_{n}$.
