---
tag: D8QW53DEAA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \ldots$ be a sequence of independent identically distributed random variables, $\mathscr{F}_{n}=\sigma\left(\xi_{1}, \ldots, \xi_{n}\right), n \geqslant 1$, and $\tau-$ a stopping time with respect to $\left(\mathscr{F}_{n}\right)_{n \geqslant 1}$. Define

$$
\eta_{n}(\omega)=\xi_{n+\tau(\omega)}(\omega)
$$

Show that the sequence $\eta=\left(\eta_{1}, \eta_{2}, \ldots\right)$ has the same distribution as the sequence $\xi=\left(\xi_{1}, \xi_{2}, \ldots\right)$.
