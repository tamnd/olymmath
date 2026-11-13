---
tag: DH99AV0VK9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=147298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Set $S$ is a set of $n$ points on a plane, and the distance between any two points in $S$ is at least one unit. Prove: there exists a subset $T$ of $S$, $T$ contains at least $\frac{n}{7}$ points, and the distance between any two points in $T$ is at least $\sqrt{3}$ units.
To prove the original problem, we first provide the following lemma.
Lemma: In $\triangle A B C$, if $1 \leqslant c \leqslant b \leqslant \sqrt{3}, 1 \leqslant a \leqslant \sqrt{3}$, then the minimum value of $\angle A$ is $30^{\circ}$.
Proof of the lemma: By the cosine rule, we have
$$
\begin{array}{l}
\cos A=\frac{b^{2}+c^{2}-a^{2}}{2 b c} \leqslant \\
\frac{b^{2}+c^{2}-1}{2 b c}=\frac{1}{2 c}\left(b+\frac{c^{2}}{b}-\frac{1}{b}\right)=f(b) .
\end{array}
$$

Since $f^{\prime}(b)=\frac{1}{2 c}\left(1-\frac{c^{2}}{b^{2}}+\frac{1}{b^{2}}\right) \geqslant 0$, we have
$$
\begin{array}{r}
f(b) \leqslant f(\sqrt{3})=\frac{c^{2}+2}{2 \sqrt{3} c}=\frac{1}{2 \sqrt{3}}\left(c+\frac{2}{c}\right) \leqslant \\
\frac{1}{2 \sqrt{3}} \max \left\{1+2, \sqrt{3}+\frac{2}{\sqrt{3}}\right\}=\frac{1}{2 \sqrt{3}} \times 3=\frac{\sqrt{3}}{2}=
\end{array}
$$
$\cos 30^{\circ}$.
Therefore, $\angle A \geqslant 30^{\circ}$.
