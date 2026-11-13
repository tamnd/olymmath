---
tag: Q1V1F05SDX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88417
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Let $x_{1}, x_{2}, \ldots, x_{100}$ be real numbers such that

$$
\begin{aligned}
\left|2 x_{k}-x_{k+1}\right| & =x_{k+2} \text { for all } k \in\{1,2, \ldots, 98\} \\
\left|2 x_{99}-x_{100}\right| & =x_{1} \\
\left|2 x_{100}-x_{1}\right| & =x_{2}
\end{aligned}
$$

Prove that $x_{1}=x_{2}=\cdots=x_{100}$.
