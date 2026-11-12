---
tag: TGHD1WXWZQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots \xi_{n}, n \geqslant 2,$ be independent random variables distributed according to $\mathscr{N}\left(a, \sigma^{2}\right)$. Show that the quantities

$$
\bar{\xi}=\frac{1}{n} \sum_{i=1}^{n} \xi_{i}, s_{1}^{2}=\frac{1}{n-1} \sum_{i=1}^{n}\left(\xi_{i}-\bar{\xi}\right)^{2}
$$

are independent, and that

$$
\bar{\xi} \sim \mathscr{N}\left(a, \frac{\sigma^{2}}{n}\right), \frac{(n-1) s_{1}^{2}}{\sigma^{2}} \sim \chi_{n-1}^{2}
$$
