---
tag: A6BSEJG5Y6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the coordinates of two given points on the $X$-axis be $x_{1}$ and $x_{2}$. Show that any point between them can be written in the form

$$
\frac{p_{1} x_{1}+p_{2} x_{2}}{p_{1}+p_{2}}
$$

with suitable positive numbers $p_{1}$ and $p_{2}$. The expression becomes more transparent if we denote $\frac{p_{1}}{p_{1}+p_{2}}$ by $q_{1}$ and $\frac{p_{2}}{p_{1}+p_{2}}$ by $q_{2}$. Then the point can also be written as:

$$
q_{1} x_{1}+q_{2} x_{2}
$$

where $q_{1}$ and $q_{2}$ are positive and $q_{1}+q_{2}=1$.

How can the ordinate of a point (B) or (B') on the chord between the points of the curve of a function $f(x)$ with abscissae $x_{1}$ and $x_{2}$ be expressed?

Write the above property expressing convexity in the form of an inequality for the function.

The inequality of the mean is called the Jensen inequality. If in this $q_{1}=q_{2}\left(=\frac{1}{2}\right)$ or $p_{1}=p_{2}$, then we obtain the symmetric Jensen inequality.
