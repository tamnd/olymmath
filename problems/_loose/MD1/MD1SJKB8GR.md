---
tag: MD1SJKB8GR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We need to determine the distance between points $A$ and $B$. A river flows between them. We are on the bank where $A$ is located. We only have a measuring tape, and we can only use it to measure along the line $AB$ due to the unevenness of the terrain. By sequentially placing markers $R_{1}, R_{2}, \ldots$, we mark out the following point system:

$R_{1}$ is placed arbitrarily,

$R_{2}$ is placed arbitrarily on the line $A R_{1}$;

$R_{3}$ is placed arbitrarily on the line $B R_{2}$;

$R_{4}$ is placed at the intersection of lines $A B$ and $R_{1} R_{3}$;

$R_{5}$ is placed at the intersection of lines $B R_{1}$ and $R_{2} R_{4}$;

$R_{6}$ is placed at the intersection of lines $A B$ and $R_{3} R_{5}$.

($R_{1}, R_{2}, R_{3}$, and $R_{5}$ are not on the line $A B$, and the positions of the arbitrarily placed markers can be adjusted as needed, while the positions of the other points will be favorable for us.)

Show that the distance $A B$ is equal to

$$
\frac{A R_{4} \cdot A R_{6}}{R_{4} R_{6} - A R_{4}}
$$

in absolute value.
