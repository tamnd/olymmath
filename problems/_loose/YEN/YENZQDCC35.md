---
tag: YENZQDCC35
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29542
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that for any real numbers $a_{1}, a_{2}, \ldots, a_{n} ; b_{1}, b_{2}, \ldots, b_{n}$, the following inequality always holds:

$$
\begin{aligned}
\sqrt{a_{1}^{2}+b_{1}^{2}} & +\sqrt{a_{2}^{2}+b_{2}^{2}}+\ldots+\sqrt{a_{n}^{2}+b_{n}^{2}} \geqslant \\
& \geqslant \sqrt{\left(a_{1}+a_{2}+\ldots+a_{n}\right)^{2}+\left(b_{1}+b_{2}+\ldots+b_{n}\right)^{2}}
\end{aligned}
$$

Under what conditions does equality hold?
b) A pyramid is called a right pyramid if a circle can be inscribed in its base and the center of this circle coincides with the base of the pyramid's height. Prove that a right pyramid has a smaller lateral surface area than any other pyramid of the same height, whose base has the same area and the same perimeter.

Note. The inequality in part a) is a special case of the so-called Minkowski inequality, which states that

$$
\begin{array}{r}
\sqrt{a_{1}^{2}+b_{1}^{2}+\ldots+l_{1}^{2}}+\sqrt{a_{2}^{2}+b_{2}^{2}+\ldots+l_{2}^{2}}+\ldots \\
\ldots+\sqrt{a_{n}^{2}+b_{n}^{2}+\ldots+l_{n}^{2}} \geqslant \\
>\sqrt{\left(a_{1}+\ldots+a_{n}\right)^{2}+\left(b_{1}+\ldots+b_{n}\right)^{2}+\ldots+\left(l_{1}+\ldots+l_{n}\right)^{2}}
\end{array}
$$
