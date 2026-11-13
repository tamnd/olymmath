---
tag: 9DC9HBA86A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c \in \mathbf{R}^{+}$, and $a b c=1, k \geqslant 3$. Prove: $\sum \frac{1}{a^{k}(b+c)} \geqslant \frac{3}{2}$.
5. Left side $=\sum \frac{1}{a^{k-1}(a b+a c)}=\sum \frac{\left(\frac{1}{a}\right)^{k-1}}{\frac{1}{b}+\frac{1}{c}}$. Let $\frac{1}{a}=x, \frac{1}{b}=y, \frac{1}{c}=z$. Then $x y z=1$.
Left side $=\sum \frac{x^{k-1}}{y+z} \geqslant \frac{\left(\sum x^{\frac{k-1}{2}}\right)^{2}}{2 \sum x}$. Also, $\frac{k-1}{2} \geqslant 1$, by Jensen's inequality:
Left side $\geqslant \frac{\left[3\left(\frac{\sum x}{3}\right)^{\frac{k-1}{2}}\right]^{2}}{2 \sum x}=\frac{3^{k-1}\left(\sum x\right)^{k-2}}{2} \geqslant \frac{3^{3-k}(3 \sqrt[3]{x y z})^{k-2}}{2}=\frac{3}{2}$.
