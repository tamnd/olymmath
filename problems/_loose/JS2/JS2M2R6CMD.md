---
tag: JS2M2R6CMD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33780
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if $\xi$ is an integrable random variable, then

$$
\mathrm{E} \xi=\int_{0}^{\infty} \mathrm{P}(\xi>x) d x-\int_{-\infty}^{0} \mathrm{P}(\xi>x) d x
$$

and if $\xi \geqslant 0$, then

$$
\mathrm{E} \xi=\int_{0}^{\infty} \mathrm{P}(\xi>x) d x
$$

and for $a>0$ the equality holds

$$
\mathrm{E}[\xi I(\xi>a)]=\int_{a}^{\infty} \mathrm{P}(\xi>x) d x+a \mathrm{P}(\xi>a)
$$

and if $\xi \geqslant 0$, then

$$
\mathrm{E}[\xi I(\xi \leqslant a)]=\int_{0}^{a} \mathrm{P}(x<\xi \leqslant a) d x
$$
