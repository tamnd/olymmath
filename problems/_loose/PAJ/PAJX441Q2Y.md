---
tag: PAJX441Q2Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that:

for all values of $k$, starting from 2,

$$
\sqrt{3 \cdot\left(\frac{1}{2}\right)^{2} \cdot \frac{3}{4} \cdot \frac{1}{2 k}} \leqslant w_{2 k}<\sqrt{3 \cdot\left(\frac{1}{2}\right)^{2} \cdot \frac{1}{2 k}}
$$

for all values of $k$, starting from 3,

$$
\sqrt{5 \cdot\left(\frac{1}{2} \cdot \frac{3}{4}\right)^{2} \cdot \frac{5}{6} \cdot \frac{1}{2 k}} \leqslant w_{2 k}<\sqrt{5 \cdot\left(\frac{1}{2} \cdot \frac{3}{4}\right)^{2} \cdot \frac{1}{2 k}}
$$

in general for all values of $k$, starting from $a$,

$$
\begin{aligned}
& \sqrt{(2 a-1) \cdot\left(\frac{1}{2} \cdot \frac{3}{4} \cdots \frac{2 a-3}{2 a-2}\right)^{2} \cdot \frac{2 a-1}{2 a} \cdot \frac{1}{2 k}} \leqslant \\
& \leqslant w_{2 k}<\sqrt{(2 a-1) \cdot\left(\frac{1}{2} \cdot \frac{3}{4} \cdots \frac{2 a-3}{2 a-2}\right)^{2} \cdot \frac{1}{2 k}}
\end{aligned}
$$
