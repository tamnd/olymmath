---
tag: AB9QX30CP1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $\zeta$ be non-negative random variables such that for any $x>0$ the inequality

$$
\mathrm{P}(\xi \geqslant x) \leqslant x^{-1} \mathrm{E} \zeta I(\xi \geqslant x)
$$

holds. Show that then for any $p>1$ the inequality

$$
\mathrm{E} \xi^{p} \leqslant\left(\frac{p}{p-1}\right)^{p} \mathrm{E} \zeta^{p}
$$

holds.
