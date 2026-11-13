---
tag: QK5MMSEJ1E
kind: problem
type: answer
answer: \frac{2^{2}\times5\times11}{3^{10}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that the six vertices of a centrally symmetric hexagon in the complex plane form the complex number set
$$
V=\left\{ \pm \sqrt{2} \mathrm{i}, \frac{ \pm 1+\mathrm{i}}{\sqrt{8}}, \frac{ \pm 1-\mathrm{i}}{\sqrt{8}}\right\} .
$$

For each $j(1 \leqslant j \leqslant 12), z_{j}$ is an element randomly selected from the set $V$, and the selections are independent. Let $P=\prod_{j=1}^{12} z_{j}$, then the probability that $P=-1$ is ( ).
(A) $\frac{5 \times 11}{3^{10}}$
(B) $\frac{5^{2} \times 11}{2 \times 3^{10}}$
(C) $\frac{5 \times 11}{3^{9}}$
(D) $\frac{5 \times 7 \times 11}{2 \times 3^{10}}$
(E) $\frac{2^{2} \times 5 \times 11}{3^{10}}$
