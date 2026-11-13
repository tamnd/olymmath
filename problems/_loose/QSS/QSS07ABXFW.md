---
tag: QSS07ABXFW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c$ be positive real numbers satisfying

$$
\frac{a}{1+b+c}+\frac{b}{1+c+a}+\frac{c}{1+a+b} \geqslant \frac{a b}{1+a+b}+\frac{b c}{1+b+c}+\frac{c a}{1+c+a}
$$

Prove

$$
\frac{a^{2}+b^{2}+c^{2}}{a b+b c+c a}+a+b+c+2 \geqslant 2(\sqrt{a b}+\sqrt{b c}+\sqrt{c a})
$$

(Dimitar Trenevski)
