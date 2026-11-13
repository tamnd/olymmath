---
tag: XNNTSEC5M4
kind: problem
type: answer
answer: "279"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136918
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $2^{2013}<5^{867}<2^{2014}$, how many integer pairs $(\mathrm{m}, \mathrm{n})$ satisfy: $5^{\mathrm{n}}<2^{\mathrm{m}}<$ $2^{\mathrm{m}+2}<5^{\mathrm{n}+1}$ ~ where $1 \leq \mathrm{m} \leq 2012$.
