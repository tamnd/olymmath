---
tag: Q5ZDBFPBE7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X=\left(X_{t}\right)_{t \in \mathbb{R}}$ be an Ornstein-Uhlenbeck process. Verify that the process

$$
B_{t}^{\circ}= \begin{cases}\sqrt{t(1-t)} X_{\frac{1}{2}} \ln \frac{t}{1-t}, & 0<t<1 \\ 0, & t=0,1\end{cases}
$$

is a Brownian bridge.
