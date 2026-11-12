---
tag: K3F1F5BACW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $\eta$ be independent random variables taking values in $\mathbb{N}$. Suppose that either $\mathrm{E} \xi < \infty$ or $\mathrm{E} \eta < \infty$. Show that

$$
\mathrm{E}(\xi \wedge \eta)=\sum_{n=1}^{\infty} \mathrm{P}(\xi \geqslant n) \mathrm{P}(\eta \geqslant n)
$$
