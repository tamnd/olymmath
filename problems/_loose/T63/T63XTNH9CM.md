---
tag: T63XTNH9CM
kind: problem
type: answer
answer: -\frac{\pi}{8}+\frac{\pin}{2},n\inZ
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two points $A(x ; y)$ and $B\left(x^{\prime} ; y^{\prime}\right)$ are symmetric with respect to the line $x+y=0$ if $x^{\prime}=-y, y^{\prime}=-x$. This leads to the system:

$$
\left\{\begin{array}{l}
\sin a=-\cos 3 a \\
\sin 3 a=-\cos a
\end{array}\right.
$$

Let's solve the first equation of the system:

$$
\begin{aligned}
& \sin a=-\cos 3 a \rightarrow \cos 3 a=\sin (-a)=\cos \left(\frac{\pi}{2}+a\right) \rightarrow \\
& {\left[\begin{array} { c }
{ 3 a = \frac { \pi } { 2 } + a + 2 \pi m } \\
{ 3 a = - \frac { \pi } { 2 } - a + 2 \pi n }
\end{array} \rightarrow \left[\begin{array}{c}
a=\frac{\pi}{4}+\pi m(*) \\
a=-\frac{\pi}{8}+\frac{\pi n}{2}(* *)
\end{array}\right.\right.}
\end{aligned}
$$

Substitute ( $*$ ) into the second equation of the system:

$$
\begin{aligned}
& \sin \left(\frac{3 \pi}{4}+3 \pi m\right)=-\cos \left(\frac{\pi}{4}+\pi m\right) \rightarrow \\
& (-1)^{m} \sin \frac{3 \pi}{4}=-(-1)^{m} \cos \frac{\pi}{4} \rightarrow \frac{\sqrt{2}}{2} \neq-\frac{\sqrt{2}}{2}
\end{aligned}
$$

The series $(*)$ does not contain solutions.

Substitute (**) into the second equation of the system:

$$
\begin{aligned}
& \sin \left(-\frac{3 \pi}{8}+\frac{3 \pi n}{2}\right)=-\cos \left(-\frac{\pi}{8}+\frac{\pi n}{2}\right) \rightarrow \\
& \sin \left(\frac{3 \pi}{8}-\frac{3 \pi n}{2}\right)=\sin \left(\frac{5 \pi}{8}-\frac{\pi n}{2}\right)
\end{aligned}
$$

$$
\left[\begin{array} { l }
{ \frac { 3 \pi } { 8 } - \frac { 3 \pi n } { 2 } = \frac { 5 \pi } { 8 } - \frac { \pi n } { 2 } + 2 \pi s } \\
{ \frac { 3 \pi } { 8 } - \frac { 3 \pi n } { 2 } = \frac { 3 \pi } { 8 } + \frac { \pi n } { 2 } + 2 \pi k }
\end{array} \rightarrow \left[\begin{array}{c}
\frac{\pi}{4}=-\pi n+2 \pi s \\
n=-k,(\wedge \wedge)
\end{array}\right.\right.
$$

The series (^) is empty, as the equality does not hold for any integers $n$ and $s$. The series (^^) contains any integer $n$. The series (**) is the desired one.
