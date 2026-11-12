---
tag: KMT52J9T5Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The following cases are possible.

Case 1. $\cos x=1, x=2 \pi k, k \in Z, \cos x y=1$

$$
\cos (x / 2)=\cos (\pi k)=(-1)^{k}
$$

Case 1.a $k=2 m, x=4 \pi m$

$$
15 y^{2}-y-6=0 \rightarrow\left\{\begin{array}{c}
y_{1}=2 / 3 \\
y_{2}=-3 / 5
\end{array}\right.
$$

For $y=2 / 3$

$$
\begin{aligned}
& \cos \left(\frac{2 x}{3}\right)=\cos \left(\frac{8 \pi m}{3}\right)=1 \rightarrow \frac{8 \pi m}{3}=2 \pi s \rightarrow \\
& \rightarrow 4 m=3 s \rightarrow\left\{\begin{array}{l}
m=3 t \\
s=4 t
\end{array}, t \in Z\right.
\end{aligned}
$$

Then we get the first series of solutions $\left\{\begin{array}{l}x=12 \pi t \\ y=2 / 3\end{array}\right.$. For $y=-3 / 5$

$$
\begin{aligned}
& \cos \left(-\frac{3 x}{5}\right)=\cos \left(\frac{12 \pi m}{5}\right)=1 \rightarrow \frac{12 \pi m}{5}=2 \pi s \rightarrow \\
& \rightarrow 6 m=5 s \rightarrow\left\{\begin{array}{l}
m=5 t \\
s=6 t
\end{array}, t \in Z\right.
\end{aligned}
$$

Then we get the second series of solutions $\left\{\begin{array}{l}x=20 \pi t \\ y=-3 / 5\end{array}\right.$.

Case $1 . b \mathrm{k}=2 m+1, x=2 \pi(2 m+1)$

$$
15 y^{2}+y-6=0 \rightarrow\left\{\begin{array}{c}
y_{3}=-2 / 3 \\
y_{4}=3 / 5
\end{array}\right.
$$

For $y=-2 / 3$

$$
\begin{aligned}
& \cos \left(-\frac{2 x}{3}\right)=\cos \left(\frac{4 \pi(2 m+1)}{3}\right)=1 \rightarrow \frac{4 \pi(2 m+1)}{3}=2 \pi s \rightarrow \\
& \rightarrow 4 m-3 s=-2 \rightarrow \rightarrow\left\{\begin{array}{l}
m=3 t-2 \\
s=4 t-2
\end{array}, t \in Z\right.
\end{aligned}
$$

Then we get the third series of solutions $\left\{\begin{array}{c}x=6 \pi(2 t-1) \\ y=-2 / 3\end{array}\right.$.

For $ y=3 / 5$

$$
\begin{aligned}
\cos \left(\frac{3 x}{5}\right)= & \cos \left(\frac{6 \pi(2 m+1)}{5}\right)=1 \rightarrow \frac{6 \pi(2 m+1)}{5}=2 \pi s \rightarrow \\
& \rightarrow 6 m-5 s=-3 \rightarrow\left\{\begin{array}{l}
m=5 t-3 \\
s=6 t-3
\end{array}, t \in Z\right.
\end{aligned}
$$

Then we get the fourth series of solutions $\left\{\begin{array}{c}x=10 \pi(2 t-1) \\ y=3 / 5\end{array}\right.$.

Case 2. $\cos x=-1, \cos x y=-1, x=\pi(2 k+1)$ $x y=\pi(2 m+1), x=\pi(2 k+1) \rightarrow y=\frac{2 m+1}{2 k+1}$ - a rational number. $\cos \left(\frac{x}{2}\right)=\cos \left(\frac{\pi}{2}(2 k+1)\right)=0, \forall k \in Z \rightarrow 15 y^{2}=6 \rightarrow y=\frac{\sqrt{2}}{\sqrt{3}}-$ an irrational number. Case 2 has no solutions.
