---
tag: KAGMFF78YT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10932
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2003
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
Let A, B be two sets of $\mathrm{N}$ consecutive integers. If $\mathrm{N}=2003$, can we form $\mathrm{N}$ pairs (a,b) with a $\angle \mathrm{A}, \mathrm{b} \angle \mathrm{B}$ such that the sums of the pairs are $\mathrm{N}$ consecutive integers? What about $\mathrm{N}=2004$ ?
