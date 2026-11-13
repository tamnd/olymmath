---
tag: WRY8SZXPEB
kind: problem
type: answer
answer: (3,2,1,1,1,1),(5,4,4,4,4,4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, denote $n!=1 \times 2 \times \cdots \times n$. Find all positive integer tuples $(a, b, c, d, e, f)$, such that
$$
\begin{array}{l}
a!=b!+c!+d!+e!+f!, \\
\text { and } a>b \geqslant c \geqslant d \geqslant e \geqslant f .[1]
\end{array}
$$
