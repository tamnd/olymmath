---
tag: TE160PRZCQ
kind: problem
type: answer
answer: "5050"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha=\pi x$.

$$
\begin{aligned}
& \cos (8 \alpha)+2 \cos (4 \alpha)-\cos (2 \alpha)+2 \sin (\alpha)+3=0 \Longleftrightarrow \\
& 2 \cos ^{2} 4 \alpha-1+2 \cos 4 \alpha-1+2 \sin ^{2} \alpha+2 \sin \alpha+3=0 \Longleftrightarrow \\
& 2\left(\cos 4 \alpha+\frac{1}{2}\right)^{2}+2\left(\sin \alpha+\frac{1}{2}\right)^{2}=0
\end{aligned}
$$

From which

$$
\left\{\begin{array} { l }
{ \operatorname { cos } 4 \alpha = - 1 / 2 } \\
{ \operatorname { sin } \alpha = - 1 / 2 }
\end{array} \Longleftrightarrow \left[\begin{array}{l}
\alpha=-\frac{\pi}{6}+2 \pi m, m \in \mathbb{Z} \\
\alpha=-\frac{5 \pi}{6}+2 \pi n, n \in \mathbb{Z}
\end{array}\right.\right.
$$

Thus $x=-1 / 6+2 m, x=-5 / 6+2 n, m, n \in \mathbb{Z}$. The sum of the first two positive roots: $1 \frac{1}{6}+1 \frac{5}{6}=3$. The next two positive roots are 4 greater, i.e., equal to 7, and so on. The desired sum is

$$
3+7+11+\cdots+(3+4 \cdot 49)=\frac{6+4 \cdot 49}{2} \cdot 50=5050
$$
