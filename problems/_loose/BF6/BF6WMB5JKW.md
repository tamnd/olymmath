---
tag: BF6WMB5JKW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10910
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187314
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
$\mathrm{k}$ is the positive root of the equation $\mathrm{x}^{2}-1998 \mathrm{x}-1=0$. Define the sequence $\mathrm{x}_{0}, \mathrm{x}_{1}, \mathrm{x}_{2}, \ldots$ by $\mathrm{x}_{0}$ $=1, \mathrm{x}_{\mathrm{n}+1}=\left[\mathrm{k} \mathrm{x}_{\mathrm{n}}\right]$. Find the remainder when $\mathrm{x}_{1998}$ is divided by 1998.
