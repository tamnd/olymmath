---
tag: C3V57DKXDG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a given positive integer. The sequence $x_n$ is defined as follows: $x_1 =1$ and $x_{n+1}$ is the least positive integer which is not in $\{x_{1}, x_{2},..., x_{n}, x_{1}+k, x_{2}+2k,..., x_{n}+nk \}$. Show that there exist real number $a$ such that $x_n = \lfloor an\rfloor$ for all positive integer $n$.
