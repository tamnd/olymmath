---
tag: SAFRKXZEFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187268
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1989
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
The function $\mathrm{f}$ on the positive integers satisfies $\mathrm{f}(1)=1, \mathrm{f}(2 \mathrm{n}+1)=\mathrm{f}(2 \mathrm{n})+1$ and $\mathrm{f}(2 \mathrm{n})=3$ $f(n)$. Find the set of all $m$ such that $m=f(n)$ for some $n$.
