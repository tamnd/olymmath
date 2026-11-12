---
tag: NCW9MY88VH
kind: problem
type: answer
answer: \int_{0}^{2\pi}\frac{\varphi}{1+\alpha^{2}-2\alpha\cos\varphi}=\frac{2\pi}{1-\alpha^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\frac{1}{2 \pi i} \int_{L} \frac{d z}{(z-\alpha)\left(z-\frac{1}{a}\right)}
$$

over the contour $ L=\{z \in \overline{S} \mid z \mid=1\} $, prove that for $\alpha \in (0,1)$ the following equality holds:

$$
\int_{0}^{2 \pi} \frac{d \varphi}{1+\alpha^{2}-2 \alpha \cos \varphi}=\frac{2 \pi}{1-\alpha^{2}}
$$
