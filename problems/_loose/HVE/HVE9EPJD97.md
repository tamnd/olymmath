---
tag: HVE9EPJD97
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130620
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c$ be the side lengths of $\triangle ABC$, and $S$ be the area of $\triangle ABC$. Then
$$
\begin{array}{l}
a^{2}+b^{2}+c^{2} \geqslant 4 \sqrt{\frac{a^{2}}{b^{2}}+\frac{b^{2}}{c^{2}}+\frac{c^{2}}{a^{2}}} S, \\
(a+b+c)^{2} \geqslant 4 \sqrt{3}\left(\frac{a}{b}+\frac{b}{c}+\frac{c}{a}\right) S, \\
a b+b c+c a \geqslant 4 \sqrt{\frac{a}{b}+\frac{b}{c}+\frac{c}{a}} S, \\
a^{2}+b^{2}+c^{2} \geqslant 8 \sqrt{\cos ^{2} A+\cos ^{2} B+\cos ^{2} C} S .
\end{array}
$$

In [1], inequalities (1) and (3) are given as corollaries, inequality (4) is given without proof at the end of the paper. [2] proposes inequality (1) as a conjecture, [3]~[5] provide proofs for inequality (1), [6]~[8] provide generalizations of inequality (1), and [7] also gives inequality (3). [9] provides three proofs for inequality (4). This paper provides alternative proofs for the above propositions.
Let "$\sum$" denote the cyclic sum.
