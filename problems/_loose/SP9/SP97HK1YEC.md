---
tag: SP97HK1YEC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261571
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Say that a function $f : \{1, 2, . . . , 1001\} \to Z$ is *almost * polynomial if there is a polynomial $p(x) = a_{200}x^{200} +... + a_1x + a_0$ such that each an is an integer with $|a_n| \le 201$, and such that $|f(x) - p(x)| \le 1$ for all $x \in \{1, 2, . . . , 1001\}$. Let $N$ be the number of almost polynomial functions. Compute the remainder upon dividing $N$ by $199$.
