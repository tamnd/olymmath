---
tag: 8DVGMS75WE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89832
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every prime number $p$, there exists a planet $\mathcal{P}_{p}$ somewhere in the universe, where the ocean contains exactly $p$ islands, $O_{1}, O_{2}, \ldots, O_{p}$. Between islands $O_{m}$ and $O_{n}$ (for $m \neq n$) there is a bridge if and only if the number $\left(m^{2}-n+1\right)\left(n^{2}-m+1\right)$ is divisible by $p$. It is not possible to cross directly from one bridge to another, only to an island.

Prove that there are infinitely many prime numbers $p$ for which it is not possible to travel from any island to any other island on the planet $\mathcal{P}_{p}$ by only using islands and bridges.
