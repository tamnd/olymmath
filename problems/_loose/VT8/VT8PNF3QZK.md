---
tag: VT8PNF3QZK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33597
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{0}, \xi_{1}, \ldots, \xi_{N}$ be a Bernoulli sequence of independent random variables, $\mathrm{P}\left\{\xi_{i}=1\right\}=\mathrm{P}\left\{\xi_{i}=-1\right\}=1 / 2$. Define the quantities $\eta_{0}, \eta_{1}, \ldots, \eta_{N}$ by setting $\eta_{0}=\xi_{0}, \eta_{n}=\frac{\xi_{n-1}+\xi_{n}}{2}, 1 \leqslant n \leqslant N$.

(a) Will this sequence $\eta_{0}, \eta_{1}, \ldots, \eta_{N}$ be a Markov sequence?

(b) Will the sequence $\zeta_{0}, \zeta_{1}, \ldots, \zeta_{N}$, where $\zeta_{0}=\xi_{0}, \zeta_{n}=\xi_{n-1} \xi_{n}, 1 \leqslant n \leqslant N$, be a Markov sequence?
