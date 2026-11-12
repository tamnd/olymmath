---
tag: CB4FNK33C7
kind: problem
type: answer
answer: \frac{C}{n\varepsilon^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33531
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}$ be a sequence of independent random variables, $\mathrm{D} \xi_{i} \leqslant C$. Show that then

$$
\mathrm{P}\left\{\left|\frac{\xi_{1}+\ldots+\xi_{n}}{n}-\frac{\mathrm{E}\left(\xi_{1}+\ldots+\xi_{n}\right)}{n}\right| \geqslant \varepsilon\right\} \leqslant \frac{C}{n \varepsilon^{2}}
$$
