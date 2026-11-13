---
tag: SZ9Y0VN1CZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118319
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a, b, c, d \in \mathbf{R}^{+}, n \geqslant 9, n \in \mathbf{N}$. Prove:
$$
a^{n}+b^{n}+c^{n}+d^{n} \geqslant a^{n-9} b^{4} c^{3} d^{2}+b^{n-9} c^{4} d^{3} a^{2}+c^{n-9} d^{4} a^{3} b^{2}+d^{n-9} a^{4} b^{3} c^{2} .
$$
, b_{0}=b^{n}, c_{0}=c^{n}, d_{0}=d^{n}$. Since $f(x)=\lg x$ is a continuous convex function on $(0,+\infty)$ and $\frac{n-9}{n}+$ $\frac{4}{n}+\frac{3}{n}+\frac{2}{n}=1$
By the generalized Jensen's inequality: $\frac{n-9}{n} \lg a_{0}+\frac{4}{n} \lg b_{0}+\frac{3}{n} \lg c_{0}+\frac{2}{n} \lg d_{0} \leqslant \lg \left(\frac{n-9}{n} a_{0}+\frac{4}{n} b_{0}+\frac{3}{n} c_{0}+\frac{2}{n} d_{0}\right)$, i.e.,
$$
a_{0} \frac{n-9}{n} \cdot b_{0} \frac{4}{n} \cdot c_{0} \frac{3}{n} \cdot d_{0} \frac{2}{n} \leqslant \frac{n-9}{n} a_{0}+\frac{4}{n} b_{0}+\frac{3}{n} c_{0}+\frac{2}{n} d_{0} \text {. }
$$

Similarly:
$$
\begin{array}{l}
a_{0} \frac{4}{n} \cdot b_{0} \frac{3}{n} \cdot c_{0} \frac{2}{n} \cdot d_{0} \frac{n-9}{n} \leqslant \frac{4}{n} a_{0}+\frac{3}{n} b_{0}+\frac{2}{n} c_{0}+\frac{n-9}{n} d_{0} . \\
a_{0} \frac{3}{n} \cdot b_{0} \frac{2}{n} \cdot c_{0} \frac{n-9}{n} \cdot d_{0} \frac{4}{n} \leqslant \frac{3}{n} a_{0}+\frac{2}{n} b_{0}+\frac{n-9}{n} c_{0}+\frac{4}{n} d_{0} . \\
a_{0} \frac{2}{n} \cdot b_{0} \frac{n-9}{n} \cdot c_{0} \frac{4}{n} \cdot d_{0} \frac{3}{n} \leqslant \frac{2}{n} a_{0}+\frac{n-9}{n} b_{0}+\frac{4}{n} c_{0}+\frac{3}{n} d_{0} .
\end{array}
$$

Adding the left and right sides of the above 4 inequalities respectively, we get the desired result.
