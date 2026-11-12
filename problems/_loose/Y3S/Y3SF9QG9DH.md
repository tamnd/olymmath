---
tag: Y3SF9QG9DH
kind: problem
type: answer
answer: =72,b=24;\quad=45,b=15
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1957
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a > b$, denote $x, y, z$ as digits. Consider several cases for the decimal representation of the desired numbers.

Case 1. Let $a = x \cdot 10 + y, b = y \cdot 10 + z$.

a) Write the conditions of the problem for these notations

$$
\left\{\begin{array} { c }
{ 1 0 x + y = 3 ( 1 0 y + z ) , } \\
{ x + y = y + z + 3 , }
\end{array} \left\{\begin{array}{c}
10 x - 29 y = 3 z, \\
z = x - 3
\end{array} 7 x - 29 y = -9, \left\{\begin{array}{c}
x = 7 \\
y = 2 \\
z = 4
\end{array}\right.\right.\right.
$$

Thus, $a = 72, b = 24$.
b) $\left\{\begin{array}{c}10 x + y = 3(10 y + z), \\ x + y = y + z - 3,\end{array}\left\{\begin{array}{c}10 x - 29 y = 3 z \\ z = x + 3,\end{array}\right.\right.$

$7 x - 29 y = 9$, there are no digits satisfying the condition of the problem.

Case 2. Let $a = x \cdot 10 + y, b = z \cdot 10 + x$.

$$
\left\{\begin{array} { c }
{ 1 0 x + y = 3 ( 1 0 z + x ) , } \\
{ x + y = x + z \pm 3 }
\end{array} \left\{\begin{array}{c}
7 x + y = 30 z, \\
z = y \pm 3,
\end{array} 7 x - 29 y = \pm 90, \emptyset\right.\right.
$$

Case 3. Let $a = x \cdot 10 + y, b = x \cdot 10 + z$, there are no digits satisfying the condition of the problem.

Case 4. Let $a = x \cdot 10 + y, b = z \cdot 10 + y$.

$$
\begin{aligned}
& \left\{\begin{array} { c }
{ 1 0 x + y = 3 ( 1 0 z + y ) , } \\
{ x + y = z + y \pm 3 , }
\end{array} \left\{\begin{array}{c}
10 x - 2 y = 30 z, \\
z = x \pm 3,
\end{array} 10 x + y = \pm 45\right.\right. \\
& \left\{\begin{array}{l}
x = 4 \\
y = 5 \\
z = 1
\end{array}\right.
\end{aligned}
$$

Thus, $a = 45, b = 15$.
