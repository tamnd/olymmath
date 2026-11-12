---
tag: QE1CRZJT6T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $p$ un nombre premier impair, $h<p$ un entier, $e \in\{1,2\}$.
On pose $n=h \cdot p^{e}+1$ et on suppose que:

$$
\left\{\begin{array}{r}
n \mid 2^{n-1}-1 \\
n \nmid 2^{h}-1
\end{array}\right.
$$

Montrer que n est premier.
