---
tag: JJ82S9DZRH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34022
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi, \xi_{1}, \xi_{2}, \ldots, \xi_{n}$ be complex-valued random variables with finite second moments. Prove Selberg's inequality

$$
\sum_{i=1}^{n} \frac{\left|\left(\xi, \xi_{i}\right)\right|^{2}}{\sum_{j=1}^{n}\left|\left(\xi_{i}, \xi_{j}\right)\right|} \leqslant \mathrm{E}|\xi|^{2}
$$

from which, in particular, Bessel's inequality

$$
\sum_{i=1}^{n} \frac{\left|\left(\xi, \xi_{i}\right)\right|^{2}}{\mathrm{E}\left|\xi_{i}\right|^{2}} \leqslant \mathrm{E}|\xi|^{2}
$$

follows, which is valid for orthogonal random variables $\xi_{1}, \ldots, \xi_{n}$.
