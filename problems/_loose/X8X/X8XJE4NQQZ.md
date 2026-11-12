---
tag: X8XJE4NQQZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the country of Grapheinia, there are $n$ ($n \geq 2$) cities. Some cities are connected by non-stop flights (flights are operated in both directions on each route) in such a way that from any city, it is possible to reach any other city by plane (possibly with layovers), but closing any flight route would violate this property. Additionally, no more than $d$ flight routes originate from any city. Prove that all cities in Grapheinia can be divided into no more than $\frac{n}{2} + d$ groups such that each flight route connects cities from different groups and for any two groups, there is at most one flight route connecting cities from these groups. (D. Karpov)
