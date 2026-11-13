---
tag: AZZH03QDNK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g$ be a Fibonacci primitive root $\pmod{p}$. i.e. $g$ is a primitive root $\pmod{p}$ satisfying $g^2 \equiv g+1 \pmod{p}$. Prove that

- $g-1$ is also a primitive root $\pmod{p}$.
- if $p=4k+3$ then $(g-1)^{2k+3} \equiv g-2 \pmod{p}$, and deduce that $g-2$ is also a primitive root $\pmod{p}$.
