---
tag: ZY6VTFAMJB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34030
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X, Y$ be independent random variables, $\mathrm{E} X^{2}, \mathrm{E} Y^{2}<\infty$. Show that for any such variable $Z$, that $\mathrm{E} Z^{2}<\infty$ and $\mathrm{E} Z=0$, the following inequality holds:

$$
\mathrm{E}|\mathrm{E}(Z \mid X)|^{2}+\mathrm{E}|\mathrm{E}(Z \mid Y)|^{2} \leqslant \mathrm{E} Z^{2}
$$
