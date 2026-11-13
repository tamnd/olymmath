---
tag: XB9BF5QE4N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
4.2.8 ** Given $\alpha, \beta, \gamma \geqslant 0$, and $\alpha \beta+\beta \gamma+\gamma \alpha+2 \alpha \beta \gamma=1$, prove: $\alpha+\beta+\gamma \geqslant \frac{3}{2}$. Proof Let $x=\alpha+\beta+\gamma$, then
$$
1=\alpha \beta+\beta \gamma+\gamma \alpha+2 \alpha \beta \gamma \leqslant \frac{1}{3}(\alpha+\beta+\gamma)^{2}+2 \cdot\left(\frac{\alpha+\beta+\gamma}{3}\right)^{3},
$$

i.e., $27 \leqslant 9 x^{2}+2 x^{3},(2 x-3)(x+3)^{2} \geqslant 0$, since $(x+3)^{2}>0$, thus $2 x-3 \geqslant 0$, i.e.,
$$
x=\alpha+\beta+\gamma \geqslant \frac{3}{2} .
$$
