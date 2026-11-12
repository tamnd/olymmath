---
tag: HKDTSJZKE3
kind: problem
type: answer
answer: \frac{e^{-\sqrt{2}u}}{\sqrt{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $\xi \sim \mathscr{N}(0, v), v>0$, then

$$
\mathrm{E} e^{-\xi}=\int_{-\infty}^{\infty} e^{-u} \frac{e^{-\frac{u^{2}}{2 v}}}{\sqrt{2 \pi v}} d u=e^{\frac{v}{2}}
$$

Compute the integral $(u>0)$

$$
\int_{0}^{\infty} e^{-v} \frac{e^{-\frac{u^{2}}{2 v}}}{\sqrt{2 \pi v}} d v
$$
