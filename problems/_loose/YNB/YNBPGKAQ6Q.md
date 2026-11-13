---
tag: YNBPGKAQ6Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107777
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive real numbers $a, b, c, d$, prove:
$$
\frac{a^{3}+b^{3}+c^{3}}{a+b+c}+\frac{b^{3}+c^{3}+d^{3}}{b+c+d}+\frac{c^{3}+d^{3}+a^{3}}{c+d+a}+\frac{d^{3}+a^{3}+b^{3}}{d+a+b} \geq a^{2}+b^{2}+c^{2}+d^{2} .
$$
(USA College Mathematics Competition)
Reference [2] strengthens the above inequality to:
$$
\begin{aligned}
& \frac{a^{3}+b^{3}+c^{3}}{a+b+c}+\frac{b^{3}+c^{3}+d^{3}}{b+c+d}+\frac{c^{3}+d^{3}+a^{3}}{c+d+a}+\frac{d^{3}+a^{3}+b^{3}}{d+a+b} \geq a^{2}+b^{2}+c^{2}+d^{2} \\
+ & \frac{2}{9}\left[(a-b)^{2}+(a-c)^{2}+(a-d)^{2}+(b-c)^{2}+(b-d)^{2}+(c-d)^{2}\right] .
\end{aligned}
$$

Below, we further strengthen (2) to:
$$
\begin{array}{r}
\frac{a^{3}+b^{3}+c^{3}}{a+b+c}+\frac{b^{3}+c^{3}+d^{3}}{b+c+d}+\frac{c^{3}+d^{3}+a^{3}}{c+d+a}+\frac{d^{3}+a^{3}+b^{3}}{d+a+b} \geq a^{2}+b^{2}+c^{2}+d^{2} \\
+\frac{1}{3}\left[(a-b)^{2}+(a-c)^{2}+(a-d)^{2}+(b-c)^{2}+(b-d)^{2}+(c-d)^{2}\right] .
\end{array}
$$

Lemma [3]: Let $x, y, z$ be non-negative numbers, then $2 \sum x\left(\sum x^{2}\right)+9 x y z \geq\left(\sum x\right)^{3}$.
