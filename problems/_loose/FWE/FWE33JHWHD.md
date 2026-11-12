---
tag: FWE33JHWHD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33585
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if $\xi=\left(\xi_{k}, \mathscr{D}_{k}\right)_{1 \leqslant k \leqslant n}$ is a martingale and $\tau$ is a stopping time, then for any $k \leqslant n$ the following equality holds:

$$
\mathrm{E} \xi_{n} I(\tau=k)=\mathrm{E} \xi_{k} I(\tau=k)
$$
