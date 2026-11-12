---
tag: R4RZZ7NTDP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33822
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}$ be i.i.d. random variables, $\mathrm{P}\left(\xi_{1}>0\right)=1$ and $\mathrm{D} \ln \xi_{1}=\sigma^{2}$. Show that for $\varepsilon>0$ the inequality

$$
\mathrm{P}\left(\xi_{1} \cdots \xi_{n} \leqslant\left(\mathrm{E} \xi_{1}\right)^{n} e^{n \varepsilon}\right) \geqslant 1-\frac{\sigma^{2}}{n \varepsilon^{2}}
$$

holds.
