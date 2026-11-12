---
tag: QNR5Q0Z0GQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34023
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X, Y, Z$ be complex-valued random variables with finite second moments, and $\mathrm{E}|Z|^{2}=1$. Prove the following variant of Blatter's inequality (see [38]):

$$
\left|(X, Z)(Z, Y)-\frac{(X, Y)}{2}\right| \leqslant \frac{\|X\|\|Y\|}{2}
$$

Derive from this Brudzynski's inequality

$$
|(X, Y)|^{2} \leqslant \frac{\mathrm{E} Y^{2}}{2}\left(\mathrm{E}|X|^{2}+\left|\mathrm{E} X^{2}\right|\right)
$$

valid for $\mathrm{P}(Y \in \mathbb{R})=1$.
