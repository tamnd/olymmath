---
tag: 2PSSNEYP38
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10890
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1995
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
Find all solutions in real numbers $x_{1}, x_{2}, \ldots, x_{n+1}$ all at least 1 such that: (1) $x_{1}{ }^{1 / 2}+x_{2}{ }^{1 / 3}+x_{3}{ }^{1 / 4}$ $+\ldots+\mathrm{x}_{\mathrm{n}}^{1 /(\mathrm{n}+1)}=\mathrm{n}_{\mathrm{n}+1}{ }^{1 / 2} ;$ and (2) $\left(\mathrm{x}_{1}+\mathrm{x}_{2}+\ldots+\mathrm{x}_{\mathrm{n}}\right) / \mathrm{n}=\mathrm{x}_{\mathrm{n}+1}$.
