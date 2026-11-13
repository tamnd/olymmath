---
tag: VDYA41PQNX
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73521
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle with sides $a \leq b \leq c$, by the law of cosines we have:

$$
\cos \hat{C}=\frac{a^{2}+b^{2}-c^{2}}{2 a b}
$$

If the angle $\hat{C}$ is obtuse, $\cos \hat{C}<0$. Since $2 a b$ is positive, this is the same as $a^{2}+b^{2}-c^{2}<0$. Therefore, for a triangle to be obtuse, the square of the largest side is greater than the sum of the squares of the other two sides. Additionally, by the triangle inequality, we know that the largest side is less than the sum of the other two. We can summarize these two pieces of information through the inequalities

$$
a^{2}+b^{2}<c^{2}<(a+b)^{2}
$$

How many obtuse triangles can we form with positive integer sides less than 7?

Note: Consider that two triangles with the same side lengths but in different orders represent the same triangle.
