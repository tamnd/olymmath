---
tag: P8AXNSWA91
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33532
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}$ be independent Bernoulli random variables, $\mathrm{P}\left\{\xi_{i}=1\right\}=p>0, \mathrm{P}\left\{\xi_{i}=-1\right\}=1-p$. Show that the following Bernstein's inequality holds: there exists $a>0$ such that

$$
\mathrm{P}\left\{\left|\frac{S_{n}}{n}-(2 p-1)\right| \geqslant \varepsilon\right\} \leqslant 2 e^{-a \varepsilon^{2} n}
$$

where $S_{n}=\xi_{1}+\ldots+\xi_{n}$ and $\varepsilon>0$.
