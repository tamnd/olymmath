---
tag: GJ5T0QZRGT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let real angles $\theta_1, \theta_2, \theta_3, \theta_4$ satisfy
\begin{align*}
\sin\theta_1+\sin\theta_2+\sin\theta_3+\sin\theta_4 &= 0, \\
\cos\theta_1+\cos\theta_2+\cos\theta_3+\cos\theta_4 &= 0.
\end{align*}
If the maximum possible value of the sum $$\sum_{i<j}\sqrt{1-\sin\theta_i\sin\theta_j-\cos\theta_i\cos\theta_j}$$ for $i, j \in \{1, 2, 3, 4\}$ can be expressed as $a+b\sqrt{c}$, where $c$ is square-free and $a,b,c$ are positive integers, find $a+b+c$

*Proposed by Alex Li*
