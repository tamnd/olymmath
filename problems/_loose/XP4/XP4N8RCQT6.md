---
tag: XP4N8RCQT6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\xi \wedge \eta$ is independent of $|\xi-\eta|$, and the density $f$ can be chosen to be positive and continuous on $\mathbb{R}_{+}$.

(b) Show that if $\xi$ and $\eta$ are independent exponentially distributed random variables with parameters $\lambda$ and $\mu$, and $\lambda \neq \mu$, then the density of the distribution of the sum $\xi+\eta$ is given by the formula

$$
f_{\xi+\eta}(z)= \begin{cases}\frac{\lambda \mu}{\mu-\lambda}\left(e^{-\lambda z}-e^{-\mu z}\right) & \text { if } z>0 \\ 0 & \text { otherwise }\end{cases}
$$
