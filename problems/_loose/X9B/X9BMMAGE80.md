---
tag: X9BMMAGE80
kind: problem
type: answer
answer: "10908"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let G, O, D, I, and T be digits that satisfy the following equation:

\begin{tabular}{ccccc}
&G&O&G&O\\
+&D&I&D&I\\
\hline
G&O&D&O&T
\end{tabular}

(Note that G and D cannot be $0$, and that the five variables are not necessarily different.)

Compute the value of GODOT.
