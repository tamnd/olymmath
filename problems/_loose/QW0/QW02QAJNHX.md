---
tag: QW02QAJNHX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90620
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a rational number greater than 1 (correction by Fengning Ding). Prove that there exist positive integers $a, b, c$ satisfying the equations

$$
\begin{aligned}
a^{2}+b^{2} & =c^{2} \\
\frac{a+c}{b} & =k .
\end{aligned}
$$
