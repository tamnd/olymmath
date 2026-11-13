---
tag: E9V32A3HGV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c$ be non-negative real numbers, prove:
$$
\begin{aligned}
\frac{1}{3}\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\right] & \leq a^{2}+b^{2}+c^{2}-3 \sqrt[3]{3 a^{2} b^{2} c^{2}} \\
& \leq(a-b)^{2}+(b-c)^{2}+(c-a)^{2} .
\end{aligned}
$$
(2005, 18th Irish Mathematical Olympiad) It can be strengthened to:
$$
\begin{aligned}
\frac{1}{2}\left[(a-b)^{2}+(b-c)^{2}+(c-a)^{2}\right] & \leq a^{2}+b^{2}+c^{2}-3 \sqrt[3]{3 a^{2} b^{2} c^{2}} \\
& \leq(a-b)^{2}+(b-c)^{2}+(c-a)^{2}
\end{aligned}
$$
