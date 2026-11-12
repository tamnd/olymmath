---
tag: TV11H6VAWA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ be an integer-valued random variable and $\varphi_{\xi}(t)$ its characteristic function. Show that

$$
\mathrm{P}(\xi=n)=\frac{1}{2 \pi} \int_{-\pi}^{\pi} e^{-i n t} \varphi_{\xi}(t) d t, k \in \mathbb{Z}
$$
