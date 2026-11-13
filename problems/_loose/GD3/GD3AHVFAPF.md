---
tag: GD3AHVFAPF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10872
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1991
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
Let $p(m, n)$ be the polynomial $2 m^{2}-6 m n+5 n^{2}$. The range of $p$ is the set of all integers $k$ such that $\mathrm{k}=\mathrm{p}(\mathrm{m}, \mathrm{n})$ for some integers $\mathrm{m}$, $\mathrm{n}$. Find which members of $\{1,2, \ldots, 100\}$ are in the range of $p$. Show that if $h$ and $k$ are in the range of $p$, then so is $h k$.
