---
tag: R1AHDV0DEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5686
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $b>0$ and $q>0$ be the first term and the common ratio of the progression, respectively. Note that the case $q=1$ does not work. If $b>0$ and $q>0$ (with $q \neq 1$), then from the problem statement we have

$$
b \frac{q^{6}-1}{q-1}=344 \cdot b \frac{q^{3}-1}{q-1} \Leftrightarrow\left\{\begin{array}{l}
q^{6}-344 q^{3}+343=0, \\
q \neq 1
\end{array} \Leftrightarrow q^{3}=343\right.
$$

from which we obtain $q=7$.
