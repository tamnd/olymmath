---
tag: XJB8DYDPEH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f=f(x)$ be a convex function. Show that for any integrable quantity $\xi$, any $\sigma$-subalgebra $\mathscr{G} \subset \mathscr{F}$, and all $c>0$, the following inequality holds:

$$
\mathrm{E} f(\zeta) I(f(\zeta)>c) \leqslant \mathrm{E} 2 f(\xi) I(2 f(\xi)>c)
$$

where $\zeta=\mathrm{E}(\xi \mid \mathscr{G})$.
