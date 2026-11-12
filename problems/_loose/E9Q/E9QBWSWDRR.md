---
tag: E9QBWSWDRR
kind: problem
type: answer
answer: "1040"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35947
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cyclist arrived from point $A$ to point $B$ at the appointed time, moving at a certain speed. If he had increased this speed by 3 km/h, he would have arrived at the destination one hour earlier, and if he had traveled 2 km less per hour than he actually did, he would have been an hour late. Determine the distance between points $A$ and $B$, the speed of the cyclist, and the time of his journey.

$\mathrm{P}$ e shen i e. Let the cyclist, arriving from point $A$ to point $B$ at the appointed time, move at a speed of $v$ kilometers per hour and spend $t$ hours on the entire journey. Then the distance between points $A$ and $B$ is $v t$ kilometers, which, according to the problem, is equal to $(v+3)(t-1)$ or $(v-2)(t+1)$ km.

We have the system of equations:

$$
\left\{\begin{array}{l}
(v+3)(t-1)=v t \\
(v-2)(t+1)=v t
\end{array}\right.
$$

from which $t=5$ (hours), $v=12$ (km/h), the distance from $A$ to $B$ is 60 km.
