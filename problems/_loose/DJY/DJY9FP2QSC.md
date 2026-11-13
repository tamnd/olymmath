---
tag: DJY9FP2QSC
kind: problem
type: answer
answer: 27n^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, there are $3 n$ numbers satisfying:
$$
\begin{array}{c}
0 \leqslant a_{1} \leqslant a_{2} \leqslant \cdots \leqslant a_{3 n}, \\
\text { and }\left(\sum_{i=1}^{3 n} a_{i}\right)^{3} \geqslant k_{n}\left(\sum_{i=1}^{n} a_{i} a_{n+i} a_{2 n+i}\right) \text { always holds. }
\end{array}
$$

Find the best possible value of $k_{n}$ (expressed in terms of $n$).
