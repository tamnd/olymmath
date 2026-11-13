---
tag: E4HATPKP51
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172498
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A rectangle with side lengths $a$ and $b$ is divided into 4 smaller rectangles by three lines. The first line is parallel to $a$, and the other two, which divide the resulting two rectangular parts into $2-2$ parts, are parallel to $b$. Let the areas of the smaller rectangles be $t_{1}, t_{2}, t_{3}, t_{4}$, and the area of the original rectangle be $t$. Furthermore, let the distances from the centers of the rectangles to a line $e$ in the plane, which does not intersect the rectangles, be $z_{1}, z_{2}, z_{3}, z_{4}$, and $z$. Prove that

$$
t_{1} z_{1}+t_{2} z_{2}+t_{3} z_{3}+t_{4} z_{4}=t z
$$

How does (1) change if $e$ intersects the original rectangle?
