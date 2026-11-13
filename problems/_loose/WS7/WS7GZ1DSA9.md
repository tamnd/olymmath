---
tag: WS7GZ1DSA9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real numbers $a_i,b_i~(i=1,2,\ldots,n)$ such that
\begin{align*}
&a_1\ge a_2\ge\ldots\ge a_n>0,\\
&b_1\ge a_1,\\
&b_1b_2\ge a_1a_2,\\
&\vdots\\
&b_1b_2\cdots b_n\ge a_1a_2\cdots a_n,
\end{align*}prove that $b_1+b_2+\ldots+b_n\ge a_1+a_2+\ldots+a_n$.
