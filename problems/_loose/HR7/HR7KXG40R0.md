---
tag: HR7KXG40R0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The lengths of the angle bisectors of $\alpha$ and $\beta$ in a triangle are:

$$
l_{\alpha}=\frac{1}{b+c} \sqrt{b c\left[(b+c)^{2}-a^{2}\right]}, l_{\beta}=\frac{1}{c+a} \sqrt{c a\left[(c+a)^{2}-b^{2}\right]}
$$

where $a, b, c$ are the sides of the triangle. Show that the triangle is isosceles if and only if $l_{\alpha}=l_{\beta}$.
