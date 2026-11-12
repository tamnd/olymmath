---
tag: QVRFMFBNGJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $\eta$ be two random variables, $\mathrm{E} \xi=\mathrm{E} \eta=0, \mathrm{D} \xi=\mathrm{D} \eta=1$ with correlation coefficient $\rho=\rho(\xi, \eta)$. Show that

$$
\mathrm{E} \max \left(\xi^{2}, \eta^{2}\right) \leqslant 1+\sqrt{1-\rho^{2}}
$$
