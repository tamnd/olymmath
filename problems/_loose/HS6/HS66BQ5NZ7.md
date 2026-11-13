---
tag: HS66BQ5NZ7
kind: problem
type: answer
answer: 2n-8
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147070
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 5$ be an integer. There are $n$ points in the plane, no three of them collinear. Each day, Tom erases one of the points, until there are three points left. On the $i$-th day, for $1 \leqslant i \leqslant n-3$, before erasing that day's point, Tom writes down the positive integer $v(i)$ such that the convex hull of the points at that moment has $v(i)$ vertices. Finally, he writes down $v(n-2)=3$. Find the greatest possible value that the expression

$$
|v(1)-v(2)|+|v(2)-v(3)|+\ldots+|v(n-3)-v(n-2)|
$$

can obtain among all possible initial configurations of $n$ points and all possible Tom's moves.

Remark. A convex hull of a finite set of points in the plane is the smallest convex polygon containing all the points of the set (inside it or on the boundary).

(Ivan Novak, Namik Agić)
