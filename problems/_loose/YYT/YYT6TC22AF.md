---
tag: YYT6TC22AF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{0}, \xi_{1}, \xi_{2}, \ldots$ be i.i.d. random variables, $\xi_{1} \sim \mathscr{N}(0,1)$. Show that the series

$$
B_{t}^{\circ}=\sum_{n=1}^{\infty} \xi_{n} \frac{\sqrt{2} \sin n \pi t}{n \pi}, 0 \leqslant t \leqslant 1
$$

indeed defines a Brownian bridge, and the series

$$
B_{t}=\xi_{0} t+\sum_{n=1}^{\infty} \xi_{n} \frac{\sqrt{2} \sin n \pi t}{n \pi}, 0 \leqslant t \leqslant 1
$$

as well as the series

$$
W_{t}=\sqrt{2} \sum_{n=1}^{\infty} \xi_{n} \frac{1-\cos n \pi t}{n \pi}, 0 \leqslant t \leqslant 1,
$$

defines Brownian motion.
