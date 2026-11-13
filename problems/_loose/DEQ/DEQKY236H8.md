---
tag: DEQKY236H8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204345
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(G,\cdot)$ be a grup with neutral element $e{}$, and let $H{}$ and $K$ be proper subgroups of $G$, satisfying $H\cap K=\{e\}$. It is known that $(G\setminus(H\cup K))\cup\{e\}$ is closed under the operation of $G$. Prove that $x^2=e$ for all the elements $x{}$ of $G{}$.
