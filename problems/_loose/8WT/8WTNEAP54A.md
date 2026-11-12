---
tag: 8WTNEAP54A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ be a random variable, $\mathrm{P}(\xi>0)>0$ and $\mathrm{E}|\xi|^{p}<\infty$ for some $p>1$. Show that

$$
\mathrm{P}(\xi>0) \geqslant \frac{(\mathrm{E} \xi I(\xi>0))^{q}}{\|\xi I(\xi>0)\|_{p}^{q}}
$$

where $q=p /(p-1)$. From this, derive that if $\mathrm{E} \xi \geqslant 0$, then for any $\varepsilon \in(0,1)$ the following inequalities hold:

$$
\mathrm{P}(\xi>\varepsilon \mathrm{E} \xi) \geqslant \frac{(1-\varepsilon)^{2}(\mathbf{E} \xi)^{2}}{(1-\varepsilon)^{2}(\mathrm{E} \xi)^{2}+\mathrm{D} \xi} \text { and } \mathrm{P}(\xi>\varepsilon \mathrm{E} \xi) \geqslant(1-\varepsilon)^{q} \frac{(\mathrm{E} \xi)^{q}}{\|\xi\|_{p}^{q}}
$$

assuming the finiteness of the specified expectations.
