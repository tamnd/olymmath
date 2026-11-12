---
tag: 3G1HCK9NPR
kind: problem
type: answer
answer: '{\begin{pmatrix}=15k,k\inN;\\\\arccos\frac{3}{5}+\frac{\pin}{2},n\inZ0\end{pmatrix}.}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$5|\cos 2 x|$ from natural values can only take the values $1,2,3,4,5$. Since

$\text{GCD}(5|\cos 2 x|, a|\sin 2 x|)=3$

then $5|\cos 2 x|=3$, i.e.

$|\cos 2 x|=3 / 5 \Rightarrow|\sin 2 x|=4 / 5$ and $x= \pm \frac{1}{2} \arccos \frac{3}{5}+\frac{\pi n}{2}, n \in Z$.

For the parameter $a$ we get the equation

$$
\text{GCD}(3,4 a / 5)=3,
$$

which is equivalent to $a$ being a multiple of 15.
