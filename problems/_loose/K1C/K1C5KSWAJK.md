---
tag: K1C5KSWAJK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33767
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any finite number of independent integrable random variables $\xi_{1}, \ldots, \xi_{n}$, the equality

$$
\mathrm{E} \prod_{i=1}^{n} \xi_{i}=\prod_{i=1}^{n} \mathrm{E} \xi_{i} \cdot
$$

holds. Show that if $\xi_{1}, \xi_{2}, \ldots$ is a sequence of independent integrable random variables, then, in general,

$$
\mathrm{E} \prod_{i=1}^{\infty} \xi_{i} \neq \prod_{i=1}^{\infty} \mathrm{E} \xi_{i}
$$
