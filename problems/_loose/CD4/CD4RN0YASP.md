---
tag: CD4RN0YASP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10907
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187311
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1998
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
Find the smallest number $\mathrm{n}$ such that given any $\mathrm{n}$ distinct numbers from $\{1,2,3, \ldots, 999\}$, one can choose four different numbers $\mathrm{a}, \mathrm{b}, \mathrm{c}, \mathrm{d}$ such that $\mathrm{a}+2 \mathrm{~b}+3 \mathrm{c}=\mathrm{d}$.
