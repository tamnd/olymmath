---
tag: BYSV2YFKQW
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=152216
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0002.parquet#row=5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
A partition of a number $n$ is a sequence of positive integers, arranged in descending order, whose sum is $n$. For example, $n=4$ has 5 partitions: $1+1+1+1=2+$ $1+1=2+2=3+1=4$. Given two different partitions of the same number, $n=a_{1}+a_{2}+\cdots+a_{k}=b_{1}+b_{2}+\cdots+b_{l}$, where $k \leq l$, the first partition is said to dominate the second if all of the following inequalities hold:
$$
\begin{aligned}
a_{1} & \geq b_{1} ; \\
a_{1}+a_{2} & \geq b_{1}+b_{2} ; \\
a_{1}+a_{2}+a_{3} & \geq b_{1}+b_{2}+b_{3} ; \\
& \vdots \\
a_{1}+a_{2}+\cdots+a_{k} & \geq b_{1}+b_{2}+\cdots+b_{k} .
\end{aligned}
$$

Find as many partitions of the number $n=20$ as possible such that none of the partitions dominates any other. Your score will be the number of partitions you find. If you make a mistake and one of your partitions does dominate another, your score is the largest $m$ such that the first $m$ partitions you list constitute a valid answer.
