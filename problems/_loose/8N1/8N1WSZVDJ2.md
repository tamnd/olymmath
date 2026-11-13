---
tag: 8N1WSZVDJ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{n}, \mathrm{k} \in \mathrm{Z}^{+}$, there are $\mathrm{n}$ cities, each pair of which is connected by several roads. Any two cities are connected by 0 or 1 road, and from any city, it is impossible to travel through exactly $\mathrm{k}+1$ roads, passing through $\mathrm{k}+2$ different cities. Prove: the total number of roads does not exceed $\left[\frac{\mathrm{kn}}{2}\right]$.
