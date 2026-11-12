---
tag: RKR0RCV1B0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{S}(\mathrm{n})$ be the sum of the digits of the number $\mathrm{n}$. Find all $\mathrm{n}$ for which $\mathrm{n}+\mathrm{S}(\mathrm{n})+\mathrm{S}(\mathrm{S}(\mathrm{n}))+\ldots \mathrm{S}(\mathrm{S}(\ldots \mathrm{S}(\mathrm{n}) \ldots)=2000000$ (here there are $n$ terms in the sum, and in each term, there is one more iteration of the function $\mathrm{S}$ than in the previous term).
