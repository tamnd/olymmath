---
tag: YXRJW1XBSG
kind: problem
type: answer
answer: f(x)=\frac{5}{8x^{2}}-\frac{x^{3}}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4774
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's draw an arbitrary line $y=k-b$, intersecting the parabola at points $A$ and $B$. Then the abscissas of the endpoints of the chord $A$ and $B$ must satisfy the conditions: $k x - b = x^2$, i.e., $x^2 - k x + b = 0$, $x_A = \frac{k - \sqrt{k^2 - 4b}}{2}$, $x_B = \frac{k + \sqrt{k^2 - 4b}}{2}$. Then the abscissa $x_C$ of the midpoint of segment $AB$ is $x_C = \frac{x_A + x_B}{2} = \frac{k}{2}$ and depends only on the slope $k$, but not on $b$. Therefore, if two chords $A_1 B_1$ and $A_2 B_2$ are parallel, then their midpoints $C_1$ and $C_2$ have the same abscissas and the line $C_1 C_2$ is parallel to the $OY$ axis. A chord $A_0 B_0$ perpendicular to this line is parallel to the $OX$ axis and, due to symmetry, its midpoint lies on the $OY$ axis. Therefore, the line through point $C_0$ parallel to $C_1 C_2$ is the $OY$ axis. It intersects the parabola at the vertex $O$, and the line passing through point $O$ perpendicular to $OY$ is the $OX$ axis.
2) Let $t = \frac{1}{x}$; then $x = \frac{1}{t}$. We obtain the equality: $f\left(\frac{1}{t}\right) + \frac{5}{t} f(t) = \frac{3}{t^3}$. Since this equality holds for any $t \neq 0$, it holds for $t = x$. Therefore, we have: $f\left(\frac{1}{x}\right) + \frac{5}{x} f(x) = \frac{3}{x^3}$. Then we get the system of equalities:
$$
\left\{
\begin{array}{l}
f\left(\frac{1}{x}\right) + \frac{5}{x} f(x) = \frac{3}{x^3} \\
f(x) + 5x f\left(\frac{1}{x}\right) = 3x^3
\end{array}
\right.
\Longleftrightarrow
\left\{
\begin{array}{l}
5x f\left(\frac{1}{x}\right) + 25 f(x) = \frac{15}{x^2} \\
5x f\left(\frac{1}{x}\right) + f(x) = 3x^3
\end{array}
\right.
$$
Subtracting the second equation from the first, we get:
$$
24 f(x) = \frac{15}{x^2} - 3x^3 \Rightarrow f(x) = \frac{5}{8x^2} - \frac{x^3}{8}
$$
