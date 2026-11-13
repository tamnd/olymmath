---
tag: E43KR1M5BH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $O, P_{1}, P_{2}, \cdots, P_{n+1}(n>2)$ are points on the circle $\Gamma$, and $O P_{2}, O P_{3}, \cdots, O P_{n}$ are the $n$ angle bisectors of $\angle P_{1} O P_{n+1}$. Prove:
$P_{1} P_{n+1}$ is a diameter
$$
\begin{aligned}
\Leftrightarrow & \left(O P_{2}+O P_{n}\right)-\left(O P_{1}+O P_{n+1}\right) \\
& =4\left(\sin ^{2} \frac{\pi}{4 n}\right)\left(\sum_{i=2}^{n} O P_{i}\right) .
\end{aligned}
$$
