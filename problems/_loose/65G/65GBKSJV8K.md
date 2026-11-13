---
tag: 65GBKSJV8K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bob is practicing addition in base $2.$ Each time he adds two numbers in base $2,$ he counts the number of carries. For example, when summing the numbers $1001$ and $1011$ in base $2,$
$$\begin{array}{ccccc} \overset{1}{}&& \overset {1}{}&\overset {1}{} \\
0&1&0&0&1\\0&1&0&1&1 \\ \hline
1&0&1&0&0
\end{array}$$
there are three carries (shown on the top row). Suppose that Bob starts with the number $0,$ and adds $111~($i.e. $7$ in base $2)$ to it one hundred times to obtain the number $1010111100~($i.e. $700$ in base $2).$ How many carries occur (in total) in these one hundred calculations?
$$\mathrm a. ~ 280 \mathrm b.~289 \mathrm c. ~291 \mathrm d. ~294 \mathrm e. ~297$$
