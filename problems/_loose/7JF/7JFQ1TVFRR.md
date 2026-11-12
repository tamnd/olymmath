---
tag: 7JFQ1TVFRR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}$ be independent Bernoulli random variables,

$$
\mathrm{P}\left\{\xi_{i}=0\right\}=1-\lambda_{i} \Delta, \mathrm{P}\left\{\xi_{i}=1\right\}=\lambda_{i} \Delta
$$

where $\Delta$ is a small number, $\Delta>0, \lambda_{i}>0$. Show that

$$
\begin{aligned}
& \mathrm{P}\left\{\xi_{1}+\ldots+\xi_{n}=1\right\}=\left(\sum_{i=1}^{n} \lambda_{i}\right) \Delta+O\left(\Delta^{2}\right) \\
& \mathrm{P}\left\{\xi_{1}+\ldots+\xi_{n}>1\right\}=O\left(\Delta^{2}\right)
\end{aligned}
$$
