---
tag: 24CX9WWYQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33521
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}$ be independent random variables and

$$
\xi_{\min }=\min \left(\xi_{1}, \ldots, \xi_{n}\right), \xi_{\max }=\max \left(\xi_{1}, \ldots, \xi_{n}\right)
$$[^3]

Show that

$$
\mathrm{P}\left\{\xi_{\text {min }} \geqslant x\right\}=\prod_{i=1}^{n} \mathrm{P}\left\{\xi_{i} \geqslant x\right\}, \mathrm{P}\left\{\xi_{\max }<x\right\}=\prod_{i=1}^{n} \mathrm{P}\left\{\xi_{i}<x\right\}
$$
