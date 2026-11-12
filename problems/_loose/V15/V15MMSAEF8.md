---
tag: V15MMSAEF8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $u(x)$ and $v(x)$ have $n$ continuous derivatives on a finite interval, then the following formula holds:

$$
\begin{aligned}
\int_{a}^{b} u v^{(n)} d x & =\left(u v^{(n-1)}-u^{\prime} v^{(n-2)}+\ldots\right. \\
\left.\ldots+(-1)^{(n-1)} u^{(n-1)} v\right) & \left.\right|_{a} ^{b}-\int_{a}^{b} u^{(n)} v d x
\end{aligned}
$$
